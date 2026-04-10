import "./DesarrolloConsultoria.css";

import imgConsultoria from "../../assets/desarrollo/consultoria.svg";
import imgNativo from "../../assets/desarrollo/nativo.webp";
import imgMVP from "../../assets/desarrollo/mvp.svg";

export default function ServiciosConsultoria() {
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
                        decisiones informadas durante todo el proceso.
                    </p>

                    <p>
                        Desde la estrategia para las características y funcionalidades de su aplicación
                        hasta la elección de la tecnología adecuada, aseguramos que su aplicación cumpla
                        con los estándares de la industria.
                    </p>
                </div>

            </div>

            {/* 🔵 BLOQUE 2 (DERECHA) */}
            <div className="sc-row reverse">

                <div className="sc-img">
                    <img src={imgNativo} alt="Desarrollo nativo e híbrido" />
                </div>

                <div className="sc-text">
                    

                    <p>
                        Entendemos que cada proyecto tiene prioridades distintas. Por eso,
                        dominamos las tecnologías que pide el mercado.
                    </p>

                    <p>
                        <strong>React Native & Flutter:</strong> Aplicaciones multiplataforma
                        con una sola base de código, reduciendo costos y tiempo de desarrollo.
                    </p>

                    <p>
                        <strong>Desarrollo Nativo (Kotlin/Swift):</strong> Para máximo rendimiento
                        e integración profunda con el sistema operativo.
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
                        El prototipado rápido es una forma eficaz de presentar y probar tu
                        idea de aplicación móvil. Al crear una versión sencilla e interactiva
                        de tu aplicación, puedes recopilar la opinión de los usuarios desde
                        el principio, antes de desarrollarla por completo. Nuestro equipo te
                        guía en el desarrollo de un Producto Mínimo Viable (MVP),
                        ayudándote a identificar las características clave que se ajustan a
                        tu visión. Este enfoque te permite probar el mercado rápidamente,
                        sin salirte de tu plazo ni presupuesto
                    </p>

                </div>

            </div>


        </section>
    );
}