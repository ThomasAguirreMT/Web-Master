import "./nuestraTv.css";
import avatar from "../../assets/television/avatar.webp";

export default function NuestraTV() {
return (
<section className="tv-section">

<div className="tv-overlay"></div>

<div className="tv-content">

<div className="tv-text">
<h2>NUESTRA TV</h2>

<p>
En Web Master contamos con una parrilla de televisión digital
compuesta por más de 150 canales, distribuidos a través de una
infraestructura robusta y estable. Nuestro servicio garantiza una señal
continua y de alta calidad, ideal para hogares, conjuntos residenciales
y proyectos que requieren una oferta amplia y confiable de contenido
televisivo.
</p>
</div>


<img
src={avatar}
fetchpriority="high"
decoding="sync"
className="tv-personaje"
alt="Televisión digital Web Master"
/>

</div>

</section>
);
}