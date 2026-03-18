import "./bannerTV.css";

import escandalosos from "../../assets/television/escandalosos.webp";
import gumball from "../../assets/television/gumball.webp";
import logo from "../../assets/aliados/inttelgo.svg";

export default function BannerTV() {

  return (

    <section className="banner-tv">

      <div className="banner-tv-content">

        {/* izquierda */}

        <img
          src={escandalosos}
          alt=""
          className="banner-izq"
        />

        {/* texto */}

        <div className="banner-texto">

          <h2>
            EL MEJOR ENTRETENIMIENTO
          </h2>

          <h2>
            LO ENCUENTRAS EN
          </h2>

          <img
            src={logo}
            alt=""
            className="banner-logo"
          />

        </div>


        {/* derecha */}

        <img
          src={gumball}
          alt=""
          className="banner-der"
        />

      </div>

    </section>

  );

}