import "./equipo.css";
import user from "../../assets/desarrollo/foto.webp"; // tu icono

const equipo = [
  { nombre: "Johan", img: user },
  { nombre: "Edward", img: user },
  { nombre: "Nicolas", img: user },
  { nombre: "Thomas", img: user },
  { nombre: "Robin", img: user },
  { nombre: "Santiago", img: user },
];

const Equipo = () => {
  return (
    <section className="equipo">

      <h2>› NUESTRO EQUIPO </h2>

    <div className="equipo-grid">
  {equipo.map((persona, i) => (
    <div className="equipo-card" key={i}>
      <div className="equipo-card-img">
        <img src={persona.img} alt="user" />
      </div>
      <p>{persona.nombre}</p>
    </div>
  ))}
</div>
    </section>
  );
};

export default Equipo;