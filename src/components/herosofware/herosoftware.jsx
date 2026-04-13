import "./herosoftware.css";

// VIDEO DESKTOP
import videoDesktop from "../../assets/desarrollo/software.mp4";

// VIDEO MOBILE
import videoMobile from "../../assets/desarrollo/videodesarrollocelular.mp4";

const HeroSoftware = () => {
  return (
    <section className="hs-container">

      <video
        className="hs-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        {/* 📱 MOBILE */}
        <source src={videoMobile} media="(max-width: 768px)" />

        {/* 💻 DESKTOP */}
        <source src={videoDesktop} media="(min-width: 769px)" />
      </video>

    </section>
  );
};

export default HeroSoftware;