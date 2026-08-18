import "./planes.css";

import wifiLeft from "../../assets/desarrollo/wifi.svg";
import wifiRight from "../../assets/desarrollo/wifi.svg";

export default function CTAWhatsapp() {

  const handleWhatsApp = () => {
    const mensaje =
      "Hola, quiero información sobre los planes de Internet de Inttelgo.";

    const url = `https://wa.me/573176683567?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="cta">

      {/* LUCES DECORATIVAS */}
      <div className="cta-glow cta-glow-left"></div>
      <div className="cta-glow cta-glow-right"></div>

      {/* DECORACIONES WIFI */}
      <img
        src={wifiLeft}
        alt=""
        className="wifi wifi-left"
      />

      <img
        src={wifiRight}
        alt=""
        className="wifi wifi-right"
      />

      {/* CONTENIDO */}
      <div className="cta-content">

       

        <h2>
          ¿TIENES DUDAS SOBRE
          <br />
          <span>NUESTROS PLANES?</span>
        </h2>

        <div className="cta-line">
          <span></span>
        </div>

        <p>
          Nuestro equipo está listo para ayudarte a encontrar
          <strong> la conexión ideal</strong> para tu hogar o empresa.
        </p>

        <button
          className="cta-btn"
          onClick={handleWhatsApp}
        >

          <span className="wa-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.08 24l6.36-1.67a11.84 11.84 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.14-3.39-8.41ZM12.05 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.51-5.19C2.16 6.43 6.6 1.99 12.05 1.99c2.64 0 5.12 1.03 6.98 2.89a9.81 9.81 0 0 1 2.89 6.98c0 5.45-4.44 9.84-9.87 9.84Zm5.41-7.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.19 4.59.73.32 1.3.51 1.75.65.74.24 1.41.21 1.94.13.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span className="cta-btn-text">
            HABLAR CON UN ASESOR
          </span>



        </button>

        <span className="cta-note">
          Atención personalizada por WhatsApp
        </span>

      </div>

    </section>
  );
}