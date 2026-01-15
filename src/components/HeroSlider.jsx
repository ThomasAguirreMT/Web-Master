import { useState } from "react";
import "./HeroSlider.css";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

import dragon1 from "../assets/dragon1.png";
import dragon2 from "../assets/dragon2.png";
import dragon3 from "../assets/dragon3.png";

const slides = [
  {
    video: video1,
    title: "INTERNET DEDICADO DE ALTA VELOCIDAD",
    subtitle: "PARA TU ISP O EMPRESA"
  },
  {
    video: video2,
    title: "SOLUCIONES DE CONECTIVIDAD",
    subtitle: "PARA EMPRESAS MODERNAS"
  },
  {
    video: video3,
    title: "TECNOLOGÍA CONFIABLE",
    subtitle: "PARA CRECER CONTIGO"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">
      {/* VIDEO */}
      <video
        key={slides[current].video}
        className="hero-video"
        src={slides[current].video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* ELEMENTOS FLOTANTES */}
      <div className="floating-elements">
        <img src={dragon1} alt="" className="float float-1" />
        <img src={dragon2} alt="" className="float float-2" />
        <img src={dragon3} alt="" className="float float-3" />
      </div>

      {/* CONTENIDO */}
      <div className="hero-content">
        <h1>{slides[current].title}</h1>
        <h2>{slides[current].subtitle}</h2>

        <button className="hero-btn">
          VER Mas
        </button>
      </div>

      {/* FLECHAS */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
}
