import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./HeroSlider.css";

import NetworkBackground from "../NetworkBackground/NetworkBackground";

import fibra from "../../assets/imageneshomecarrusel/fibra.webp";
import slidetv from "../../assets/imageneshomecarrusel/slidetv.webp";
import cristiano from "../../assets/imageneshomecarrusel/cristiano.webp";
import bannercanales from "../../assets/imageneshomecarrusel/bannercanales.svg";
import desarrolloslide from "../../assets/imageneshomecarrusel/desarrolloslide.webp";
import slidetrabaja from "../../assets/imageneshomecarrusel/slidetrabaja.webp";
import slidedesarrolloen from "../../assets/imageneshomecarrusel/slidedesarrolloen.webp";


const slides = [
  {
    type: "image",
    variant: "dev",
    title: "¿ERES ISP?",
    subtitle: "CARRIER PARA TU CRECIMIENTO.",
    description:
      "Internet dedicado, televisión y soluciones de conectividad para ISP y operadores en crecimiento.",
    image: slidetrabaja,
    floating: true,
    link: "/trabajaconnosotros"
  },

  {
    type: "fiber",
    title: "INTERNET DEDICADO DE ALTA VELOCIDAD",
    subtitle: "PARA EMPRESAS E ISP",
    description:
      "Conectividad empresarial, enlaces dedicados y soluciones escalables para organizaciones y operadores.",
    link: "/internet"
  },

  {
    type: "image",
    variant: "tv",
    title: "TELEVISIÓN PARA OPERADORES E ISP",
    subtitle: "+150 CANALES DIGITALES",
    image: slidetv,
    link: "/television"
  },

  {
    type: "image",
    variant: "dev",
    title: "DESARROLLO DE SOFTWARE",
    subtitle: "SOLUCIONES TECNOLÓGICAS A TU MEDIDA",
    image: desarrolloslide,
    link: "/software"
  }
];


export default function HeroSlider() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const timeoutRef = useRef(null);

  const slide = slides[current];


  const resetTimeout = () => {

    if (timeoutRef.current) {

      clearTimeout(timeoutRef.current);

    }

  };


  useEffect(() => {

    resetTimeout();

    timeoutRef.current = setTimeout(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 5000);

    return () => resetTimeout();

  }, [current]);


  const nextSlide = () => {

    resetTimeout();

    setCurrent((prev) => (prev + 1) % slides.length);

  };


  const prevSlide = () => {

    resetTimeout();

    setCurrent((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
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
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />

            <div className="hero-overlay dark" />

          </>
        )}


        {/* CONTENIDO */}

        <div className="hero-content">


          {/* H1 SEO PRINCIPAL OCULTO VISUALMENTE */}

          <h1 className="hero-seo-title">

            Internet Dedicado, Televisión y Soluciones Tecnológicas
            para Empresas, ISP y Operadores en Colombia

          </h1>


          {/* TITULO DEL SLIDE */}

          <h2 className="hero-slide-title">

            {slide.title}

          </h2>


          {/* SLIDE TV */}

          {slide.variant === "tv" ? (

            <div className="hero-badge">

              <img
                src={bannercanales}
                alt="+150 canales digitales de televisión"
                className="badge-50"
              />

            </div>

          ) : (

            <>

              <h3 className="hero-slide-subtitle">

                {slide.subtitle}

              </h3>


              {slide.description && (

                <p className="hero-description">

                  {slide.description}

                </p>

              )}

            </>

          )}


          <button
            className="hero-btn"
            onClick={() => navigate(slide.link)}
          >

            VER MÁS

            <span className="hero-btn-arrow">

              →

            </span>

          </button>


        </div>


        {/* FLECHAS */}

        <button
          className="arrow left"
          onClick={prevSlide}
          aria-label="Slide anterior"
        >

          ❮

        </button>


        <button
          className="arrow right"
          onClick={nextSlide}
          aria-label="Siguiente slide"
        >

          ❯

        </button>


      </div>


      {/* FIBRA */}

      {slide.type === "fiber" && (

        <div className="floating-elements fiber-out">

          <img
            src={fibra}
            alt="Infraestructura de fibra óptica para internet dedicado"
            className="fiber-main"
          />

        </div>

      )}


      {/* JUGADOR TV */}

      {slide.variant === "tv" && (

        <div className="floating-elements tv-out">

          <img
            src={cristiano}
            alt="Contenido de televisión digital"
            className="tv-player"
          />

        </div>

      )}


      {/* DESARROLLO */}

      {slide.floating && (

        <div className="dev-out">

          <img
            src={slidedesarrolloen}
            alt="Soluciones tecnológicas para empresas e ISP"
            className="dev-floating"
          />

        </div>

      )}


      {/* DOTS */}

      <div className="hero-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            className={`dot ${
              index === current ? "active" : ""
            }`}
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