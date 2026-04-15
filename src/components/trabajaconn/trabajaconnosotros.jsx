import "./trabajacon.css";

// VIDEOS
import videoDesktop from "../../assets/desarrollo/trabajaconnosotros.mp4";
import videoMobile from "../../assets/desarrollo/trabajaconnosotros-mobile.mp4";

export default function WorkWithUs() {
  return (
    <section className="crs-container">

      {/* HERO VIDEO */}
      <div className="crs-hero">

        {/* VIDEO DESKTOP */}
        <video
          className="crs-video crs-video-desktop"
          src={videoDesktop}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* VIDEO MOBILE */}
        <video
          className="crs-video crs-video-mobile"
          src={videoMobile}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="crs-overlay" />

   

      </div>

      {/* INFO */}
      <div className="crs-info">
        <h2>
          <span className="crs-arrow">›</span>
          ¿POR QUÉ TRABAJAR CON NOSOTROS?
        </h2>

        <p>
          En Web Master somos el aliado tecnológico de los ISPs. Ofrecemos
          acompañamiento técnico especializado, soporte en infraestructura y
          asesoría en redes para optimizar y escalar tus operaciones.
        </p>
      </div>

    </section>
  );
}