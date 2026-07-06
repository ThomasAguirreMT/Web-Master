import "./Speedtest.css";

export default function SpeedTest() {
    return (
        <section className="speedtest">

            <div className="speedtest-glow"></div>

            {/* HERO */}
            <div className="speedtest-header">

                <span className="badge">
                    SPEED TEST
                </span>

                <h1>
                    Comprueba la velocidad de tu conexión
                </h1>

                <p>
                    Realiza una medición de velocidad directamente desde los
                    servidores de <strong>Web Master</strong> y conoce el
                    rendimiento de tu conexión a Internet en tiempo real.
                </p>

            </div>

            {/* RECOMENDACIONES */}
            <section className="speedtest-help">

                <h2>Antes de comenzar...</h2>

                <p className="help-description">
                    Para obtener resultados confiables sigue estas recomendaciones.
                    Una correcta medición permitirá conocer el verdadero rendimiento
                    de tu conexión.
                </p>

                <div className="recommendations">

                    <div>✔ Conecta el computador mediante cable de red (Ethernet).</div>

                    <div>✔ Cierra aplicaciones, descargas y servicios que utilicen Internet.</div>

                    <div>✔ Evita que otros dispositivos estén utilizando la red durante la prueba.</div>

                    <div>✔ Reinicia el router si llevas mucho tiempo sin hacerlo.</div>

                    <div>✔ Ejecuta la prueba al menos dos veces y compara los resultados.</div>

                    <div>✔ Si los resultados continúan siendo bajos, comunícate con soporte técnico.</div>

                </div>

            </section>

            {/* INFORMACIÓN */}

            <section className="speedtest-info">

                <div className="info-card">

                    <div className="info-icon">⬇</div>

                    <h3>Velocidad de descarga</h3>

                    <p>
                        Es la velocidad con la que recibes información desde Internet.
                        Afecta la navegación, streaming, videojuegos y descargas.
                    </p>

                </div>

                <div className="info-card">

                    <div className="info-icon">⬆</div>

                    <h3>Velocidad de carga</h3>

                    <p>
                        Indica qué tan rápido envías información a Internet.
                        Es importante para videollamadas y almacenamiento en la nube.
                    </p>

                </div>

                <div className="info-card">

                    <div className="info-icon">📡</div>

                    <h3>Ping</h3>

                    <p>
                        Mide el tiempo de respuesta entre tu equipo y el servidor.
                        Un ping bajo ofrece una mejor experiencia.
                    </p>

                </div>

                <div className="info-card">

                    <div className="info-icon">⏱️</div>

                    <h3>Latencia</h3>

                    <p>
                        Una latencia baja mejora los juegos en línea, videollamadas
                        y aplicaciones en tiempo real.
                    </p>

                </div>

            </section>

            {/* SPEED TEST */}

            <div className="speedtest-card">

                <div className="speedtest-card-header">

                    <div>

                        <h2>Iniciar prueba de velocidad</h2>

                        <p>
                            Cuando estés listo, presiona <strong>"COMENZAR"</strong>
                            para medir tu velocidad de descarga, carga y latencia
                            utilizando los servidores de Web Master.
                        </p>

                    </div>

                    <div className="status-online">
                        🟢 Servidor Online
                    </div>

                </div>

                <div className="speedtest-frame-container">

                    <iframe
                        title="Speed Test Web Master"
                        src="https://webmaster.speedtestcustom.com"
                        className="speedtest-frame"
                        frameBorder="0"
                        loading="lazy"
                        allow="fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />

                </div>

            </div>

        </section>
    );
}