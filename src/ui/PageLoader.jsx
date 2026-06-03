import "./PageLoader.css";

import outlineLogo from "../assets/logo/logow1.svg";
import fillLogo from "../assets/logo/logow2.svg";

export default function PageLoader() {

  return (

    <div className="cinematic-loader">

      {/* BACKGROUND */}

      <div className="loader-background" />

      {/* LOGO CONTAINER */}

      <div className="logo-container">

        {/* OUTLINE */}

        <img
          src={outlineLogo}
          alt=""
          className="logo-outline"
        />

        {/* FILL */}

        <div className="logo-fill-wrapper">

          <img
            src={fillLogo}
            alt=""
            className="logo-fill"
          />

        </div>

        {/* SCAN LIGHT */}

        <div className="logo-scan-light" />

      </div>

      {/* TEXT */}

      <div className="loader-bottom">

        <div className="loader-progress-track">

          <div className="loader-progress-fill" />

        </div>

        <span className="loader-text">
          Cargando experiencia...
        </span>

      </div>

    </div>

  );
}