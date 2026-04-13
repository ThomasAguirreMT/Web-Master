import "./Contacta.css";
import { useEffect, useRef } from "react";

import logoElite from "../../assets/logo/logo.svg";

export default function ContactElite() {
  const ref = useRef();


  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("ce-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <section className="ce-container" ref={ref}>

      {/* LEFT */}
      <div className="ce-left">
        <h2 className="ce-title">
          <span>›</span> CONTÁCTANOS
        </h2>

        {/* WHATSAPP */}
        <div className="ce-whatsapp">
          <div className="ce-dot"></div>
          <span>324 505 6199</span>
        </div>

        <button className="ce-btn">Saber más</button>

        <div className="ce-item">
          <h4>LÍNEA DE SOPORTE</h4>
          <p>317 668 3567</p>
        </div>

        <div className="ce-item">
          <h4>CORREO</h4>
          <p className="ce-link">info@webmastercolombia.net</p>
        </div>

        <div className="ce-item">
          <h4>INSTAGRAM</h4>
          <p>@webmaster</p>
        </div>
      </div>

      {/* FORM */}
      <div className="ce-form">
        <img src={logoElite} alt="" className="ce-logo" />

        <h3>NOSOTROS TE LLAMAMOS</h3>
        <p>Déjanos tus datos y te contactamos rápidamente.</p>

        <form className="ce-form-box">
          <div className="ce-row">
            <input placeholder="Nombre" />
            <input placeholder="Teléfono" />
          </div>

          <div className="ce-row">
            <input placeholder="Correo electrónico" />
            <input placeholder="Asunto" />
          </div>

          <textarea placeholder="Mensaje"></textarea>

          <button type="submit" className="ce-submit">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>

    </section>
  );
}