import "./porqueelegirnos.css";

// ICONOS
import seguridad from "../../assets/iconseguridad.svg";
import rapido from "../../assets/iconrapido.svg";
import equipo from "../../assets/iconequipo.svg";
import precio from "../../assets/iconprecio.svg";
import ingresos from "../../assets/iconingresos.svg";

function PorqueElegirnos() {
  return (
    <section className="porque-elegirnos">
      <div className="container">

        <h2 className="titulo">
          <span className="flecha">›</span> ¿POR QUÉ ELEGIRNOS?
        </h2>

        <p className="descripcion">
          Brindamos soluciones personalizadas, soporte técnico especializado 24/7 y
          respuesta inmediata, convirtiéndonos en un aliado estratégico para ISPs y
          empresas que requieren estabilidad, rendimiento y crecimiento seguro.
        </p>

        <div className="cards-grid">

          <div className="card-item">
            <img src={seguridad} alt="Red segura" />
            <h4>Red Segura</h4>
            <p>Con nuestro firewall tu red siempre estará segura.</p>
          </div>

          <div className="card-item">
            <img src={rapido} alt="Servicio rápido" />
            <h4>Servicio rápido</h4>
            <p>Cualquier duda, cualquier inquietud, estamos disponibles.</p>
          </div>

          <div className="card-item">
            <img src={equipo} alt="Equipo de expertos" />
            <h4>Equipo de expertos</h4>
            <p>
              Cuenta siempre con nuestra experiencia en Mikrotik, Cisco,
              Huawei y tecnologías GPON.
            </p>
          </div>

          <div className="card-item">
            <img src={precio} alt="Servicios asequibles" />
            <h4>Servicios asequibles</h4>
            <p>
              Al mejor precio y disponibilidad, recuerda, somos colombianos.
            </p>
          </div>

          <div className="card-item">
            <img src={ingresos} alt="Aumenta tus ingresos" />
            <h4>Aumenta tus Ingresos</h4>
            <p>
              Una conexión estable y con bajas latencias trae más clientes y
              mejores resultados.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PorqueElegirnos;
