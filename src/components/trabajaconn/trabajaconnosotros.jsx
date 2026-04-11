import "./trabajacon.css";

// VIDEO
import careersVideo from "../../assets/desarrollo/trabajaconnosotros.mp4";

export default function WorkWithUs() {
  return (
    <section className="crs-container">

      {/* HERO VIDEO */}
      <div className="crs-hero">
        <video
          className="crs-video"
          src={careersVideo}
          autoPlay
          muted
          loop
          playsInline
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
          asesoría en redes para optimizar y escalar tus operaciones. Contamos
          con amplia experiencia en soluciones basadas en MikroTik y Cisco,
          ayudando a nuestros aliados a mejorar la estabilidad, seguridad y
          rendimiento de sus redes.
        </p>
      </div>

    </section>
  );
}