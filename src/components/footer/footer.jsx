import "./Footer.css";
import logo from "../../assets/navbar/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wave" />

            <div className="footer-container">
                {/* BRAND */}
                <div className="footer-col brand">
                    <img src={logo} alt="Logo" className="footer-logo" />

                    <p>
                        Conectamos empresas y hogares con tecnología de última generación.
                    </p>

                    <span className="footer-copy">
                        ©Copyright 2026 Web Master. Todos los derechos reservados.
                    </span>
                </div>

                {/* SERVICIOS */}
                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><Link to="/internet">Internet Fibra</Link></li>
                        <li><Link to="/television">Televisión</Link></li>
                        <li><Link to="/trabajaconnosotros">Soluciones Empresariales</Link></li>
                        <li><Link to="/software">Desarrollo de Software</Link></li>
                    </ul>
                </div>

                {/* EMPRESA */}
                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><Link to="/trabajaconnosotros">Quiénes somos</Link></li>
                        <li><Link to="/trabajaconnosotros">Trabaja con nosotros</Link></li>
                        <li><Link to="/contacto">Soporte</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                {/* CONTACTO */}
                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li>Colombia</li>
                        <li>
                            <a href="tel:+573176683567">+57 317 6683567</a>
                        </li>
                        <li>
                            <a href="mailto:info@webmastercolombia.net">
                                info@webmastercolombia.net
                            </a>
                        </li>
                        <li><Link to="/pqr">Radica aqui tu PQR</Link></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}