import "./animations.css";

import Animacionwifi from "../../assets/animaciones/animacionwifi.mp4";
import Animaciongigas from "../../assets/animaciones/animaciongigas.mp4";

function Animations() {

    return (

        <section className="animations-section">

            {/* VIDEO IZQUIERDO */}

            <div className="left">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={Animacionwifi}
                        type="video/mp4"
                    />
                </video>

            </div>


            {/* INFORMACIÓN CENTRAL */}

            <div className="center">

                <ul>

                    <li>
                        Internet Dedicado Carrier de
                        alto rendimiento.
                    </li>

                    <li>
                        Red propia anillada con máxima
                        redundancia.
                    </li>

                    <li>
                        Latencias ultra bajas para mayor
                        estabilidad.
                    </li>

                    <li>
                        Ideal para <strong>ISPs</strong>,
                        empresas críticas y plataformas
                        <strong> OTT</strong>.
                    </li>

                </ul>

            </div>


            {/* VIDEO DERECHO */}

            <div className="right">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={Animaciongigas}
                        type="video/mp4"
                    />
                </video>

            </div>

        </section>

    );

}

export default Animations;