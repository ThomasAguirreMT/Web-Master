import "./ProyectosCarousel.css";

import img1 from "../../assets/desarrollo/logointtelgo.webp";
import img2 from "../../assets/desarrollo/logointtelgo.webp";
import img3 from "../../assets/desarrollo/logoadprotv.svg";

const data = [img1, img2, img3];

export default function ProyectosCarousel() {
  return (
    <section className="proyectos">
      <h2>› PROYECTOS EXITOSOS</h2>

      <div className="proyectos-carousel">
        <div className="proyectos-track">
          {[...data, ...data, ...data].map((img, i) => (
            <div className="proyectos-card" key={i}>
              <img src={img} alt="proyecto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}