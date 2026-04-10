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

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % data.length);
    }, 450);

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
    <section className="esca-section">
      <h2 className="esca-title">BENEFICIOS</h2>

      <div
        className="esca-box"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="esca-btn esca-prev" onClick={() => changeSlide("prev")}>
          ‹
        </button>

        <h1 key={index} className={`esca-text ${direction}`}>
          {data[index]}
        </h1>

        <button className="esca-btn esca-next" onClick={() => changeSlide("next")}>
          ›
        </button>

        <div className="esca-dots">
          {data.map((_, i) => (
            <span
              key={i}
              className={`esca-dot ${i === index ? "active" : ""}`}
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