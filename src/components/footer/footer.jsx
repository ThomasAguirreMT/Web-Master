import "./Footer.css";
import logo from "../../assets/logo.svg"; // ajusta si es png


export default function Footer() {
return (
<footer className="footer">
{/* Línea animada superior */}
<div className="footer-wave" />


<div className="footer-container">
{/* BRAND */}
<div className="footer-col brand">
<img src={logo} alt="Logo" className="footer-logo" />
<p>
Conectamos empresas y hogares con tecnología de última generación.
</p>
</div>


{/* LINKS */}
<div className="footer-col">
<h4>Servicios</h4>
<ul>
<li>Internet Fibra</li>
<li>Televisión</li>
<li>Soluciones Empresariales</li>
<li>Desarrollo de Software</li>
</ul>
</div>


{/* EMPRESA */}
<div className="footer-col">
<h4>Empresa</h4>
<ul>
<li>Quiénes somos</li>
<li>Trabaja con nosotros</li>
<li>Soporte</li>
<li>Contacto</li>
</ul>
</div>


{/* CONTACTO */}
<div className="footer-col">
<h4>Contacto</h4>
<ul>
<li>Colombia</li>
<li> +57 317 6683567 </li>
<li>nicolasaguirre@webmaster.com</li>
</ul>
</div>
</div>



</footer>
);
}
