import "./serviciodesarrollo.css";
import { useNavigate } from "react-router-dom";

import movilVideo from "../../assets/desarrollo/desarrollomovile.mp4";
import backendVideo from "../../assets/desarrollo/desarrolloback.mp4";
import frontendVideo from "../../assets/desarrollo/desarrollofront.mp4";

import flutter from "../../assets/desarrollo/logoflutter.webp";
import kotlin from "../../assets/desarrollo/logokotlin.webp";
import react from "../../assets/desarrollo/logoreact.webp";
import firebase from "../../assets/desarrollo/logofirebase.webp";

import mysql from "../../assets/desarrollo/logomysql.webp";
import php from "../../assets/desarrollo/logophp.webp";
import mongo from "../../assets/desarrollo/logomongo.webp";
import node from "../../assets/desarrollo/logonode.webp";

import ts from "../../assets/desarrollo/logots.webp";
import next from "../../assets/desarrollo/logonext.webp";
import laravel from "../../assets/desarrollo/logolaravel.webp";

const Serviciodesarrollo = () => {
  const navigate = useNavigate();

  return (
    <section className="servicios">

      {/* 🔵 MOVIL */}
      <div className="servicio">
        <div className="servicio-img">
          <video src={movilVideo} autoPlay loop muted playsInline />
        </div>

        <div className="servicio-info">
          <h2>› DESARROLLO DE APLICACIONES MÓVILES</h2>
          <p>
            Creación de aplicaciones intuitivas y aumentar la participación del
            usuario con nuestros servicios de desarrollo móvil multiplataforma y nativo.
          </p>

          <div className="tecnologias">
            <img src={flutter} alt="flutter" />
            <img src={kotlin} alt="kotlin" />
            <img src={react} alt="react" />
            <img src={firebase} alt="firebase" />
          </div>

          <button className="btn" onClick={() => navigate("/desarrollomobile")}>
            Ver más
          </button>
        </div>
      </div>

      {/* 🔵 BACKEND */}
      <div className="servicio">
        <div className="servicio-img">
          <video src={backendVideo} autoPlay loop muted playsInline />
        </div>

        <div className="servicio-info">
          <h2>› DESARROLLO BACKEND</h2>
          <p>
            Construya una base sólida para su producto con API seguras, gestión
            de datos eficiente y servicios de migración a la nube.
          </p>

          <div className="tecnologias">
            <img src={mysql} alt="mysql" />
            <img src={php} alt="php" />
            <img src={mongo} alt="mongo" />
            <img src={node} alt="node" />
          </div>

          <button className="btn" onClick={() => navigate("/desarrollobackend")}>
            Ver más
          </button>
        </div>
      </div>

      {/* 🔵 FRONTEND */}
      <div className="servicio">
        <div className="servicio-img">
          <video src={frontendVideo} autoPlay loop muted playsInline />
        </div>

        <div className="servicio-info">
          <h2>› DESARROLLO DE FRONTEND</h2>
          <p>
            Interfaces modernas e intuitivas que mejoran la experiencia del usuario
            y optimizan la interacción con tus productos digitales.
          </p>

          <div className="tecnologias">
            <img src={ts} alt="ts" />
            <img src={next} alt="next" />
            <img src={laravel} alt="laravel" />
            <img src={react} alt="react" />
          </div>

          <button className="btn" onClick={() => navigate("/desarrollofrontend")}>
            Ver más
          </button>
        </div>
      </div>

    </section>
  );
};

export default Serviciodesarrollo;