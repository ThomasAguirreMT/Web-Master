import "./carruselCanales.css";

export default function CarruselCanales({ titulo, canales }) {

  const canalesDuplicados = [...canales, ...canales];

  return (
    <section className="canales-section">

      <div className="canales-header">
        <span className="canales-pill">{titulo}</span>
      </div>

      <div className="canales-slider">

        <div className="canales-track">

          {canalesDuplicados.map((canal, index) => (

            <div className="canal-card" key={index}>

              <img src={canal.logo} alt={canal.nombre} />

              <h3>{canal.nombre}</h3>

              <span className="canal-numero">{canal.canal}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}