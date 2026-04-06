import "./bannerTV.css";
import gumball from "../../assets/television/gumball.webp";
import escandalosos from "../../assets/television/escandalosos.webp";
import logo from "../../assets/logo/logo.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">

        {/* Personajes izquierda */}
        <img src={escandalosos} alt="escandalosos" className="img-left" />

        {/* Texto */}
        <div className="banner-text">
          <h1>
            EL MEJOR ENTRETENIMIENTO <br />
            LO ENCUENTRAS EN
          </h1>

          <div className="logo-container">
            <div className="line"></div>
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Personaje derecha */}
        <img src={gumball} alt="gumball" className="img-right" />

      </div>
    </section>
  );
};

export default Banner;