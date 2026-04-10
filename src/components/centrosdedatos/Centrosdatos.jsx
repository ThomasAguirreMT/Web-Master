import "./centrosda.css";
import servidoresImg from "../../assets/desarrollo/servidores.svg";

export default function Servidores() {
  return (
    <section className="servidores">
      
      {/* IMAGEN */}
      <img src={servidoresImg} alt="Servidores" className="servidores-img" />

      {/* CONTENIDO */}
      <div className="servidores-content">
        <h2>INFRAESTRUCTURA</h2>
        <h1>
          EN CENTRO <br /> DE DATOS
        </h1>

        <div className="linea"></div>

        <p>
          No solo desarrollamos software; proporcionamos el terreno más seguro
          y rápido para que este crezca.
        </p>

        <p>
          Nuestra alianza con <span>ODATA Colocation</span> nos permite ofrecer
          una infraestructura de Data Center de última generación en toda América Latina.
        </p>

        {/* CARDS */}
        <div className="servidores-cards">
          <div className="card">
            Compatibilidad del 99.98% de proyectos a gran escala
          </div>

          <div className="card">
            Seguridad física y lógica 24/7
          </div>

          <div className="card">
            Enlace directo entre servidores 
          </div>
        </div>
      </div>
    </section>
  );
}