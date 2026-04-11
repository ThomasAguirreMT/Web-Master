import "./MagicBent.css";

import geo from "../../assets/desarrollo/Geo.svg";
import graficos from "../../assets/desarrollo/graficos.svg";
import animaciones from "../../assets/desarrollo/interfaces.svg";
import modelos from "../../assets/desarrollo/Geo.svg";
import interfaz from "../../assets/desarrollo/interfaces.svg";


export default function MagicB() {
  return (
    <section className="fm-section">
      <h2 className="fm-title">
        CARACTERÍSTICAS QUE PODEMOS <br />
        INCORPORAR AL <span>FRONTEND</span> DE SU PROYECTO
      </h2>

      <div className="fm-grid">

        {/* IZQUIERDA GRANDE */}
        <div className="fm-card fm-big">
          <h3>GEOLOCALIZACIÓN</h3>
          <img src={geo} alt="" />
          <p>Mejorando la comunicación con tus usuarios</p>
        </div>

        {/* DERECHA ARRIBA */}
        <div className="fm-card fm-wide">
          <h3>GRÁFICOS OPTIMIZADOS</h3>
          <img src={graficos} alt="" />
        </div>

        {/* CENTRO DERECHO */}
        <div className="fm-row-small">
          <div className="fm-card">
            <h4>ANIMACIONES</h4>
            <img src={animaciones} alt="" />
          </div>

          <div className="fm-card">
            <h4>MODELOS 3D</h4>
            <img src={modelos} alt="" /> 
          </div>
        </div>

        {/* ABAJO IZQUIERDA */}
        <div className="fm-card fm-bottom-left">
          <h3>INTERFACES INTUITIVAS</h3>
          <img src={interfaz} alt="" />
        </div>

  

      </div>
    </section>
  );
}