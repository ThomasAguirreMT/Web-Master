import { useState, useEffect } from "react";
import "./Formatopqr.css";

export default function PQR() {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    nombre: "",
    tipo_identificacion: "",
    documento: "",
    correo: "",
    telefono: "",
    tipo: "",
    area: "",
    motivo: "",
    asunto: "",
    descripcion: ""
  });

  const [tipos, setTipos] = useState([]);
  const [solicitudes, setSolicitudes] = useState([]);
  const [motivos, setMotivos] = useState([]);
  const [tiposId, setTiposId] = useState([]); // 👈 NUEVO
  const [radicado, setRadicado] = useState("");

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  /* ========================
     CARGAR DATOS INICIALES
  ======================== */
  useEffect(() => {
    fetch("http://localhost:4000/tipos-pqr")
      .then(res => res.json())
      .then(setTipos);

    fetch("http://localhost:4000/tipos-identificacion") // 👈 NUEVO
      .then(res => res.json())
      .then(setTiposId);

  }, []);

  /* ========================
     DINÁMICOS
  ======================== */
  const handleTipo = async (value) => {
    set("tipo", value);

    const res = await fetch(`http://localhost:4000/solicitudes/${value}`);
    const data = await res.json();

    setSolicitudes(data);
    setMotivos([]);
    set("area", "");
    set("motivo", "");
  };

  const handleSolicitud = async (value) => {
    set("area", value);

    const res = await fetch(`http://localhost:4000/motivos/${value}`);
    const data = await res.json();

    setMotivos(data);
    set("motivo", "");
  };

  /* ========================
     UTIL
  ======================== */
  const getNombre = (list, id) =>
    list.find(i => i.id == id)?.nombre || "";

  const getTipoIdNombre = (id) =>
    tiposId.find(t => t.id_tipo_identificacion == id)?.tipo_identificacion || "";

  /* ========================
     SUBMIT
  ======================== */
  const submit = async () => {
    const res = await fetch("http://localhost:4000/pqr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setRadicado(data.radicado);
    setStep(4);
  };

  return (
    <div className="pqr">
      <div className="pqr-box">

        <h2>Radicación PQR</h2>

        {/* PASO 1 */}
        {step === 1 && (
          <>
            <input
              placeholder="Nombre"
              value={form.nombre}
              onChange={e => set("nombre", e.target.value)}
            />

            {/* 🔥 SELECT DINÁMICO */}
            <select
              value={form.tipo_identificacion}
              onChange={e => set("tipo_identificacion", e.target.value)}
            >
              <option value="">Tipo identificación</option>

              {tiposId.map(t => (
                <option
                  key={t.id_tipo_identificacion}
                  value={t.id_tipo_identificacion}
                >
                  {t.tipo_identificacion}
                </option>
              ))}
            </select>

            <input
              placeholder="Documento"
              value={form.documento}
              onChange={e => set("documento", e.target.value)}
            />

            <input
              placeholder="Correo"
              value={form.correo}
              onChange={e => set("correo", e.target.value)}
            />

            <input
              placeholder="Teléfono"
              value={form.telefono}
              onChange={e => set("telefono", e.target.value)}
            />

            <button onClick={() => setStep(2)}>Continuar</button>
          </>
        )}

        {/* PASO 2 */}
        {step === 2 && (
          <>
            <select onChange={e => handleTipo(e.target.value)}>
              <option value="">Tipo</option>
              {tipos.map(t => (
                <option key={t.id} value={t.id}>{t.nombre}</option>
              ))}
            </select>

            <select onChange={e => handleSolicitud(e.target.value)}>
              <option value="">Solicitud</option>
              {solicitudes.map(s => (
                <option key={s.id} value={s.id}>{s.nombre}</option>
              ))}
            </select>

            <select onChange={e => set("motivo", e.target.value)}>
              <option value="">Motivo</option>
              {motivos.map(m => (
                <option key={m.id} value={m.id}>{m.nombre}</option>
              ))}
            </select>

            <input
              placeholder="Asunto"
              onChange={e => set("asunto", e.target.value)}
            />

            <textarea
              placeholder="Descripción"
              onChange={e => set("descripcion", e.target.value)}
            />

            <button onClick={() => setStep(3)}>Continuar</button>
          </>
        )}

        {/* PASO 3 */}
        {step === 3 && (
          <>
            <p><b>Nombre:</b> {form.nombre}</p>
            <p><b>Tipo identificación:</b> {getTipoIdNombre(form.tipo_identificacion)}</p>
            <p><b>Tipo PQR:</b> {getNombre(tipos, form.tipo)}</p>
            <p><b>Solicitud:</b> {getNombre(solicitudes, form.area)}</p>
            <p><b>Motivo:</b> {getNombre(motivos, form.motivo)}</p>

            <button onClick={submit}>Enviar</button>
          </>
        )}

        {/* FINAL */}
        {step === 4 && (
          <>
            <h3>Radicado generado:</h3>
            <h2>{radicado}</h2>
          </>
        )}

      </div>
    </div>
  );
}