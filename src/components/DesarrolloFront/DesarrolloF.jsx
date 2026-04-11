import { useState } from "react";
import "./Desarrollof.css";

import banner from "../../assets/desarrollo/bannel-mobile.webp";

import logots from "../../assets/desarrollo/logots.webp";
import next from "../../assets/desarrollo/logonext.webp";
import laravel from "../../assets/desarrollo/logolaravel.webp";
import react from "../../assets/desarrollo/logoreact.webp";
import vue from "../../assets/desarrollo/logovue.webp";

export default function DesarrolloFront() {
  const tecnologias = [
    { img: logots, nombre: "TypeScript" },
    { img: next, nombre: "Next.js" },
    { img: laravel, nombre: "Laravel" },
    { img: react, nombre: "React" },
    { img: vue, nombre: "Vue" },
  ];

  const [index, setIndex] = useState(2);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? tecnologias.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === tecnologias.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="df-container">

      {/* HERO */}
      <section
        className="df-hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="df-overlay"></div>

        <div className="df-content">
          <span className="df-badge">FRONTEND</span>

          <h1 className="df-title">
            INTERFACES INTELIGENTES <br />
            Y EXPERIENCIAS DE USUARIO (UX/UI)
          </h1>
        </div>
      </section>

      <div className="df-divider"></div>

      {/* INFO */}
      <section className="df-info">
        <p className="df-text">
          El frontend de tu aplicación web es todo lo que los usuarios pueden ver e interactuar.
          El frontend abarca todo lo que se encuentra en el lado cliente de una aplicación o sitio web.
          Aspectos como la maquetación, el diseño, el contenido y la interactividad:
          todos los elementos de un sitio web con los que los usuarios interactúan
          directamente a través de sus navegadores.
        </p>

        {/* CARRUSEL */}
        <div className="df-carousel">

          <button className="df-arrow" onClick={prev}>‹</button>

          <div className="df-items">
            {tecnologias.map((tec, i) => {
              let position = "";

              if (i === index) position = "center";
              else if (i === (index - 1 + tecnologias.length) % tecnologias.length) position = "left-1";
              else if (i === (index - 2 + tecnologias.length) % tecnologias.length) position = "left-2";
              else if (i === (index + 1) % tecnologias.length) position = "right-1";
              else if (i === (index + 2) % tecnologias.length) position = "right-2";
              else position = "hidden";

              return (
                <div key={i} className={`df-item ${position}`}>
                  <img src={tec.img} alt={tec.nombre} />
                  <span>{tec.nombre}</span>
                </div>
              );
            })}
          </div>

          <button className="df-arrow" onClick={nextSlide}>›</button>

        </div>
      </section>

    </div>
  );
}