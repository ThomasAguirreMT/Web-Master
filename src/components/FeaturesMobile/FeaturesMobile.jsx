import "./FeatureMo.css";

import ubicacion from "../../assets/desarrollo/geolocalizacion.svg";
import notificaciones from "../../assets/desarrollo/notificaciones.svg";
import estadisticas from "../../assets/desarrollo/amalitics.svg";
import usuarios from "../../assets/desarrollo/mensajes.svg";

import mensajes from "../../assets/desarrollo/perfiles.svg";
import google from "../../assets/desarrollo/google.svg";

export default function FeaturesMobile() {
  return (
    <section className="fm-section">

      {/* TITULO */}
      <h2 className="fm-title">
        CARACTERÍSTICAS QUE PODEMOS <br />
        INCORPORAR A SU <span>APLICACIÓN MÓVIL</span>
      </h2>

      {/* GRID */}
      <div className="fm-grid">

        {/* GRANDE IZQUIERDA */}
        <div className="fm-card fm-big">
          <h3>GEOLOCALIZACIÓN</h3>
          <img src={ubicacion} alt="Geolocalización" />
          <p>
            Servicios basados en la ubicación para recomendaciones o alertas
          </p>
        </div>

        {/* DERECHA ARRIBA */}
        <div className="fm-card fm-wide">
          <h3>PERSONALIZACIÓN DE PERFILES</h3>
          <img src={usuarios} alt="Usuarios" />
        </div>

        {/* DERECHA MEDIO */}
        <div className="fm-row-small">
          <div className="fm-card">
            <h4>NOTIFICACIONES</h4>
            <img src={notificaciones} alt="Notificaciones" />
          </div>

          <div className="fm-card">
            <h4>DATA ANALYTICS</h4>
            <img src={estadisticas} alt="Estadísticas" />
          </div>
        </div>

        {/* ABAJO IZQUIERDA */}
        <div className="fm-card fm-wide">
          <h3>MENSAJES IN-APP</h3>
          <img src={mensajes} alt="Mensajes" />
        </div>

        {/* ABAJO DERECHA */}
        <div className="fm-card fm-wide">
          <h3>INTEGRACIÓN DE SERVICIOS DE GOOGLE</h3>
          <img src={google} alt="Google" />
        </div>

      </div>

    </section>
  );
}