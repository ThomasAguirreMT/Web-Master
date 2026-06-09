import "./herosoftware.css";

import videoDesktop from "../../assets/desarrollo/software.mp4";
import videoMobile from "../../assets/desarrollo/videodesarrollocelular.mp4";

const HeroSoftware = () => {
  return (
    <section className="hs-container">
      {/* VIDEO DESKTOP */}
      <video
        className="hs-video hs-video-desktop"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoDesktop} type="video/mp4" />
      </video>

      {/* VIDEO MOBILE */}
      <video
        className="hs-video hs-video-mobile"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoMobile} type="video/mp4" />
      </video>

      {/* CONTENIDO */}
      <div className="hs-content">
        <h1 className="hs-title">
          ¿TIENES UNA IDEA
          <br />
          DE NEGOCIO?
        </h1>

        <div className="hs-line"></div>

        <p className="hs-subtitle">
          Web Master Colombia
          <strong> ¡lo puede hacer realidad!</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSoftware;