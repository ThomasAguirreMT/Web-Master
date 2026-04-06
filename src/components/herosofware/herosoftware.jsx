import "./herosoftware.css";
import videoBg from "../../assets/desarrollo/software.mp4";

const HeroSoftware = () => {
  return (
    <section className="hero">

      <video 
        src={videoBg} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video"
      />



    </section>
  ); 
};

export default HeroSoftware;