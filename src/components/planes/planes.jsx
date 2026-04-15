import "./planes.css";

// IMÁGENES WIFI (ajusta rutas)
import wifiLeft from "../../assets/desarrollo/wifi.svg";
import wifiRight from "../../assets/desarrollo/wifi.svg";

export default function CTAWhatsapp() {

  const handleWhatsApp = () => {
    window.open("https://wa.me/573176683567  ", "_blank");
  };

  return (
    <section className="cta">

      {/* DECORACIONES */}
      <img src={wifiLeft} alt="" className="wifi wifi-left" />
      <img src={wifiRight} alt="" className="wifi wifi-right" />

      <div className="cta-content">

        <h2>
          ¿TIENES DUDAS SOBRE <br />
          <span>NUESTROS PLANES?</span>
        </h2>

        <div className="cta-line" />

        <p>
          Contáctanos por <span className="blue">WhatsApp</span> y un asesor te ayudara
          a elegir la <span className="blue">mejor opción.</span>
        </p>

        <button className="cta-btn" onClick={handleWhatsApp}>
          <span className="wa-icon">💬</span>
          CONTÁCTANOS
        </button>

      </div>

    </section>
  );
}