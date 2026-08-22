import { useEffect, useState } from "react";
import "./television.css";

import videoDesktop from "../../assets/television/videotelevision.webm";
import videoMobile from "../../assets/television/bannertvparacell.webm";

const slides = [
  {
    text: "PELICULAS",
    className: "slide-movies",
  },
  {
    text: "SERIES",
    className: "slide-series",
  },
  {
    text: "ENTRETENIMIENTO",
    className: "slide-entertainment",
  },
  {
    text: "DEPORTES",
    className: "slide-entertainment",
  },
];

const Television = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Cambia de slide cada 6 segundos

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="tv-wrapper">

      <video
        key={isMobile ? "mobile" : "desktop"}
        className="tv-video"
        src={isMobile ? videoMobile : videoDesktop}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="tv-overlay"></div>

      <div className="tv-content">
        <h1
          key={currentSlide}
          className={`tv-title-single ${slide.className}`}
        >
          {slide.text}
        </h1>
      </div>

    </section>
  );
};

export default Television;