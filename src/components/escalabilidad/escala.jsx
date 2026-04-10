import { useState, useEffect } from "react";
import "./esca.css";

export default function Beneficios() {
  const data = [
    "ESCALABILIDAD",
    "ALTA DISPONIBILIDAD",
    "SEGURIDAD",
    "RENDIMIENTO",
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [paused, setPaused] = useState(false);

  /* 🔥 AUTOPLAY MÁS RÁPIDO */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % data.length);
    }, 2500); // ⬅️ MÁS RÁPIDO

    return () => clearInterval(interval);
  }, [paused]);

  const changeSlide = (dir) => {
    setDirection(dir);
    setIndex((prev) =>
      dir === "next"
        ? (prev + 1) % data.length
        : (prev - 1 + data.length) % data.length
    );
  };

  return (
    <section className="beneficios">
      <h2>BENEFICIOS</h2>

      <div
        className="beneficios-box"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* IZQUIERDA */}
        <button className="btn prev" onClick={() => changeSlide("prev")}>
          ‹
        </button>

        {/* TEXTO */}
        <h1 key={index} className={`beneficio-text ${direction}`}>
          {data[index]}
        </h1>

        {/* DERECHA */}
        <button className="btn next" onClick={() => changeSlide("next")}>
          ›
        </button>

        {/* DOTS */}
        <div className="dots">
          {data.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setDirection(i > index ? "next" : "prev");
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}