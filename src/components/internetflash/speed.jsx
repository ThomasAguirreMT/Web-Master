import "./desarrolloHero.css";

import videoFondo from "../../assets/internet/videointernetdedicado.webm";

export default function DesarrolloHero() {
  return (
    <section className="desarrollo-hero">

      {/* VIDEO DE FONDO */}
      <video
        className="desarrollo-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoFondo} type="video/webm" />
      </video>

      {/* CAPA OSCURA */}
      <div className="desarrollo-overlay"></div>

      {/* CONTENIDO */}
      <div className="desarrollo-content">

        

        <h1 className="hero-title">
          <span className="hero-line hero-line-1">
            INTERNET
          </span>

          <span className="hero-line hero-line-2">
            DEDICADO
          </span>

          <span className="hero-line hero-line-3">
            DE ALTA VELOCIDAD
          </span>
        </h1>

        <div className="hero-info">

          <div className="hero-description">
            <div className="hero-small-line"></div>

            <p>
              Conectividad empresarial diseñada para
              operar sin límites, con velocidad,
              estabilidad y alto rendimiento.
            </p>
          </div>

    

        </div>

      </div>

      {/* TEXTO DECORATIVO */}
      <div className="hero-side">
        CONECTIVIDAD • VELOCIDAD • ESTABILIDAD
      </div>

   

    </section>
  );
}