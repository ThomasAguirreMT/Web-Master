import Navbar from "./components/navbar/navbar";
import HeroSlider from "./components/hero/HeroSlider";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Porqueelegirnos from "./components/porqueelegirnos/porqueelegirnos";
import Cobertura from "./components/cobertura/cobertura";
import logo from "./assets/logo.svg";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar
          logo={logo}
          items={[
            { label: "Inicio", href: "/" },
            { label: "Internet", href: "/about" },
            { label: "Television", href: "/services" },
            { label: "Desarrollo de software", href: "/cobertura" },
            { label: "Trabaja Con Nosotros", href: "/contact" },

          { label: "Contacto", href: "/contact" }
          ]}
        />

        <HeroSlider />
        <About />
        <Porqueelegirnos />
        <Cobertura />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
