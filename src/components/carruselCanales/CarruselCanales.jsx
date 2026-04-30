import "./carruselCanales.css";

export default function CarruselCanales({ titulo, canales }) {
  const canalesDuplicados = [...canales, ...canales, ...canales];

  return (
    <section className="canales-section">
      {titulo && (
        <div className="canales-header">
          <span className="canales-pill">{titulo}</span>
        </div>
      )}
      <div className="canales-slider">
        <div className="canales-track">
          {canalesDuplicados.map((canal, index) => (
            <div className="canal-card" key={index}>
              <img
                src={canal.logo}
                alt={canal.nombre}
                loading="lazy"        // ✅ no carga logos fuera de pantalla
                decoding="async"      // ✅ no bloquea el hilo principal
                width={60}
                height={52}
              />
              <h3>{canal.nombre}</h3>
              <span className="canal-numero">{canal.canal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}