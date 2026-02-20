import "./animations.css";
import Animacionwifi from "../../assets/animaciones/animacionwifi.mp4";
import Animaciongigas from "../../assets/animaciones/animaciongigas.mp4";

function Animations() {
  return (
    <section className="animations-section">

      {/* IZQUIERDA */}
      <div className="left">
        <video autoPlay loop muted>
          <source src={Animacionwifi} />
        </video>
      </div>

      {/* CENTRO */}
      <div className="center">
        <ul>
          <li>Internet Dedicado Carrier de alto rendimiento.</li>
          <li>Red propia anillada con máxima redundancia.</li>
          <li>Latencias ultra bajas para mayor estabilidad.</li>
          <li>Ideal para <strong>ISPs</strong>, empresas críticas y plataformas <strong>OTT</strong>.</li>
        </ul>
      </div>

      {/* DERECHA */}
      <div className="right">
        <video autoPlay loop muted>
          <source src={Animaciongigas} />
        </video>
      </div>

    </section>
  );
}

export default Animations;