import "./Benefits.css";

import soporte from "../../assets/porqueelegirnos/soporte.svg";
import seguridad from "../../assets/porqueelegirnos/seguridad.svg";
import mikrotik from "../../assets/porqueelegirnos/mikrotik.svg";
import monitoreo from "../../assets/porqueelegirnos/monitoreo.svg";
import cisco from "../../assets/porqueelegirnos/cisco.svg";
import wifi from "../../assets/porqueelegirnos/wifi.svg";
import crecimiento from "../../assets/porqueelegirnos/crecimiento.svg";
import infraestructura from "../../assets/porqueelegirnos/infraestructura.svg";

export default function BenefitsGrid() {
  return (
    <section className="bnf2-container">

      {/* ENCABEZADO */}
      <div className="bnf2-header">

        <span className="bnf2-eyebrow">
          ¿POR QUÉ ELEGIR WEBMASTER?
        </span>

        <h2 className="bnf2-title">
          <span className="bnf2-title-mark">›</span>
          SOLUCIONES PARA REDES
          <strong> EMPRESARIALES E ISP</strong>
        </h2>

        <p className="bnf2-description">
          Infraestructura, soporte y tecnología especializada para garantizar
          el rendimiento, la seguridad y la disponibilidad de redes de
          telecomunicaciones.
        </p>

      </div>

      {/* GRID */}
      <div className="bnf2-grid">

        {/* PRINCIPAL */}
        <article className="bnf2-card bnf2-big">

          <div className="bnf2-card-top">
            <span className="bnf2-number">01</span>

            <h3>
              SOPORTE TÉCNICO
              <span> ESPECIALIZADO</span>
            </h3>
          </div>

          <div className="bnf2-icon-wrapper">
            <img
              src={soporte}
              alt="Soporte técnico especializado para redes ISP"
            />
          </div>

          <p>
            Acompañamiento especializado para la operación, mantenimiento y
            resolución de incidencias en redes de telecomunicaciones e ISP.
          </p>

          <div className="bnf2-card-line" />

        </article>


        {/* SEGURIDAD */}
        <article className="bnf2-card">

          <span className="bnf2-number">02</span>

          <h4>SEGURIDAD DE RED</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={seguridad}
              alt="Seguridad de redes empresariales"
            />
          </div>

          <p>
            Protección y configuración de infraestructura de red para mejorar
            la seguridad y continuidad de los servicios.
          </p>

        </article>


        {/* MIKROTIK */}
        <article className="bnf2-card">

          <span className="bnf2-number">03</span>

          <h4>IMPLEMENTACIÓN MIKROTIK</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={mikrotik}
              alt="Implementación y configuración MikroTik"
            />
          </div>

          <p>
            Configuración y optimización de equipos MikroTik para redes ISP y
            empresariales.
          </p>

        </article>


        {/* MONITOREO */}
        <article className="bnf2-card">

          <span className="bnf2-number">04</span>

          <h4>GESTIÓN Y MONITOREO</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={monitoreo}
              alt="Gestión y monitoreo de redes"
            />
          </div>

          <p>
            Supervisión del comportamiento de la infraestructura para detectar
            y atender posibles fallas.
          </p>

        </article>


        {/* ALTA DISPONIBILIDAD */}
        <article className="bnf2-card">

          <span className="bnf2-number">05</span>

          <h4>ALTA DISPONIBILIDAD</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={infraestructura}
              alt="Infraestructura de alta disponibilidad"
            />
          </div>

          <p>
            Infraestructura diseñada para mantener la continuidad y estabilidad
            de los servicios de conectividad.
          </p>

        </article>


        {/* CISCO */}
        <article className="bnf2-card bnf2-wide">

          <span className="bnf2-number">06</span>

          <h4>SOLUCIONES CISCO</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={cisco}
              alt="Soluciones Cisco para redes empresariales"
            />
          </div>

          <p>
            Implementación e integración de soluciones Cisco para
            infraestructura de telecomunicaciones y redes empresariales.
          </p>

        </article>


        {/* CONFIGURACIÓN */}
        <article className="bnf2-card">

          <span className="bnf2-number">07</span>

          <h4>CONFIGURACIÓN Y OPTIMIZACIÓN</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={wifi}
              alt="Configuración y optimización de redes WiFi"
            />
          </div>

          <p>
            Optimización de parámetros de red para mejorar rendimiento,
            estabilidad y experiencia de conexión.
          </p>

        </article>


        {/* CRECIMIENTO */}
        <article className="bnf2-card">

          <span className="bnf2-number">08</span>

          <h4>ESCALABILIDAD Y CRECIMIENTO</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={crecimiento}
              alt="Escalabilidad de redes de telecomunicaciones"
            />
          </div>

          <p>
            Diseñamos soluciones capaces de crecer junto con las necesidades
            de empresas y operadores.
          </p>

        </article>


        {/* INFRAESTRUCTURA */}
        <article className="bnf2-card bnf2-wide">

          <span className="bnf2-number">09</span>

          <h4>INTEGRACIÓN DE INFRAESTRUCTURA</h4>

          <div className="bnf2-icon-wrapper">
            <img
              src={infraestructura}
              alt="Integración de infraestructura de telecomunicaciones"
            />
          </div>

          <p>
            Integración de equipos, plataformas y componentes para construir
            soluciones de conectividad eficientes.
          </p>

        </article>

      </div>

    </section>
  );
}