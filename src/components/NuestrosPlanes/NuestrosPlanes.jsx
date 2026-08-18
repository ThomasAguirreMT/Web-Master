import "./NuestrosPlanes.css";
import { ChevronsUp, Search, ChevronRight } from "lucide-react";

const planes = [
  {
    gigas: 10,
    texto:
      "Ideal para empresas pequeñas que requieren estabilidad, navegación fluida y conexión dedicada para sus operaciones diarias."
  },
  {
    gigas: 25,
    texto:
      "Perfecto para equipos de trabajo que necesitan mayor capacidad, videollamadas estables y aplicaciones en la nube sin interrupciones."
  },
  {
    gigas: 40,
    texto:
      "Diseñado para empresas en crecimiento que demandan alto rendimiento, múltiples usuarios y operación continua."
  },
  {
    gigas: 100,
    texto:
      "Diseñado para empresas en crecimiento que demandan alto rendimiento, múltiples usuarios y operación continua."
  }
];

export default function NuestrosPlanes() {
  return (
    <section className="planes-section">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <div className="planes-header">

        <div className="planes-title-mark">
          <ChevronRight size={32} strokeWidth={4} />
        </div>

        <div className="planes-title-content">


          <h2>
            NUESTROS <span>PLANES</span>
          </h2>

        </div>

      </div>


      {/* =========================
          DESCRIPCIÓN
      ========================= */}

      <p className="planes-subtitle">
        Con nuestros planes de Internet Dedicado obtienes una conexión
        exclusiva, estable y de alto desempeño, pensada para empresas
        que no pueden detenerse.
      </p>


      {/* =========================
          PLANES
      ========================= */}

      <div className="planes-container">

        {planes.map((plan, index) => (

          <div
            className="plan-card"
            key={index}
          >

            {/* ICONO */}

            <div className="icon-circle">

              <ChevronsUp
                size={32}
                strokeWidth={2.5}
              />

            </div>


            {/* VELOCIDAD */}

            <div className="plan-top">

              <h3>
                {plan.gigas}
              </h3>

              <div className="blue-line"></div>

              <span>
                GIGAS
              </span>

            </div>


            {/* DESCRIPCIÓN */}

            <p className="plan-text">
              {plan.texto}
            </p>


            {/* BOTÓN */}

            <button
              className="plan-btn"

              onClick={() =>
                window.open(
                  "https://wa.me/573176683567?text=Hola,%20quiero%20informacion%20sobre%20los%20planes",
                  "_blank"
                )
              }
            >

              <Search size={18} />

              Saber más

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}