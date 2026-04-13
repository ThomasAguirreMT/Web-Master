import "./serviciodesarrollo.css";
import { useNavigate } from "react-router-dom";

import movilVideoMobile from "../../assets/desarrollo/videodesarrollocelular.mp4";

import movilVideo from "../../assets/desarrollo/desarrollomovile.mp4";
import backendVideo from "../../assets/desarrollo/desarrolloback.mp4";
import frontendImg from "../../assets/desarrollo/desarrollofront.mp4";

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

          <button 
            className="btn"
            onClick={() => navigate("/desarrollomobile")}
          >
            Ver más
          </button>
        </div>
      </div>

      <div className="servicio">

        <div className="servicio-info">
          <h2>› DESARROLLO BACKEND</h2>

          <p>
            Construya una base sólida para su producto con API seguras, gestión
            de datos eficiente, servicios de migración a la nube con infraestructura
            propia e ingenieros de desarrollo experimentados.
          </p>

          <div className="tecnologias">
            <img src={mysql} alt="mysql" />
            <img src={php} alt="php" />
            <img src={mongo} alt="mongo" />
            <img src={node} alt="node" />
          </div>

          <button 
            className="btn"
            onClick={() => navigate("/desarrollobackend")}
          >
            Ver más
          </button>
        </div>

        <div className="servicio-img">
          <video src={backendVideo} autoPlay loop muted playsInline />
        </div>

      </div>

      {/* 🔵 FRONTEND */}
      <div className="servicio">
        <div className="servicio-img">
          <video src={frontendImg} autoPlay loop muted playsInline />
        </div>

        <div className="servicio-info">
          <h2>› DESARROLLO DE FRONTEND</h2>

          <p>
            Lleva las mejores prácticas de desarrollo de software a su proyecto
            con interfaces modernas e intuitivas que mejoran las experiencias
            diarias de sus clientes.
          </p>

          <div className="tecnologias">
            <img src={ts} alt="ts" />
            <img src={next} alt="next" />
            <img src={laravel} alt="laravel" />
            <img src={react} alt="react" />
          </div>

          <button 
            className="btn"
            onClick={() => navigate("/desarrollofrontend")}
          >
            Ver más
          </button>
        </div>
      </div>

    </section>
  );
};

export default Serviciodesarrollo;