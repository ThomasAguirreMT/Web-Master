require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const app = express();

/* ========================
   MIDDLEWARES
======================== */
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(morgan("combined"));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

/* ========================
   DB
======================== */
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

/* ========================
   EMAIL
======================== */
const transporter = nodemailer.createTransport({
  host: "webmastercolombia.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: { rejectUnauthorized: false }
});

/* ========================
   ENDPOINTS SELECTS
======================== */
app.get("/tipos-pqr", async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM tipo_pqr");
  res.json(rows);
});

app.get("/solicitudes/:id", async (req, res) => {
  const [rows] = await db.execute(
    "SELECT * FROM solicitud WHERE tipo_pqr_id = ?",
    [req.params.id]
  );
  res.json(rows);
});

app.get("/motivos/:id", async (req, res) => {
  const [rows] = await db.execute(
    "SELECT * FROM motivo WHERE solicitud_id = ?",
    [req.params.id]
  );
  res.json(rows);
});

/* ========================
   VALIDACIÓN
======================== */
const validatePQR = [
  body("nombre").notEmpty(),
  body("correo").isEmail(),
  body("descripcion").notEmpty()
];

/* ========================
   CREAR PQR
======================== */
app.post("/pqr", validatePQR, async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const data = req.body;
    const year = new Date().getFullYear();

    /* ========================
       GENERAR CONSECUTIVO
    ======================== */
    const [rows] = await db.execute(`
      SELECT MAX(consecutivo) AS max 
      FROM pqr 
      WHERE YEAR(fecha) = ?
    `, [year]);

    const consecutivo = (rows[0].max || 0) + 1;
    const numero = String(consecutivo).padStart(4, "0");
    const radicado = `PQR-${year}-${numero}`;

    /* ========================
       INSERT
    ======================== */
    await db.execute(`
      INSERT INTO pqr 
      (
        radicado,
        consecutivo,
        tipo_identificacion_id,
        numero_identificacion,
        nombre,
        correo,
        telefono,
        tipo_pqr_id,
        solicitud_id,
        motivo_id,
        asunto,
        descripcion
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      radicado,
      consecutivo,
      data.tipo_identificacion,
      data.documento,
      data.nombre,
      data.correo,
      data.telefono,
      data.tipo,
      data.area,
      data.motivo,
      data.asunto,
      data.descripcion
    ]);

    /* ========================
       TRAER NOMBRES
    ======================== */
    const [info] = await db.execute(`
      SELECT 
        tp.nombre AS tipo_nombre,
        s.nombre AS solicitud_nombre,
        m.nombre AS motivo_nombre
      FROM tipo_pqr tp
      LEFT JOIN solicitud s ON s.id = ?
      LEFT JOIN motivo m ON m.id = ?
      WHERE tp.id = ?
    `, [data.area, data.motivo, data.tipo]);

    const nombres = info[0];

    /* ========================
       EMAIL INTERNO
    ======================== */
    try {
      await transporter.sendMail({
        from: `"Sistema PQR" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Nueva PQR ${radicado}`,
        html: `
          <h2>Nueva PQR</h2>
          <p><b>Radicado:</b> ${radicado}</p>
          <p><b>Nombre:</b> ${data.nombre}</p>
          <p><b>Documento:</b> ${data.documento}</p>
          <p><b>Correo:</b> ${data.correo}</p>
          <p><b>Teléfono:</b> ${data.telefono}</p>
          <p><b>Tipo:</b> ${nombres.tipo_nombre}</p>
          <p><b>Solicitud:</b> ${nombres.solicitud_nombre}</p>
          <p><b>Motivo:</b> ${nombres.motivo_nombre}</p>
          <p><b>Asunto:</b> ${data.asunto}</p>
          <p><b>Descripción:</b> ${data.descripcion}</p>
        `
      });

      console.log(" Email interno enviado");
    } catch (err) {
      console.error(" Error email interno:", err);
    }

    /* ========================
       EMAIL USUARIO
    ======================== */
    try {
      await transporter.sendMail({
        from: `"Sistema PQR" <${process.env.EMAIL_USER}>`,
        to: data.correo,
        subject: `Confirmación de PQR ${radicado}`,
        html: `
          <h2 style="color:#0d6efd;">Hemos recibido tu solicitud</h2>

          <p>Hola <b>${data.nombre}</b>,</p>

          <p>Tu solicitud fue registrada correctamente.</p>

          <hr>

          <p><b>Radicado:</b> ${radicado}</p>
          <p><b>Tipo:</b> ${nombres.tipo_nombre}</p>
          <p><b>Solicitud:</b> ${nombres.solicitud_nombre}</p>
          <p><b>Motivo:</b> ${nombres.motivo_nombre}</p>

          <hr>

          <p>Te responderemos en el menor tiempo posible.</p>

          <p style="font-size:12px;color:gray;">
            Este es un mensaje automático, por favor no responder.
          </p>
        `
      });

      console.log(" Email usuario enviado");
    } catch (err) {
      console.error(" Error email usuario:", err);
    }

    res.json({ success: true, radicado });

  } catch (error) {
    console.error(" ERROR GENERAL:", error);
    res.status(500).json({ error: "Error servidor" });
  }
});

/* ======================== */
app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo");
});