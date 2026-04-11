import React from "react";
import "./Consumo.css";

const FrontendBackend = () => {
  return (
    <section className="container">
      <h1 className="title">
        ¿CÓMO POTENCIAMOS EL <span>FRONTEND</span>
        <br />
        CON NUESTRO <span>BACKEND</span>?
      </h1>

      <div className="cards">
        {/* CARD 1 */}
        <div className="card">
          <h3>CONSUMO EFICIENTE DE DATOS</h3>
          <div className="divider"></div>
          <p>
            Nuestras interfaces están programadas para comunicarse de forma
            óptima con los servicios en Node.js, Python o Java alojados en ODATA
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>SEGURIDAD EN EL LADO DEL CLIENTE</h3>
          <div className="divider"></div>
          <p>
            Implementamos validaciones rigurosas y manejo de sesiones seguras
            para proteger el acceso a tus módulos contables y de capital humano
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>SINCRONIZACIÓN EN TIEMPO REAL</h3>
          <div className="divider"></div>
          <p>
            Gracias al uso de WebSockets y bases de datos como MongoDB/MySQL,
            los cambios que hagas se verán reflejados en tiempo real
          </p>
        </div>
      </div>

    </section>
  );
};

export default FrontendBackend;