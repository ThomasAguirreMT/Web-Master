import "./DesarrolloCB.css";

import backend from "../../assets/desarrollo/backend.svg";
import nube from "../../assets/desarrollo/migra.svg";
import api from "../../assets/desarrollo/api.svg";
import crm from "../../assets/desarrollo/crm.svg";


export default function ServiciosConsultoria() {

  const servicios = [
    {
      img: backend,
      texto:
        "Ya sea desarrollo de aplicaciones móviles o desarrollo web, trabajamos estrechamente con nuestros socios para crear soluciones backend personalizadas que satisfagan sus necesidades comerciales."
    },
    {
      img: nube,
      texto:
        "Nuestros servicios de migración a la nube ayudan a las empresas a migrar a tecnologías modernas. Cubrimos desde la planificación hasta la implementación."
    },
    {
        img: api,
        texto:
          "Podemos ayudarte a crear, implementar y gestionar APIs robustas y seguras utilizando tecnologías modernas para garantizar estabilidad y seguridad."
      },


      {
        img: crm,
        texto:
          "Ofrecemos soluciones de gestión de relaciones con clientes (CRM) personalizadas para ayudar a las empresas a mejorar su experiencia con los clientes."
      }
      
  ];

  return (
    <section className="sc-section">

      <div className="sc-header">
        <span>› NUESTROS SERVICIOS</span>
      </div>

      {servicios.map((item, i) => (
        <div
          key={i}
          className={`sc-row ${i % 2 !== 0 ? "reverse" : ""}`}
        >

          {/* IMAGEN (TU CARD COMPLETA) */}
          <div className="sc-img">
            <img src={item.img} alt="servicio" />
          </div>

          {/* TEXTO */}
          <div className="sc-text">
            <p>{item.texto}</p>
          </div>

        </div>
      ))}

    </section>
  );
}