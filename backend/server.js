require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

/*=====================================================
=            CONFIGURACIÓN DE MULTER                  =
=====================================================*/

const uploadPath = path.join(__dirname, "uploads", "pqr");

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {

        const extension = path.extname(file.originalname);

        const nombre =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1000000) +
            extension;

        cb(null, nombre);

    }

});

const upload = multer({

    storage,

    limits: {

        fileSize: 10 * 1024 * 1024

    },

    fileFilter(req, file, cb) {

        const permitidos = [

            "application/pdf",
            "image/jpeg",
            "image/jpg",
            "image/png"

        ];

        if (permitidos.includes(file.mimetype)) {

            return cb(null, true);

        }

        cb(new Error("Formato de archivo no permitido."));

    }

});

/*=====================================================
=            MIDDLEWARES                              =
=====================================================*/

app.use(helmet());

const allowedOrigins = [

    "http://localhost:3000",
    "http://localhost:5173",
    "https://webmastercolombia.net",
    "https://www.webmastercolombia.net"

];

app.use(cors({

    origin(origin, callback) {

        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {

            return callback(null, true);

        }

        callback(new Error("Origen no permitido por CORS."));

    }

}));

app.use(express.json());

app.use(morgan("combined"));

app.use(rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100

}));

/*=====================================================
=            BASE DE DATOS                            =
=====================================================*/

const db = mysql.createPool({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,

    database: process.env.DB_NAME,

    connectionLimit: 10

});

/*=====================================================
=            CORREO                                   =
=====================================================*/

const transporter = nodemailer.createTransport({

    host: "webmastercolombia.net",

    port: 465,

    secure: true,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    },

    tls: {

        rejectUnauthorized: false

    }

});

/*=====================================================
=            RUTA PRINCIPAL                           =
=====================================================*/

app.get("/", (req, res) => {

    res.send("Backend PQR funcionando.");

});


/*=====================================================
=            CATÁLOGOS                                =
=====================================================*/

app.get("/tipos-identificacion", async (req, res) => {

    try {

        const [rows] = await db.execute(
            "SELECT * FROM tipo_identificacion"
        );

        res.json(rows);

    } catch (error) {

        console.error("ERROR TIPOS IDENTIFICACION:", error);

        res.status(500).json({
            mensaje: error.message,
            codigo: error.code,
            sql: error.sqlMessage
        });

    }

});

app.get("/tipos-pqr", async (req, res) => {

    try {

        const [rows] = await db.execute(
            "SELECT * FROM tipo_pqr"
        );

        res.json(rows);

    } catch (error) {

        console.error("ERROR TIPOS PQR:", error);

        res.status(500).json({
            mensaje: error.message,
            codigo: error.code,
            sql: error.sqlMessage
        });

    }

});

app.get("/solicitudes/:id", async (req, res) => {

    try {

        const [rows] = await db.execute(

            "SELECT * FROM solicitud WHERE tipo_pqr_id = ?",

            [req.params.id]

        );

        res.json(rows);

    } catch (error) {

        console.error("ERROR SOLICITUDES:", error);

        res.status(500).json({

            mensaje: error.message,
            codigo: error.code,
            sql: error.sqlMessage

        });

    }

});

app.get("/motivos/:id", async (req, res) => {

    try {

        const [rows] = await db.execute(

            "SELECT * FROM motivo WHERE solicitud_id = ?",

            [req.params.id]

        );

        res.json(rows);

    } catch (error) {

        console.error("ERROR MOTIVOS:", error);

        res.status(500).json({

            mensaje: error.message,
            codigo: error.code,
            sql: error.sqlMessage

        });

    }

});

/*=====================================================
=            VALIDACIONES                             =
=====================================================*/

const validatePQR = [

    body("nombre")
        .trim()
        .notEmpty()
        .withMessage("El nombre es obligatorio."),

    body("correo")
        .isEmail()
        .withMessage("Correo inválido."),

    body("descripcion")
        .trim()
        .notEmpty()
        .withMessage("La descripción es obligatoria.")

];


/*=====================================================
=            CREAR PQR                                =
=====================================================*/

