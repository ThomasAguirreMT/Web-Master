import Serviciodesarrollo from "../components/serviciosdesarrollo/serviciodesarrollo";
import HeroSoftware from "../components/herosofware/herosoftware";
import ModeloTrabajo from "../components/ModeloTrabajo/ModeloTrabajo";
import ContactForm from "../components/contactForm/ContactForm";

const SoftwarePage = () => {
  return (
    <>
      <HeroSoftware />
    <ModeloTrabajo />
      <Serviciodesarrollo />
  

      <ContactForm />

    </>
  );
};

export default SoftwarePage;  