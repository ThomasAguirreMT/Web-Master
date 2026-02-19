import "./cobertura.css";

import mapa from "../../assets/cobertura/mapacolombia.svg";
import world from "../../assets/cobertura/mundogirando.svg";
import napcolombia from "../../assets/cobertura/napcolombia.svg";

import equinix from "../../assets/cobertura/equinox.svg";
import odata from "../../assets/cobertura/odata.svg";

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
            <span>DATA CEENTER</span>
          </h2>

         <div className="logos">
  <img src={odata} alt="Odata" className="logo-odata" />
  <img src={equinix} alt="Equinix" className="logo-equinix" />
  <img src={napcolombia} alt="Nap Colombia" className="logo-napcolombia" />
</div>


          
        </div>

      </div>
    </section>
  );
}

export default Cobertura;
