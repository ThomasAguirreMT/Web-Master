import { useState, useEffect } from "react";
import CarruselCanales from "../carruselCanales/CarruselCanales";
import "./canalesTV.css";

const CATEGORIAS = [
  { titulo: "NACIONALES", key: "nacionales" },
  { titulo: "DEPORTES", key: "deportes" },
  { titulo: "CULTURALES", key: "culturales" },
  { titulo: "INFANTILES", key: "infantiles" },
  { titulo: "PELÍCULAS", key: "peliculas" },
  { titulo: "SERIES", key: "series" },
  { titulo: "VARIEDADES", key: "variedades" },
  { titulo: "MUSICALES", key: "musicales" },
  { titulo: "NOTICIAS", key: "noticias" },
  { titulo: "RELIGIOSOS", key: "religiosos" },
];

export default function CanalesTV() {
  const [categoriaActiva, setCategoriaActiva] = useState("NACIONALES");
  const [canalesActivos, setCanalesActivos] = useState([]);
  const [cache, setCache] = useState({});
  const [cargando, setCargando] = useState(true);
  const [conteo, setConteo] = useState({});

  useEffect(() => {
    let cancelado = false;

    const cargar = async () => {
      setCargando(true);

      const mod = await import(
        "../../assets/television/canales/canalesData"
      );

      if (Object.keys(conteo).length === 0) {
        const counts = {};
        CATEGORIAS.forEach(cat => {
          counts[cat.titulo] = (mod[cat.key] || []).length;
        });
        setConteo(counts);
      }

      // usar cache
      if (cache[categoriaActiva]) {
        setCanalesActivos(cache[categoriaActiva]);
        setCargando(false);
        return;
      }

      const key = CATEGORIAS.find(c => c.titulo === categoriaActiva)?.key;
      const data = mod[key] ?? [];

      if (!cancelado) {
        setCache(prev => ({ ...prev, [categoriaActiva]: data }));
        setCanalesActivos(data);
        setCargando(false);
      }
    };

    cargar();
    return () => { cancelado = true; };
  }, [categoriaActiva]);

  return (
    <section className="tv">

      {/* HEADER */}
      <div className="tv-header">
        <div className="tv-title-row">
          <h1>Nuestros canales</h1>
        </div>
        <p>
          Explora toda nuestra parrilla de televisión organizada por categorías
        </p>
      </div>

      {/* LAYOUT */}
      <div className="tv-container">

        {/* SIDEBAR */}
        <div className="tv-sidebar">
          {CATEGORIAS.map(cat => {
            const activo = categoriaActiva === cat.titulo;

            return (
              <button
                key={cat.titulo}
                className={`tv-item ${activo ? "active" : ""}`}
                onClick={() => setCategoriaActiva(cat.titulo)}
              >
                <span>{cat.titulo}</span>

                <div className="tv-badge-wrap">
                  {/* CONTADOR */}
                  <small>{conteo[cat.titulo] ?? "-"}</small>

                  {/* FLECHA */}
                  <div className={`item-arrow ${activo ? "show" : ""}`}></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CONTENIDO */}
        <div className="tv-content">

         

          <div className="channels-panel">
            {cargando ? (
              <div className="tv-loader">
                <div className="tv-spinner" />
                <p>Cargando canales...</p>
              </div>
            ) : canalesActivos.length === 0 ? (
              <p className="tv-empty">No hay canales disponibles</p>
            ) : (
              <CarruselCanales canales={canalesActivos} />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}