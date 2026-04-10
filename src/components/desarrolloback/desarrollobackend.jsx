import { useState } from "react";
import "./desarrolloba.css";

import banner from "../../assets/desarrollo/bannel-mobile.webp";

import mysql from "../../assets/desarrollo/logomysql.webp";
import php from "../../assets/desarrollo/logophp.webp";
import mongo from "../../assets/desarrollo/logomongo.webp";
import node from "../../assets/desarrollo/logonode.webp";
import python from "../../assets/desarrollo/logophyton.webp";
import js from "../../assets/desarrollo/js.webp";

export default function DesarrolloBackend() {

  const tecnologias = [
    { img: mysql, nombre: "MySQL" },
    { img: php, nombre: "PHP" },
    { img: mongo, nombre: "MongoDB" },
    { img: node, nombre: "Node.js" },
    { img: python, nombre: "Python" },
    { img: js, nombre: "JavaScript" },
  ];

  const [index, setIndex] = useState(2);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? tecnologias.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === tecnologias.length - 1 ? 0 : prev + 1
    );
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
          <span className="dm-badge">BACKEND E INFRAESTRUCTURA</span>

          <h1 className="dm-title">
            EL CEREBRO <br /> DE TU NEGOCIO
          </h1>
        </div>
      </section>

      <div className="dm-divider"></div>

      {/* INFO */}
      <section className="dm-info">

        <p className="dm-text">
          En pocas palabras, el backend es la parte interna encargada de la lógica,
          procesamiento y gestión de datos que permite que todo funcione correctamente
          en tu aplicación.
        </p>

        {/* CARRUSEL */}
        <div className="dm-carousel">

          <button className="dm-arrow" onClick={prev}>‹</button>

          <div className="dm-items">
            {tecnologias.map((tec, i) => {

              let position = "";

              if (i === index) position = "center";
              else if (i === (index - 1 + tecnologias.length) % tecnologias.length) position = "left-1";
              else if (i === (index - 2 + tecnologias.length) % tecnologias.length) position = "left-2";
              else if (i === (index + 1) % tecnologias.length) position = "right-1";
              else if (i === (index + 2) % tecnologias.length) position = "right-2";
              else position = "hidden";

              return (
                <div key={i} className={`dm-item ${position}`}>
                  <img src={tec.img} alt={tec.nombre} />
                  <span>{tec.nombre}</span>
                </div>
              );
            })}
          </div>

          <button className="dm-arrow" onClick={next}>›</button>

        </div>

      </section>

    </div>
  );
}