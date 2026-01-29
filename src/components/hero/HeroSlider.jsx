import { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";
import NetworkBackground from "../NetworkBackground/NetworkBackground";
import fibra from "../../assets/fibra.webp";
import slidetv from "../../assets/slidetv.webp";
import cristiano from "../../assets/cristiano.webp";
import bannercanales from "../../assets/bannercanales.svg";

const slides = [
  {
    type: "fiber",
    title: "INTERNET DEDICADO DE ALTA VELOCIDAD",
    subtitle: "PARA TU ISP O EMPRESA",
  },
  {
    type: "image",
    title: "LA PARRILLA DE CANALES MÁS GRANDE DE BOGOTÁ",
    subtitle: "+50 CANALES DIGITALES",
    image: slidetv,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const slide = slides[current];

  /* =========================
     AUTOPLAY
  ========================= */
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  /* =========================
     CONTROLES
  ========================= */
  const nextSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      className={`hero ${slide.type} hero-transition`}
      onMouseEnter={resetTimeout}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
      }}
    >
      {/* ===== VIEWPORT (SOLO FONDOS + TEXTO) ===== */}
      <div className="hero-viewport">
        {/* SLIDE FIBRA */}
        {slide.type === "fiber" && (
          <>
            <NetworkBackground />
            <div className="hero-overlay" />
          </>
        )}

        {/* SLIDE TV */}
        {slide.type === "image" && (
          <>
            <div
              className="hero-image-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-overlay dark" />
          </>
        )}

        {/* CONTENIDO */}
        <div className="hero-content">
          <h1>{slide.title}</h1>

          {slide.type === "image" ? (
            <div className="hero-badge">
              <img
                src={bannercanales}
                alt="+150 Canales Digitales"
                className="badge-50"
              />
            </div>
          ) : (
            <h2>{slide.subtitle}</h2>
          )}

          <button className="hero-btn">VER MÁS</button>
        </div>

        {/* FLECHAS */}
        <button className="arrow left" onClick={prevSlide}>
          ❮
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* ===== FIBRA FUERA (INVADE BLANCO) ===== */}
      {slide.type === "fiber" && (
        <div className="floating-elements fiber-out">
          <img
            src={fibra}
            alt="Fibra óptica"
            className="fiber-main"
          />
        </div>
      )}

      {/* ===== JUGADOR TV FUERA (IZQUIERDA) ===== */}
      {slide.type === "image" && (
        <div className="floating-elements tv-out">
          <img
            src={cristiano}
            alt="Jugador fútbol"
            className="tv-player"
          />
        </div>
      )}

      {/* INDICADORES */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => {
              resetTimeout();
              setCurrent(index);
            }}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}