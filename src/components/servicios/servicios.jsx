import "./servicios.css";

import internet from "../../assets/internetdedicado.svg";
import transporte from "../../assets/transportededatos.svg";
import infraestructura from "../../assets/alquilerdeinfraestructura.svg";
import software from "../../assets/desarrollodesoftware.svg";

const services = [
  {
    title: "INTERNET DEDICADO",
    image: internet,
    desc: "Conectividad dedicada y estable para empresas."
  },
  {
    title: "TRANSPORTE DE DATOS",
    image: transporte,
    desc: "Ofrecemos soluciones personalizadas para garantizar la transferencia segura de tu información."
  },
  {
    title: "ALQUILER DE INFRAESTRUCTURA",
    image: infraestructura,
    desc: "Infraestructura tecnológica confiable y escalable."
  },
  {
    title: "DESARROLLO DE SOFTWARE",
    image: software,
    desc: "Soluciones digitales a la medida de tu negocio."
  }
];

export default function Servicios() {
  return (
    <section className="services-section">
  <h2 className="titulo">
          <span className="flecha">›</span> ¿POR QUÉ ELEGIRNOS?
        </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />

            <div className="service-label">{service.title}</div>

            <div className="service-tooltip">{service.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