app.post(
    "/pqr",
    upload.single("archivo"),
    validatePQR,
    async (req, res) => {

        try {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {

                return res.status(400).json({

                    success: false,

                    errors: errors.array()

                });

            }

            const data = req.body;

            const archivo = req.file
                ? `uploads/pqr/${req.file.filename}`
                : null;

            /*==========================================
            GENERAR RADICADO
            ==========================================*/

            const year = new Date().getFullYear();

            const [rows] = await db.execute(

                `
                SELECT MAX(consecutivo) AS consecutivo
                FROM pqr
                WHERE YEAR(fecha)=?
                `,

                [year]

            );

            const consecutivo = (rows[0].consecutivo || 0) + 1;

            const radicado =
                `PQR-${year}-${String(consecutivo).padStart(4, "0")}`;

            /*==========================================
            INSERTAR
            ==========================================*/

            await db.execute(

                `
                INSERT INTO pqr
                (

                    radicado,
                    consecutivo,
                    tipo_identificacion_id,
                    numero_identificacion,
                    tipo_pqr_id,
                    solicitud_id,
                    motivo_id,
                    observaciones,
                    archivo,
                    nombre,
                    documento,
                    correo,
                    telefono,
                    asunto,
                    descripcion

                )

                VALUES
                (
                    ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
                )
                `,

                [

                    radicado,

                    consecutivo,

                    data.tipo_identificacion,

                    data.documento,

                    data.tipo,

                    data.area,

                    data.motivo,

                    "",

                    archivo,

                    data.nombre,

                    data.documento,

                    data.correo,

                    data.telefono,

                    data.asunto,

                    data.descripcion

                ]

            );

            /*==========================================
            OBTENER NOMBRES
            ==========================================*/

            const [info] = await db.execute(

                `
                SELECT

                (SELECT nombre
                 FROM tipo_pqr
                 WHERE id=?) tipo_nombre,

                (SELECT nombre
                 FROM solicitud
                 WHERE id=?) solicitud_nombre,

                (SELECT nombre
                 FROM motivo
                 WHERE id=?) motivo_nombre
                `,

                [

                    data.tipo,

                    data.area,

                    data.motivo

                ]

            );

            const nombres = info[0];
			
			
			
			            /*==========================================
            CORREO INTERNO
            ==========================================*/

            try {

                await transporter.sendMail({

                    from: `Sistema PQR <${process.env.EMAIL_USER}>`,

                    to: process.env.EMAIL_USER,

                    subject: `Nueva PQR ${radicado}`,

                    html: `

                        <h2>Nueva PQR recibida</h2>

                        <hr>

                        <p><b>Radicado:</b> ${radicado}</p>

                        <p><b>Nombre:</b> ${data.nombre}</p>

                        <p><b>Documento:</b> ${data.documento}</p>

                        <p><b>Correo:</b> ${data.correo}</p>

                        <p><b>Teléfono:</b> ${data.telefono}</p>

                        <p><b>Tipo:</b> ${nombres.tipo_nombre}</p>

                        <p><b>Solicitud:</b> ${nombres.solicitud_nombre}</p>

                        <p><b>Motivo:</b> ${nombres.motivo_nombre}</p>

                        <p><b>Asunto:</b> ${data.asunto}</p>

                        <p><b>Descripción:</b></p>

                        <p>${data.descripcion}</p>

                        ${
                            archivo
                                ? `<p><b>Archivo adjunto:</b> ${archivo}</p>`
                                : "<p><b>Sin archivo adjunto.</b></p>"
                        }

                    `

                });

            } catch (err) {

                console.error("Error enviando correo interno:", err);

            }

            /*==========================================
            CORREO AL CLIENTE
            ==========================================*/

            try {

                await transporter.sendMail({

                    from: `Sistema PQR <${process.env.EMAIL_USER}>`,

                    to: data.correo,

                    subject: `Confirmación de radicado ${radicado}`,

                    html: `

                        <h2>Hemos recibido tu solicitud</h2>

                        <p>Hola <b>${data.nombre}</b>,</p>

                        <p>Tu solicitud fue registrada correctamente.</p>

                        <p>Tu número de radicado es:</p>

                        <h2>${radicado}</h2>

                        <p>Conserva este número para futuras consultas.</p>

                        <hr>

                        <p>Webmaster Colombia</p>

                    `

                });

            } catch (err) {

                console.error("Error enviando correo al cliente:", err);

            }

            return res.status(200).json({

                success: true,

                message: "PQR registrada correctamente.",

                radicado

            });

        } catch (error) {

            console.error("ERROR GENERAL:", error);

            return res.status(500).json({

                success: false,

                message: "Error interno del servidor."

            });

        }

    }

);

/*=====================================================
=            ERRORES DE MULTER                        =
=====================================================*/

app.use((err, req, res, next) => {

    if (err instanceof multer.MulterError) {

        return res.status(400).json({

            success: false,

            message: "El archivo supera el tamaño máximo permitido de 10 MB."

        });

    }

    if (err) {

        return res.status(400).json({

            success: false,

            message: err.message

        });

    }

    next();

});

/*=====================================================
=            INICIAR SERVIDOR                         =
=====================================================*/

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {

    console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);

});
			
			



