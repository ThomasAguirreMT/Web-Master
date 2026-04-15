import { useState } from "react";
import CarruselCanales from "../carruselCanales/CarruselCanales";

import {
  nacionales,
  deportes,
  culturales,
  infantiles,
  peliculas,
  series,
  variedades,
  musicales,
  noticias,
  religiosos
} from "../../assets/television/canales/canalesData";

import "./canalesTV.css";

export default function CanalesTV() {

  const categorias = [
    { titulo: "NACIONALES", data: nacionales },
    { titulo: "DEPORTES", data: deportes },
    { titulo: "CULTURALES", data: culturales },
    { titulo: "INFANTILES", data: infantiles },
    { titulo: "PELÍCULAS", data: peliculas },
    { titulo: "SERIES", data: series },
    { titulo: "VARIEDADES", data: variedades },
    { titulo: "MUSICALES", data: musicales },
    { titulo: "NOTICIAS", data: noticias },
    { titulo: "RELIGIOSOS", data: religiosos }
  ];

  const [categoriaActiva, setCategoriaActiva] = useState("NACIONALES");
  const [busqueda, setBusqueda] = useState("");

  const categoriaSeleccionada = categorias.find(
    (c) => c.titulo === categoriaActiva
  );

  const canalesFiltrados = categoriaSeleccionada.data.filter((canal) =>
    canal.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="tv">

      {/* HEADER */}
      <div className="tv-header">
        <h1>Nuestros canales</h1>
        <p>Explora toda nuestra parrilla de televisión organizada por categorías</p>
      </div>

      <div className="tv-container">

        {/* SIDEBAR / GRID */}
        <div className="tv-sidebar">
          {categorias.map((cat) => (
            <div
              key={cat.titulo}
              className={`tv-item ${categoriaActiva === cat.titulo ? "active" : ""}`}
              onClick={() => setCategoriaActiva(cat.titulo)}
            >
              <span>{cat.titulo}</span>
              <small>{cat.data.length}</small>
            </div>
          ))}
        </div>

        {/* CONTENIDO */}
        <div className="tv-content">

          <div className="tv-top">
            <h2>{categoriaActiva}</h2>

            <input
              type="text"
              placeholder="Buscar canal..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <CarruselCanales canales={canalesFiltrados} />

        </div>

      </div>

    </section>
  );
}