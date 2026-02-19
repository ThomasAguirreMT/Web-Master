import "./about.css";
import flechaquienes from "../../assets/about/flechaquienes.svg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-card">

        {/* TÍTULO */}
        <div className="about-title">
          <img
            src={flechaquienes}
            alt="Quiénes somos"
            className="about-ribbon"
          />
          <span className="about-title-text">QUIÉNES SOMOS</span>
        </div>

        {/* CONTENIDO */}
        <div className="about-content">
          <p>
            En Web Master Colombia somos un{" "}
            <strong>Carrier Tier 2 de Internet dedicado</strong>,
            especializados en brindar conectividad empresarial de alta capacidad,
            baja latencia y atención inmediata.
          </p>

          <p>
            Nuestra experiencia técnica, sumada a un enfoque cercano y personalizado,
            nos posiciona como un aliado estratégico para empresas que necesitan
            conectividad confiable, escalable y preparada para el crecimiento.
          </p>
        </div>

      </div>

      <div className="about-base" />
    </section>
  );
}
  


