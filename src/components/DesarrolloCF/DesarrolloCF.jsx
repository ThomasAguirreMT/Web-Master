import "./DesarrolloCF.css";

import imgConsultoria from "../../assets/desarrollo/ux.svg";
import imgNativo from "../../assets/desarrollo/ux.svg";
import imgMVP from "../../assets/desarrollo/ux.svg";

export default function Servicios() {
    return (
        <section className="sc-section">

            {/* HEADER */}
            <div className="sc-header">
                <span>› NUESTROS SERVICIOS</span>
            </div>

            {/* 🔵 BLOQUE 1 (IZQUIERDA) */}
            <div className="sc-row">

                <div className="sc-img">
                    <img src={imgConsultoria} alt="Servicios de consultoría" />
                </div>

                <div className="sc-text">


                    <p>
                        Nuestro servicio de consultoría para el desarrollo de aplicaciones móviles
                        le brindará información y recomendaciones valiosas para ayudarle a tomar
                        Una tecnología moderna que nos permite crear
                        aplicaciones ligeras y eficientes. Experiencia con
                        diferentes frameworks de JavaScript nos han
                        permitido descubrir todo su potencial y ofrecer
                        servicios de desarrollo frontend fiables a nuestros
                        clientes
                    </p>
                </div>

            </div>

            {/* 🔵 BLOQUE 2 (DERECHA) */}
            <div className="sc-row reverse">

                <div className="sc-img">
                    <img src={imgNativo} alt="Desarrollo nativo e híbrido" />
                </div>

                <div className="sc-text">


                    <p>El servicio de desarrollo progresivo de aplicaciones web
                        combina las mejores características de las aplicaciones web y
                        móviles para ofrecer funcionalidades sin conexión, tiempos de
                        carga rápidos e interacciones fluidas. Diseñadas para funcionar
                        en diferentes dispositivos y plataformas
                    </p>
                </div>

            </div>
            {/* 3 BLOQUE 3 (izquerda) */}
            <div className="sc-row">

                <div className="sc-img">
                    <img src={imgMVP} alt="MVP" />
                </div>

                <div className="sc-text">

                    <p>
                        Nuestra prioridad es que el software sea fácil de usar, reduciendo la
                        curva de aprendizaje:
                        Diseño Responsivo: Tu administración no se detiene; nuestras
                        interfaces se adaptan perfectamente a computadoras, tablets y
                        smartphones.
                        Arquitectura de Información: Organizamos los módulos de CRM, ERP
                        y HCM de manera lógica para que cada clic tenga un propósito y
                        ahorre tiempo al usuario.
                        Interacciones Avanzadas: Implementamos componentes modernos
                        (como las cartas interactivas y elementos arrastrables que
                        mencionamos antes) para que la gestión de procesos sea táctil, visual
                        y menos monótona
                    </p>

                </div>

            </div>


        </section>
    );
}