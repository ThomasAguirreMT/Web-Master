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

export default function CanalesTV(){

  return(

    <>
      <CarruselCanales titulo="NACIONALES" canales={nacionales} />
      <CarruselCanales titulo="DEPORTES" canales={deportes} />
      <CarruselCanales titulo="CULTURALES" canales={culturales} />
      <CarruselCanales titulo="INFANTILES" canales={infantiles} />

      <CarruselCanales titulo="PELÍCULAS" canales={peliculas} />
      <CarruselCanales titulo="SERIES" canales={series} />

      <CarruselCanales titulo="VARIEDADES" canales={variedades} />
      <CarruselCanales titulo="MUSICALES" canales={musicales} />

      <CarruselCanales titulo="NOTICIAS" canales={noticias} />
      <CarruselCanales titulo="RELIGIOSOS" canales={religiosos} />
    </>

  )

}