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

  // nacionales abierto por defecto
  const [abierto, setAbierto] = useState("NACIONALES");

  const toggle = (titulo) => {

    if (abierto === titulo) {
      setAbierto(null);
    } else {
      setAbierto(titulo);
    }

  };

  return (

    <section className="parrilla-tv">

      <div className="parrilla-container">

        <h2 className="parrilla-titulo">
          CONOCE NUESTRA PARRILLA
        </h2>


        {categorias.map((cat) => (

          <div key={cat.titulo} className="acordeon-item">


            {/* HEADER */}

            <div
              className="acordeon-header"
              onClick={() => toggle(cat.titulo)}
            >

              <span>{cat.titulo}</span>

              <div className="acordeon-indicador">

                <span className="texto-ver">
                  {abierto === cat.titulo ? "Ocultar canales" : "Ver canales"}
                </span>

                <span
                  className={`acordeon-flecha ${abierto === cat.titulo ? "abierta" : ""}`}
                >
                  ▶
                </span>

              </div>

            </div>


            {/* CONTENIDO */}

            {abierto === cat.titulo && (

              <CarruselCanales
                canales={cat.data}
                ocultarTitulo
              />

            )}

          </div>

        ))}


      </div>

    </section>

  );

}