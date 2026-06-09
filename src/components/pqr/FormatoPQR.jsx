import { useState, useEffect } from "react";
import "./Formatopqr.css";

export default function PQR() {

  /* =========================
     STATE
  ========================= */

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [radicado, setRadicado] = useState("");

  const [tipos, setTipos] = useState([]);

  const [solicitudes, setSolicitudes] = useState([]);

  const [motivos, setMotivos] = useState([]);

  const [tiposId, setTiposId] = useState([]);

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

  /* =========================
     API
  ========================= */




  const API =
    "https://thomas.webmastercolombia.net";


  /* =========================
     HELPERS
  ========================= */

  const set = (key, value) => {

    setForm(prev => ({
      ...prev,
      [key]: value
    }));

  };

  const getNombre = (list, id) => {

    return (
      list.find(i => i.id == id)?.nombre || ""
    );

  };

  const getTipoIdNombre = (id) => {

    return (
      tiposId.find(
        t => t.id_tipo_identificacion == id
      )?.tipo_identificacion || ""
    );

  };

  /* =========================
     INITIAL DATA
  ========================= */

  useEffect(() => {

    const loadData = async () => {

      try {

        const [
          tiposRes,
          tiposIdRes
        ] = await Promise.all([

          fetch(`${API}/tipos-pqr`),

          fetch(
            `${API}/tipos-identificacion`
          )

        ]);

        if (!tiposRes.ok || !tiposIdRes.ok) {

          throw new Error(
            "Error cargando datos"
          );

        }

        const tiposData =
          await tiposRes.json();

        const tiposIdData =
          await tiposIdRes.json();

        setTipos(tiposData);

        setTiposId(tiposIdData);

      } catch (error) {

        console.error(error);

      }

    };

    loadData();

  }, []);

  /* =========================
     TIPO
  ========================= */

  const handleTipo = async (value) => {

    try {

      set("tipo", value);

      set("area", "");

      set("motivo", "");

      setSolicitudes([]);

      setMotivos([]);

      if (!value) return;

      const res = await fetch(
        `${API}/solicitudes/${value}`
      );

      if (!res.ok) {

        throw new Error(
          "Error cargando solicitudes"
        );

      }

      const data = await res.json();

      setSolicitudes(data);

    } catch (error) {

      console.error(error);

    }

  };

  /* =========================
     SOLICITUD
  ========================= */

  const handleSolicitud = async (value) => {

    try {

      set("area", value);

      set("motivo", "");

      setMotivos([]);

      if (!value) return;

      const res = await fetch(
        `${API}/motivos/${value}`
      );

      if (!res.ok) {

        throw new Error(
          "Error cargando motivos"
        );

      }

      const data = await res.json();

      setMotivos(data);

    } catch (error) {

      console.error(error);

    }

  };

  /* =========================
     SUBMIT
  ========================= */

  const submit = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        `${API}/pqr`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      if (!res.ok) {

        throw new Error(
          "Error enviando PQR"
        );

      }

      const data = await res.json();

      setRadicado(data.radicado);

      setStep(4);

    } catch (error) {

      console.error(error);

      alert(
        "No se pudo enviar la solicitud."
      );

    } finally {

      setLoading(false);

    }

  };

  /* =========================
     RENDER
  ========================= */

  return (

    <div className="pqr">

      <div className="pqr-box">

        {/* HEADER */}

        <div className="pqr-header">

          <h2>
            Radicación <span>PQR</span>
          </h2>

          <p>
            A través de este formulario
            puedes registrar peticiones,
            quejas o reclamos de forma
            rápida y segura.
          </p>

        </div>

        {/* STEPS */}

        <div className="pqr-steps">

          <div
            className={`pqr-step ${step >= 1 ? "active" : ""
              }`}
          />

          <div
            className={`pqr-step ${step >= 2 ? "active" : ""
              }`}
          />

          <div
            className={`pqr-step ${step >= 3 ? "active" : ""
              }`}
          />

        </div>

        {/* PASO 1 */}

        {step === 1 && (

          <>

            <input
              type="text"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={e =>
                set(
                  "nombre",
                  e.target.value
                )
              }
            />

            <select
              value={
                form.tipo_identificacion
              }
              onChange={e =>
                set(
                  "tipo_identificacion",
                  e.target.value
                )
              }
            >

              <option value="">
                Tipo identificación
              </option>

              {tiposId.map(t => (

                <option
                  key={
                    t.id_tipo_identificacion
                  }
                  value={
                    t.id_tipo_identificacion
                  }
                >
                  {t.tipo_identificacion}
                </option>

              ))}

            </select>

            <input
              type="text"
              placeholder="Documento"
              value={form.documento}
              onChange={e =>
                set(
                  "documento",
                  e.target.value
                )
              }
            />

            <input
              type="email"
              placeholder="Correo"
              value={form.correo}
              onChange={e =>
                set(
                  "correo",
                  e.target.value
                )
              }
            />

            <input
              type="text"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={e =>
                set(
                  "telefono",
                  e.target.value
                )
              }
            />

            <button
              onClick={() => setStep(2)}
            >
              Continuar
            </button>

          </>

        )}

        {/* PASO 2 */}

        {step === 2 && (

          <>

            <select
              value={form.tipo}
              onChange={e =>
                handleTipo(
                  e.target.value
                )
              }
            >

              <option value="">
                Tipo PQR
              </option>

              {tipos.map(t => (

                <option
                  key={t.id}
                  value={t.id}
                >
                  {t.nombre}
                </option>

              ))}

            </select>

            <select
              value={form.area}
              onChange={e =>
                handleSolicitud(
                  e.target.value
                )
              }
            >

              <option value="">
                Solicitud
              </option>

              {solicitudes.map(s => (

                <option
                  key={s.id}
                  value={s.id}
                >
                  {s.nombre}
                </option>

              ))}

            </select>

            <select
              value={form.motivo}
              onChange={e =>
                set(
                  "motivo",
                  e.target.value
                )
              }
            >

              <option value="">
                Motivo
              </option>

              {motivos.map(m => (

                <option
                  key={m.id}
                  value={m.id}
                >
                  {m.nombre}
                </option>

              ))}

            </select>

            <input
              type="text"
              placeholder="Asunto"
              value={form.asunto}
              onChange={e =>
                set(
                  "asunto",
                  e.target.value
                )
              }
            />

            <textarea
              placeholder="Describe tu solicitud"
              value={form.descripcion}
              onChange={e =>
                set(
                  "descripcion",
                  e.target.value
                )
              }
            />

            <div className="pqr-actions">

              <button
                className="pqr-secondary"
                onClick={() => setStep(1)}
              >
                Atrás
              </button>

              <button
                onClick={() => setStep(3)}
              >
                Continuar
              </button>

            </div>

          </>

        )}

        {/* PASO 3 */}

        {step === 3 && (

          <>

            <div className="pqr-resume">

              <p>
                <b>Nombre:</b>{" "}
                {form.nombre}
              </p>

              <p>
                <b>
                  Tipo identificación:
                </b>{" "}
                {getTipoIdNombre(
                  form.tipo_identificacion
                )}
              </p>

              <p>
                <b>Documento:</b>{" "}
                {form.documento}
              </p>

              <p>
                <b>Correo:</b>{" "}
                {form.correo}
              </p>

              <p>
                <b>Teléfono:</b>{" "}
                {form.telefono}
              </p>

              <p>
                <b>Tipo PQR:</b>{" "}
                {getNombre(
                  tipos,
                  form.tipo
                )}
              </p>

              <p>
                <b>Solicitud:</b>{" "}
                {getNombre(
                  solicitudes,
                  form.area
                )}
              </p>

              <p>
                <b>Motivo:</b>{" "}
                {getNombre(
                  motivos,
                  form.motivo
                )}
              </p>

              <p>
                <b>Asunto:</b>{" "}
                {form.asunto}
              </p>

            </div>

            <div className="pqr-actions">

              <button
                className="pqr-secondary"
                onClick={() => setStep(2)}
              >
                Atrás
              </button>

              <button
                onClick={submit}
                disabled={loading}
              >
                {loading
                  ? "Enviando..."
                  : "Enviar"}
              </button>

            </div>

          </>

        )}

        {/* SUCCESS */}

        {step === 4 && (

          <div className="pqr-success">

            <h3>
              Solicitud enviada
              correctamente
            </h3>

            <p>
              Tu número de radicado es:
            </p>

            <div className="pqr-radicado">
              {radicado}
            </div>

          </div>

        )}

      </div>

    </div>

  );
}