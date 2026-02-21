import { useEffect, useState } from "react";
import "./television.css";
import videoDesktop from "../../assets/television/videotelevision.mp4";
import videoMobile from "../../assets/television/bannertvparacell.mp4";

const Television = () => {
  const [isMobile, setIsMobile] = useState(false);


  // 👇 Detectar móvil
  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobile);
  }, []);

  return (
    <div className="tv-wrapper">
      <video
        key={isMobile}
        className="tv-video"
        src={isMobile ? videoMobile : videoDesktop}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default Television;