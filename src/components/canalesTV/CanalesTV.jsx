import { useState, useEffect } from "react";
import CarruselCanales from "../carruselCanales/CarruselCanales";
import "./canalesTV.css";

const CATEGORIAS = [
  { titulo: "NACIONALES",  key: "nacionales"  },
  { titulo: "DEPORTES",    key: "deportes"    },
  { titulo: "CULTURALES",  key: "culturales"  },
  { titulo: "INFANTILES",  key: "infantiles"  },
  { titulo: "PELÍCULAS",   key: "peliculas"   },
  { titulo: "SERIES",      key: "series"      },
  { titulo: "VARIEDADES",  key: "variedades"  },
  { titulo: "MUSICALES",   key: "musicales"   },
  { titulo: "NOTICIAS",    key: "noticias"    },
  { titulo: "RELIGIOSOS",  key: "religiosos"  },
];

export default function CanalesTV() {
  const [categoriaActiva, setCategoriaActiva] = useState("NACIONALES");
  const [canalesActivos, setCanalesActivos]   = useState([]);
  const [cache, setCache]                     = useState({});
  const [cargando, setCargando]               = useState(true);

  // Carga la categoría activa (con caché para no repetir imports)
  useEffect(() => {
    let cancelado = false;

    const cargar = async () => {
      setCargando(true);

      if (cache[categoriaActiva]) {
        setCanalesActivos(cache[categoriaActiva]);
        setCargando(false);
        return;
      }

      // Import dinámico: solo carga el módulo una vez
      const mod = await import(
        "../../assets/television/canales/canalesData"
      );
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
          <div className="tv-arrow"></div>
          <h1>Nuestros canales</h1>
        </div>
        <p>Explora toda nuestra parrilla de televisión organizada por categorías</p>
      </div>

      {/* LAYOUT */}
      <div className="tv-container">

        {/* SIDEBAR */}
        <div className="tv-sidebar">
          {CATEGORIAS.map(cat => (
            <button
              key={cat.titulo}
              className={`tv-item ${categoriaActiva === cat.titulo ? "active" : ""}`}
              onClick={() => setCategoriaActiva(cat.titulo)}
              aria-pressed={categoriaActiva === cat.titulo}
            >
              <span>{cat.titulo}</span>
              <div className="tv-badge-wrap">
                {categoriaActiva === cat.titulo && (
                  <div className="item-arrow">→</div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* CANALES */}
        <div className="tv-content">
          <div className="channels-panel">
            {cargando ? (
              <div className="tv-loader">
                <div className="tv-spinner" />
                <p>Cargando canales...</p>
              </div>
            ) : (
              <CarruselCanales canales={canalesActivos} />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}