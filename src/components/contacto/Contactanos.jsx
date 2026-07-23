import "./Contacta.css";
import { useEffect, useRef, useState } from "react";

import {
  FaWhatsapp,
  FaHeadset,
  FaEnvelope,
  FaInstagram,
  FaPhoneVolume,
} from "react-icons/fa6";

export default function ContactElite() {
  const ref = useRef();

  /* ===========================
     EFECTO MAQUINA DE ESCRIBIR
  =========================== */

  const textoCompleto = "CONTÁCTANOS";
  const [titulo, setTitulo] = useState("");

  /* ===========================
     FORMULARIO
  =========================== */

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `
!Hola vi la pagina! estoy interesado en recibir asesoria.
${form.nombre}

${form.telefono}

${form.correo}

${form.asunto}

${form.mensaje}
`;

    window.open(
      `https://wa.me/573176683567?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  /* ===========================
     ANIMACIÓN AL HACER SCROLL
  =========================== */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("ce-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  /* ===========================
     MAQUINA DE ESCRIBIR
  =========================== */

  useEffect(() => {
    let i = 0;

    const escribir = setInterval(() => {
      setTitulo(textoCompleto.slice(0, i + 1));

      i++;

      if (i >= textoCompleto.length) {
        clearInterval(escribir);
      }
    }, 110);

    return () => clearInterval(escribir);
  }, []);

  return (
    <section className="ce-container" ref={ref}>
      {/*==========================================
      COLUMNA IZQUIERDA
      ==========================================*/}

      <div className="ce-left">
        <h2 className="ce-title">
          <span className="arrow">›</span>

          {titulo}

          <span className="typing-cursor">|</span>
        </h2>

        {/* WhatsApp */}

        <div className="ce-whatsapp">
          <FaWhatsapp className="ce-big-icon" />

          <span> 317 668      3567</span>
        </div>

        {/* Soporte */}

        <div className="ce-item">
          <div className="ce-item-title">
            <FaHeadset className="ce-icon" />

            <h4>LÍNEA DE SOPORTE</h4>
          </div>

          <p>317 668 3567</p>
        </div>

        {/* Ventas */}

        <div className="ce-item">
          <div className="ce-item-title">
            <FaPhoneVolume className="ce-icon" />

            <h4>LÍNEA DE VENTAS</h4>
          </div>

          <p>317 668 3567</p>
        </div>

        {/* Correo */}

        <div className="ce-item">
          <div className="ce-item-title">
            <FaEnvelope className="ce-icon" />

            <h4>CORREO ELECTRÓNICO</h4>
          </div>

          <p className="ce-link">
            info@webmastercolombia.net
          </p>
        </div>

        {/* Instagram */}

        <div className="ce-item">
          <div className="ce-item-title">
            <FaInstagram className="ce-icon" />

            <h4>INSTAGRAM</h4>
          </div>

          <p>@web_mastercolombia</p>
        </div>
      </div>

      {/*==========================================
      FORMULARIO
      ==========================================*/}

      <div className="ce-form">
        <h3>Solicita Asesoría Gratuita</h3>

        <p>
          Déjanos tus datos y uno de nuestros asesores se
          pondrá en contacto contigo en el menor tiempo
          posible.
        </p>

        <form
          className="ce-form-box"
          onSubmit={handleSubmit}
        >
          <div className="ce-row">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ce-row">
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={handleChange}
            />

            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={form.asunto}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="mensaje"
            placeholder="Cuéntanos cómo podemos ayudarte..."
            rows={6}
            value={form.mensaje}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="ce-submit"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
}