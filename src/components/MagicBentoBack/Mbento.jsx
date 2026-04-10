import "./MbentoB.css";

import check from "../../assets/desarrollo/procesoflex.svg";
import servers from "../../assets/desarrollo/infrar.svg";
import growth from "../../assets/desarrollo/optimi.svg";
import gear from "../../assets/desarrollo/hc.svg";

export default function BackendSection() {
  return (
    <section className="fm-section">
      <h2 className="fm-title">
        LO QUE NUESTRO EQUIPO PUEDE <br />
        APORTAR AL <span>BACKEND</span> DE SU <span>PROYECTO</span>
      </h2>

      <div className="fm-grid">

        {/* IZQUIERDA ARRIBA - OPTIMIZACION */}
        <div className="fm-card fm-top-left">
          <h4>OPTIMIZACIÓN</h4>
          <img src={check} alt="" />
        </div>

        {/* IZQUIERDA CENTRO - INFRAESTRUCTURA */}
        <div className="fm-card fm-top-right">
          <h4>INFRAESTRUCTURA ROBUSTA</h4>
          <img src={servers} alt="" />
        </div>

        {/* DERECHA GRANDE */}
        <div className="fm-card fm-big-right">
          <h3>PROCESO FLEXIBLE</h3>
          <img src={gear} alt="" />
          <p>
            podemos adaptarnos a los cambios de dirección del proyecto y realizar
            ajustes según sea necesario.
          </p>
        </div>

        {/* ABAJO IZQUIERDA */}
        <div className="fm-card fm-bottom-left">
          <img src={growth} alt="" />
          <h3>HABILIDADES DE CRECIMIENTO</h3>
        </div>

      </div>
    </section>
  );
}