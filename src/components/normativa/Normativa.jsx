import "./Normativa.css";

const regulaciones = [
    "Ley 679 de 2001",
    "Acuerdo 011 de 2006",
    "Ley 1480 de 2011",
    "Regimen de proteccion de usuarios Resolucion 5111 de 2017",
    "Decreto 90 del 18 de Enero de 2018",
    "Resolucion CRC 5299 de 2018",
    "Resolucion CRC 5300 de 2018",
    "Resolución CRC 5321 de 2018",
    "Resolución CRC 6242 de 2021",
    "Resolución CRC 5337 de 2018",
    "Resolución CRC 5344 de 2018",
    "Resolución CRC 6333 de 2021",
    "Resolución CRC 5397 de 2018",
    "Resolución CRC 5322 de 2018",
    "Resolución CRC 5930 de 2020",
    "Resolución CRC 19012 de 2020",
    "Art.6 Ley 1266 del año 2008",
    "Art.16 Ley 1266 del año 2008",
];

export default function Normativa() {
    return (
        <section className="normativa">
            <div className="normativa-header">
                <span className="badge">NORMATIVA</span>

                <h1>Regulación del Sector TIC</h1>

                <p>
                    Consulta las principales leyes, decretos y resoluciones que regulan
                    la prestación de servicios de telecomunicaciones en Colombia.
                </p>
            </div>

            <div className="normativa-card">
                <h2>Marco Normativo</h2>

                <div className="regulaciones-grid">
                    {regulaciones.map((item, index) => (
                        <div key={index} className="regulacion-item">
                            <span>✔</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
}