import "./NuestrosPlanes.css";
import { ChevronsUp, Search } from "lucide-react";

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
<div className="planes-header">
  <h2>   NUESTROS PLANES</h2>
  <span className="arrow"> ›</span>
</div>
      <p className="planes-subtitle">
        Con nuestros planes de Internet Dedicado obtienes una conexión exclusiva,
        estable y de alto desempeño, pensada para empresas que no pueden detenerse.
      </p>

      <div className="planes-container">
        {planes.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="icon-circle">
              <ChevronsUp size={32} strokeWidth={2.5} />            </div>

            <div className="plan-top">
              <h3>{plan.gigas}</h3>
              <div className="blue-line"></div>
              <span>GIGAS</span>
            </div>

            <p className="plan-text">{plan.texto}</p>

            <button className="plan-btn">
              <Search size={18} />
              Saber mas
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}