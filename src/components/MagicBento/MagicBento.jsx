import "./MagicBento.css";

import geo from "../../assets/desarrollo/geolocalizacion.svg";
import perfil from "../../assets/desarrollo/perfiles.svg";
import noti from "../../assets/desarrollo/notificaciones.svg";
import analytics from "../../assets/desarrollo/amalitics.svg";
import mensajes from "../../assets/desarrollo/mensajes.svg";
import google from "../../assets/desarrollo/google.svg";

export default function MagicBento() {
  return (
    <section className="fm-section">
      <h2 className="fm-title">
        CARACTERÍSTICAS QUE PODEMOS <br />
        INCORPORAR A SU <span>APLICACIÓN MÓVIL</span>
        
      </h2>

      <div className="fm-grid">
        
        {/* GRANDE IZQUIERDA */}
        <div className="fm-card fm-big">
          <h3>GEOLOCALIZACIÓN</h3>
          <img src={geo} />
          <p>
            Servicios basados en la ubicación para recomendaciones o alertas
          </p>
        </div>

        {/* DERECHA ARRIBA */}
        <div className="fm-card fm-wide">
          <h3>PERSONALIZACIÓN DE PERFILES</h3>
          <img src={perfil} />
        </div>

        {/* PEQUEÑOS */}
        <div className="fm-row-small">
          <div className="fm-card">
            <h4>NOTIFICACIONES</h4>
            <img src={noti} />
          </div>

          <div className="fm-card">
            <h4>DATA ANALYTICS</h4>
            <img src={analytics} />
          </div>
        </div>

        {/* ABAJO */}
        <div className="fm-card fm-bottom-left">
          <h3>MENSAJES IN-APP</h3>
          <img src={mensajes} />
        </div>

        <div className="fm-card fm-bottom-right">
          <h3>INTEGRACIÓN DE SERVICIOS DE GOOGLE</h3>
          <img src={google} />
        </div>

      </div>
    </section>
  );
}