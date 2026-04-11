import "./Benefits.css";

import soporte from "../../assets/desarrollo/Geo.svg";
import seguridad from "../../assets/desarrollo/Geo.svg";
import mikrotik from "../../assets/desarrollo/Geo.svg";
import monitoreo from "../../assets/desarrollo/Geo.svg";
import cisco from "../../assets/desarrollo/Geo.svg";
import wifi from "../../assets/desarrollo/Geo.svg";
import crecimiento from "../../assets/desarrollo/Geo.svg";
import infraestructura from "../../assets/desarrollo/Geo.svg";



export default function BenefitsGrid() {
  return (
    <section className="bnf2-container">

      <h2 className="bnf2-title">
        <span>›</span> BENEFICIOS
      </h2>

      <div className="bnf2-grid">

        <div className="bnf2-card bnf2-big">
          <h3>SOPORTE TÉCNICO ESPECIALIZADO</h3>
          <img src={soporte} alt="" />
          <p>
            Acompañamiento permanente para la operación y resolución de incidencias en redes ISP.
          </p>
        </div>

        <div className="bnf2-card">
          <h4>SEGURIDAD DE RED</h4>
          <img src={seguridad} alt="" />
        </div>

        <div className="bnf2-card">
          <h4>IMPLEMENTACIÓN MIKROTIK</h4>
          <img src={mikrotik} alt="" />
        </div>

        <div className="bnf2-card">
          <h4>GESTIÓN Y MONITOREO</h4>
          <img src={monitoreo} alt="" />
        </div>

        <div className="bnf2-card bnf2-wide">
          <h4>SOLUCIONES CISCO</h4>
          <img src={cisco} alt="" />
        </div>

        <div className="bnf2-card">
          <h4>CONFIGURACIÓN Y OPTIMIZACIÓN</h4>
          <img src={wifi} alt="" />
        </div>

        <div className="bnf2-card">
          <h4>ESCALABILIDAD Y CRECIMIENTO</h4>
          <img src={crecimiento} alt="" />
        </div>

        <div className="bnf2-card">
          <h4>INTEGRACIÓN DE INFRAESTRUCTURA</h4>
          <img src={infraestructura} alt="" />
        </div>

        <div className="bnf2-card">
  <h4>ALTA DISPONIBILIDAD</h4>
  <img src={infraestructura} alt="" />
</div>

      </div>
    </section>
  );
}