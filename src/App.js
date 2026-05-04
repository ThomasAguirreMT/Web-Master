import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

const Home = lazy(() => import("./pages/Home"));
const Internet = lazy(() => import("./pages/internet"));
const TelevisionPage = lazy(() => import("./pages/television"));
const Software = lazy(() => import("./pages/software"));
const Trabaja = lazy(() => import("./pages/trabaja"));
const Contacto = lazy(() => import("./pages/contacto"));
const DesarrolloMobile = lazy(() => import("./pages/desarrollomobile"));
const DesarrolloFrontend = lazy(() => import("./pages/desarrollofrontend"));
const Desarrollobackend = lazy(() => import("./pages/desarrollobackend"));
const WorkWithUs = lazy(() => import("./pages/trabajaconnosot"));
const PQRPage = lazy(() => import("./pages/pqr"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      color: "#667085"
    }}>
      Cargando...
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/pqr" element={<PQRPage />} />
        </Routes>
      </Suspense>
      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
}

export default App;