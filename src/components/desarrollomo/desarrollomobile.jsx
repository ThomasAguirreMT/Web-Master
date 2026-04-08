import { useState } from "react";
import "./desarrollomo.css";

import banner from "../../assets/desarrollo/bannel-mobile.webp";

import flutter from "../../assets/desarrollo/logoflutter.webp";
import kotlin from "../../assets/desarrollo/logokotlin.webp";
import react from "../../assets/desarrollo/logoreact.webp";
import firebase from "../../assets/desarrollo/logofirebase.webp";

export default function DesarrolloMobile() {

  const tecnologias = [
    { img: flutter, nombre: "Flutter" },
    { img: kotlin, nombre: "Kotlin" },
    { img: react, nombre: "React Native" },
    { img: firebase, nombre: "Firebase" },
  ];

  const [index, setIndex] = useState(2);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? tecnologias.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === tecnologias.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="dm-container">

      {/* HERO */}
      <section
        className="dm-hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="dm-overlay"></div>

        <div className="dm-content">
          <span className="dm-badge">DESARROLLO MOBILE</span>

          <h1 className="dm-title">
            POTENCIA Y ESCALABILIDAD <br />
            PARA TU NEGOCIO
          </h1>
        </div>
      </section>

      <div className="dm-divider"></div>

      {/* INFO */}
      <section className="dm-info">

        <p className="dm-text">
          Nos especializamos en soluciones empresariales, comprendemos las necesidades
          de su negocio y sus expectativas de externalización. Con equipos dedicados
          y especializados asignados a cada proyecto, garantizando que el proceso
          se ajuste a los plazos y al presupuesto.
        </p>

        {/* CARRUSEL */}
        <div className="dm-carousel">

          <button className="dm-arrow" onClick={prev}>‹</button>

          <div className="dm-items">
            {tecnologias.map((tec, i) => (
              <div
                key={i}
                className={`dm-item ${i === index ? "dm-active" : ""}`}
              >
                <img src={tec.img} alt={tec.nombre} />
                <span>{tec.nombre}</span>
              </div>
            ))}
          </div>

          <button className="dm-arrow" onClick={next}>›</button>

        </div>

      </section>

    </div>
  );
}