import "./ModeloTrabajo.css";
import Esfera from "../../assets/desarrollo/esfera.svg";

const ModeloTrabajo = () => {
  return (
    <section className="modelo">

      <div className="modelo-glow"></div>

      {/* ESFERA */}
      <div className="modelo-img">
        <img src={Esfera} alt="Infraestructura ISP" />
      </div>

      {/* CONTENIDO */}
      <div className="modelo-content">


        <h2>
          ¿POR QUÉ
          <br />
          TRABAJAR CON
          <br />
          <span>NOSOTROS?</span>
        </h2>

        <p>
          Somos el aliado tecnológico de los ISPs. Ofrecemos
          acompañamiento técnico especializado, soporte en
          infraestructura y asesoría en redes para optimizar
          y escalar tus operaciones.
        </p>

        <div className="modelo-stats">

          <div className="stat-card">
            <h3>24/7</h3>
            <span>Soporte especializado</span>
          </div>

          <div className="stat-card">
            <h3>+10</h3>
            <span>Años de experiencia</span>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <span>Compromiso</span>
          </div>

          <div className="stat-card">
            <h3>ISP</h3>
            <span>Enfoque especializado</span>
          </div>

        </div>

        <button
          className="btn-modelo"
          onClick={() =>
            window.open(
              "https://wa.me/573176683567?text=Hola,%20quiero%20hablar%20sobre%20mi%20proyecto",
              "_blank"
            )
          }
        >
          Hablemos de tu proyecto
        </button>
      </div>

    </section>
  );
};

export default ModeloTrabajo;