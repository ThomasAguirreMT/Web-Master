import { useState } from "react";
import "./Formatopqr.css";

const initialForm = {
  nombre: "",
  documento: "",
  correo: "",
  telefono: "",
  tipo: "",
  area: "",
  asunto: "",
  descripcion: "",
};

export default function PQR() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [radicado, setRadicado] = useState("");

  const set = (k, v) => setForm({ ...form, [k]: v });

  const generarRadicado = () => {
    return `PQR-${new Date().getFullYear()}-${Math.floor(Math.random() * 999999)}`;
  };

  const validarPaso1 = () => {
    let e = {};
    if (!form.nombre) e.nombre = true;
    if (!form.documento) e.documento = true;
    if (!form.correo.includes("@")) e.correo = true;
    if (!form.telefono) e.telefono = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validarPaso2 = () => {
    let e = {};
    if (!form.tipo) e.tipo = true;
    if (!form.area) e.area = true;
    if (!form.asunto) e.asunto = true;
    if (form.descripcion.length < 20) e.descripcion = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 1 && !validarPaso1()) return;
    if (step === 2 && !validarPaso2()) return;
    setStep(step + 1);
  };

  const back = () => setStep(step - 1);

  const submit = () => {
    const rad = generarRadicado();
    setRadicado(rad);

    console.log("Enviar a backend:", form);

    setStep(4);
  };

  return (
    <div className="pqr">
      <div className="pqr-box">

        {/* HEADER */}
        <div className="pqr-header">
          <h2>Radicación de PQR</h2>
          <p>Registra tu petición, queja, reclamo o sugerencia</p>
        </div>

        {/* STEPS */}
        <div className="pqr-steps">
          <span className={step >= 1 ? "active" : ""}>Datos</span>
          <span className={step >= 2 ? "active" : ""}>Solicitud</span>
          <span className={step >= 3 ? "active" : ""}>Confirmar</span>
        </div>

        {/* PASO 1 */}
        {step === 1 && (
          <>
            <input
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={e => set("nombre", e.target.value)}
              className={errors.nombre ? "error" : ""}
            />

            <input
              placeholder="Documento"
              value={form.documento}
              onChange={e => set("documento", e.target.value)}
              className={errors.documento ? "error" : ""}
            />

            <input
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={e => set("correo", e.target.value)}
              className={errors.correo ? "error" : ""}
            />

            <input
              placeholder="Teléfono"
              value={form.telefono}
              onChange={e => set("telefono", e.target.value)}
              className={errors.telefono ? "error" : ""}
            />

            <button onClick={next}>Continuar</button>
          </>
        )}

        {/* PASO 2 */}
        {step === 2 && (
          <>
            <select
              value={form.tipo}
              onChange={e => set("tipo", e.target.value)}
              className={errors.tipo ? "error" : ""}
            >
              <option value="">Tipo de solicitud</option>
              <option value="peticion">Petición</option>
              <option value="queja">Queja</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
            </select>

            <select
              value={form.area}
              onChange={e => set("area", e.target.value)}
              className={errors.area ? "error" : ""}
            >
              <option value="">Área</option>
              <option>Internet</option>
              <option>Televisión</option>
              <option>Soporte</option>
              <option>Facturación</option>
            </select>

            <input
              placeholder="Asunto"
              value={form.asunto}
              onChange={e => set("asunto", e.target.value)}
              className={errors.asunto ? "error" : ""}
            />

            <textarea
              placeholder="Describe detalladamente tu solicitud"
              value={form.descripcion}
              onChange={e => set("descripcion", e.target.value)}
              className={errors.descripcion ? "error" : ""}
            />

            <div className="pqr-actions">
              <button className="pqr-secondary" onClick={back}>Atrás</button>
              <button onClick={next}>Continuar</button>
            </div>
          </>
        )}

        {/* PASO 3 */}
        {step === 3 && (
          <>
            <div className="pqr-resume">
              <p><strong>Nombre:</strong> {form.nombre}</p>
              <p><strong>Documento:</strong> {form.documento}</p>
              <p><strong>Tipo:</strong> {form.tipo}</p>
              <p><strong>Área:</strong> {form.area}</p>
              <p><strong>Asunto:</strong> {form.asunto}</p>
            </div>

            <div className="pqr-actions">
              <button className="pqr-secondary" onClick={back}>Atrás</button>
              <button onClick={submit}>Enviar solicitud</button>
            </div>
          </>
        )}

        {/* ÉXITO */}
        {step === 4 && (
          <div className="pqr-success">
            <h3>Solicitud registrada</h3>
            <p className="pqr-radicado">{radicado}</p>
            <span>Número de radicado</span>
            <p>Recibirás respuesta en los tiempos establecidos por ley.</p>
          </div>
        )}

      </div>
    </div>
  );
}