import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contacto">
      <div className="container">
        
        <h2>
          DÉJANOS TU IDEA Y TE <span>CONTACTAREMOS</span>
        </h2>

        <form className="formulario">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Telefono" />

          <input type="email" placeholder="Correo electronico" />
          <input type="text" placeholder="Asunto" />

          <textarea placeholder="Mensaje"></textarea>
        </form>

      </div>
    </section>
  );
}