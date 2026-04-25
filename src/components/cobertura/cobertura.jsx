import "./cobertura.css";

import videoMapa from "../../assets/cobertura/MapaAnimado.mp4";
import world from "../../assets/cobertura/mundogirando.svg";

import equinix from "../../assets/cobertura/equinox.svg";
import odata from "../../assets/cobertura/odata.svg";

function Cobertura() {
  return (
    <section className="cobertura">

      <img src={world} className="world-bg" alt="" />

      <div className="cobertura-container">

        <div className="cobertura-mapa">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="mapa-video"
          >
            <source src={videoMapa} type="video/mp4" />
          </video>
        </div>

        <div className="cobertura-info">
          <h2>
            HACEMOS PRESENCIA EN TODO <br />
            COLOMBIA DESDE LOS PRINCIPALES <br />
            <span>DATA CENTER</span>
          </h2>

          <div className="logos">
            <img src={odata} alt="Odata" className="logo-odata" />
            <img src={equinix} alt="Equinix" className="logo-equinix" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Cobertura;