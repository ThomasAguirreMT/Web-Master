import "./nuestraTv.css";
import avatar from "../../assets/television/avatar.webp";
import fondo from "../../assets/television/fondo.webp";

export default function NuestraTV() {
  return (
    <section className="tv-section">

      {/* FONDO */}
      <img
        src={fondo}
        className="tv-fondo"
        alt=""
      />

      {/* TEXTO */}
      <div className="tv-text">
        <h2>NUESTRA TV</h2>

        <p>
          En Web Master contamos con una parrilla de televisión digital compuesta
          por más de 150 canales, distribuidos a través de una infraestructura
          robusta y estable. Nuestro servicio garantiza una señal continua y de
          alta calidad, ideal para hogares, conjuntos residenciales y proyectos
          que requieren una oferta amplia y confiable de contenido televisivo.
        </p>
      </div>

      {/* PERSONAJE */}
      <img
        src={avatar}
        className="tv-personaje"
        alt=""
      />

    </section>
  );
}