import "./DesarrolloEm.css";

import gears from "../../assets/desarrollo/tuercas.svg"; 

export default function DesarrolloEmpresarial() {
  return (
    <section className="de-section">

      {/* TEXTO */}
      <div className="de-content">
        <h1 className="de-title">
          DESARROLLO <br />
          <span>EMPRESARIAL</span>
        </h1>

        <div className="de-line"></div>

        <p className="de-text">
          Servicios de desarrollo de aplicaciones móviles empresariales que se centran
          en la creación de aplicaciones personalizadas y de alto rendimiento para
          satisfacer las necesidades específicas de grandes organizaciones.
        </p>

        <p className="de-text">
          Estas aplicaciones están diseñadas para optimizar los flujos de trabajo,
          mejorar la productividad y optimizar la interacción con el cliente mediante
          soluciones móviles fiables, escalables y seguras.
        </p>
      </div>

      {/* IMAGEN DERECHA */}
      <div className="de-image">
        <img src={gears} alt="Engranajes empresariales" />
      </div>

    </section>
  );
}