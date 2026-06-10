import { useEffect, useState } from "react";
import "./trabajacon.css";

import videoDesktop from "../../assets/desarrollo/trabajaconnosotros.mp4";
import videoMobile from "../../assets/desarrollo/trabajaconnosotros-mobile.mp4";

export default function WorkWithUs() {
  const words = [

     {
      top: "GENERAMOS",
      bottom: "RESULTADOS"
    },
    {
      top: "IMPULSAMOS TU",
      bottom: "CRECIMIENTO"
    },
    {
      top: "OPTIMIZAMOS TU",
      bottom: "INFRAESTRUCTURA"
    },
    {
      top: "FORTALECEMOS TU",
      bottom: "CONECTIVIDAD"
    }
  ];

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="crs-container">

      <div className="crs-hero">

        <video
          className="crs-video crs-video-desktop"
          src={videoDesktop}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <video
          className="crs-video crs-video-mobile"
          src={videoMobile}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="crs-overlay" />

        <div className="crs-text">

          <span
            key={`top-${currentWord}`}
            className="crs-static"
          >
            {words[currentWord].top}
          </span>

          <h1
            key={`bottom-${currentWord}`}
            className="crs-word"
          >
            {words[currentWord].bottom}
          </h1>

        </div>

      </div>

    </section>
  );
}