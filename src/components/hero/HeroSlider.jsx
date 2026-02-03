import { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";

// === COMPONENTES ===
import NetworkBackground from "../NetworkBackground/NetworkBackground";

// === ASSETS ===
import fibra from "../../assets/fibra.webp";
import slidetv from "../../assets/slidetv.webp";
import cristiano from "../../assets/cristiano.webp";
import bannercanales from "../../assets/bannercanales.svg";
import desarrolloslide from "../../assets/desarrolloslide.webp";
import slidetrabaja from "../../assets/slidetrabaja.webp";
import slidedesarrolloen from "../../assets/slidedesarrolloen.webp";

/* ======================================================
   DEFINICIÓN DE SLIDES
====================================================== */
const slides = [
  {
    type: "fiber",
    title: "INTERNET DEDICADO DE ALTA VELOCIDAD",
    subtitle: "PARA TU ISP O EMPRESA",
  },
  {
    type: "image",
    variant: "tv",
    title: "LA PARRILLA DE CANALES MÁS GRANDE DE BOGOTÁ",
    subtitle: "+150 CANALES DIGITALES",
    image: slidetv,
  },
  {
    type: "image",
    variant: "dev",
    title: "DESARROLLO DE SOFTWARE",
    subtitle: "SOLUCIONES A TU MEDIDA",
    image: desarrolloslide,
  },
  {
    type: "image",
    variant: "dev",
    title: "¿ERES ISP?",
    subtitle: "TRABAJA CON NOSOTROS",
    image: slidetrabaja,
    floating: true,
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

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
      {/* =========================
          HERO VIEWPORT (RECORTA)
      ========================= */}
      <div className="hero-viewport">

        {/* SLIDE FIBRA */}
        {slide.type === "fiber" && (
          <>
            <NetworkBackground />
            <div className="hero-overlay" />
          </>
        )}

        {/* SLIDES CON IMAGEN */}
        {slide.type === "image" && (
          <>
            <div
              className={`hero-image-bg ${slide.variant}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-overlay dark" />
          </>
        )}

        {/* CONTENIDO */}
        <div className="hero-content">
          <h1>{slide.title}</h1>

          {slide.variant === "tv" ? (
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

          <button className="hero-btn">
            VER MÁS
            <span className="hero-btn-arrow">→</span>
          </button>
        </div>

        {/* FLECHAS */}
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>

      {/* =========================
          ELEMENTOS FUERA DEL VIEWPORT
      ========================= */}

      {/* FIBRA */}
      {slide.type === "fiber" && (
        <div className="floating-elements fiber-out">
          <img src={fibra} alt="Fibra óptica" className="fiber-main" />
        </div>
      )}

      {/* JUGADOR TV */}
      {slide.variant === "tv" && (
        <div className="floating-elements tv-out">
          <img
            src={cristiano}
            alt="Jugador fútbol"
            className="tv-player"
          />
        </div>
      )}

      {/* IMAGEN FLOTANTE DESARROLLO (FUERA DEL VIEWPORT) */}
      {slide.floating && (
        <div className="dev-out">
          <img
            src={slidedesarrolloen}
            alt="Desarrollo flotante"
            className="dev-floating"
          />
        </div>
      )}

      {/* DOTS */}
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
