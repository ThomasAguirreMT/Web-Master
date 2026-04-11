import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import Internet from "./pages/internet";
import TelevisionPage from "./pages/television";
import Software from "./pages/software";
import Trabaja from "./pages/trabaja";
import Contacto from "./pages/contacto";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import DesarrolloMobile from "./pages/desarrollomobile";
import DesarrolloFrontend from "./pages/desarrollofrontend";
import Desarrollobackend from "./pages/desarrollobackend";
import WorkWithUs from "./pages/trabajaconnosot";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/television" element={<TelevisionPage />} />
        <Route path="/software" element={<Software />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/desarrollomobile" element={<DesarrolloMobile />} />
        <Route path="/desarrollofrontend" element={<DesarrolloFrontend />} />
        <Route path="/desarrollobackend" element={<Desarrollobackend />} />
<Route path="/trabajaconnosotros" element={<WorkWithUs />} />
      </Routes>

      <FloatingButtons />
      <Footer />


    </BrowserRouter>

  );
}

export default App;