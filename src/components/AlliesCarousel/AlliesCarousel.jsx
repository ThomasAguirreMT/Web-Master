import "./AlliesCarousel.css";

import inttelgo from "../../assets/inttelgo.svg";
import logoodatamorado from "../../assets/logoodatamorado.svg";
import pit from "../../assets/pits.svg";
import edgeuno from "../../assets/edgeuno.svg";
import hurricane from "../../assets/hurricane.svg";

export default function AlliesCarousel() {
  const logos = [
    inttelgo,
    logoodatamorado,
    pit,
    edgeuno,
    hurricane,
  ];

  return (
    <div className="allies-section">
      <h2>NUESTROS ALIADOS</h2>
      <p>
        Nuestros servicios están respaldados por aliados tecnológicos de clase
        mundial.
      </p>

      <div className="carousel">
        <div className="carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="carousel-item" key={index}>
              <img src={logo} alt="aliado" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
