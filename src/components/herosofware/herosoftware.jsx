import "./herosoftware.css";
import videoBg from "../../assets/desarrollo/software.mp4";

const HeroSoftware = () => {
  return (
    <section className="hero-software">

      <video 
        src={videoBg} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-software-video"
      />


    </section>
  ); 
};

export default HeroSoftware;