import "./bannerTV.css";
import gumball from "../../assets/television/gumball.webp";
import escandalosos from "../../assets/television/escandalosos.webp";
import logo from "../../assets/television/logo.svg";

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



          <img src={logo} alt="logo" className="banner-logo" />
        </div>

        {/* Personaje derecha */}
        <img src={gumball} alt="gumball" className="img-right" />

      </div>
    </section>
  );
};

export default Banner;