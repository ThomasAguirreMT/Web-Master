import "./television.css";
import videoTV from "../assets/television/videotelevision.mp4";

const TelevisionPage = () => {
  return (
    <div className="tv-wrapper">
      <video
        className="tv-video-full"
        src={videoTV}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default TelevisionPage;
