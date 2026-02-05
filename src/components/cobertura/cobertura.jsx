import "./cobertura.css";

import mapa from "../../assets/mapacolombia.svg";
import world from "../../assets/mundogirando.svg";

import equinix from "../../assets/equinox.svg";
import odata from "../../assets/ODATA.svg";

function Cobertura() {
  return (
    <section className="cobertura">
      
      {/* MUNDO ANIMADO */}
      <img src={world} className="world-bg" alt="" />

      <div className="cobertura-container">

        <div className="cobertura-mapa">
          <img src={mapa} alt="Cobertura Colombia" />
        </div>

        <div className="cobertura-info">
          <h2>
            TENEMOS COBERTURA EN TODO <br />
            COLOMBIA DESDE LOS PRINCIPALES <br />
            <span>DATA CENTER</span>
          </h2>

          <div className="logos">
            <img src={equinix} alt="Equinix" />
            <img src={odata} alt="Odata" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Cobertura;
