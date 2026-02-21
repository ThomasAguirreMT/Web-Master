import { Fragment, useEffect } from "react";

import HeroSlider from "../components/hero/HeroSlider";
import About from "../components/about/about";
import Porqueelegirnos from "../components/porqueelegirnos/porqueelegirnos";
import Cobertura from "../components/cobertura/cobertura";
import Servicios from "../components/servicios/servicios";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import AlliesCarousel from "../components/AlliesCarousel/AlliesCarousel";






const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSlider />
      <About />
      <Porqueelegirnos />
      <Cobertura />
      <Servicios />
      <FloatingButtons />
      <AlliesCarousel />
    </>
  )




};

export default Home;
