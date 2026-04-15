import "./ModeloTrabajo.css";
import Esfera from "../../assets/desarrollo/esfera.svg"; 

const ModeloTrabajo = () => {
  return (
    <section className="modelo">

      {/* CONTENIDO */}
      <div className="modelo-content">
        
        <h2>
          NUESTRO MODELO <br />
          DE <span>TRABAJO</span>
        </h2>

        <div className="line"></div>

        <p>
          En Web Master vamos de la mano con <span>nuestros clientes </span> 
           por eso utilizamos una metodología scrum con 
          <span> planificación detallada</span>
        </p>


      </div>

      {/* IMAGEN DERECHA */}
      <div className="modelo-img">
        <img src={Esfera} alt="Esfera" />
      </div>

    </section>
  );
};

export default ModeloTrabajo;