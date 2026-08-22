import SEO from "./components/SEO/seo";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  useEffect,
  lazy,
  Suspense
} from "react";

/* =========================
   LAYOUT
========================= */

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

/* =========================
   LOADER
========================= */

import PageLoader from "./ui/PageLoader";

/* =========================
   LAZY PAGES
========================= */

const Home = lazy(() =>
  import("./pages/Home")
);

const Internet = lazy(() =>
  import("./pages/internet")
);

const TelevisionPage = lazy(() =>
  import("./pages/television")
);

const Software = lazy(() =>
  import("./pages/software")
);

const Trabaja = lazy(() =>
  import("./pages/trabaja")
);

const Contacto = lazy(() =>
  import("./pages/contacto")
);

const ProteccionInfantil = lazy(() =>
  import("./pages/proteccioninfantil")
);

const Normativa = lazy(() =>
  import("./pages/Normativa")
);

const DesarrolloMobile = lazy(() =>
  import("./pages/desarrollomobile")
);

const DesarrolloFrontend = lazy(() =>
  import("./pages/desarrollofrontend")
);

const Desarrollobackend = lazy(() =>
  import("./pages/desarrollobackend")
);

const WorkWithUs = lazy(() =>
  import("./pages/trabajaconnosot")
);

const PQRPage = lazy(() =>
  import("./pages/pqr")
);

const SpeedTestPage = lazy(() =>
  import("./pages/speedtest")
);


/* =========================
   SCROLL TOP
========================= */

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    /*
      Cada vez que cambia la ruta,
      comenzamos nuevamente desde
      la parte superior.
    */

    window.scrollTo(0, 0);

  }, [pathname]);

  return null;
}


/* =========================
   ROUTES
========================= */

function AppRoutes() {

  const location = useLocation();

  return (

    <>

      {/* =========================
          SEO DINÁMICO
      ========================= */}

      <SEO
        pathname={location.pathname}
      />


      {/* =========================
          LAZY LOADING
      ========================= */}

      <Suspense
        fallback={<PageLoader />}
      >

        <Routes>

          {/* =========================
              HOME
          ========================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              INTERNET
          ========================= */}

          <Route
            path="/internet"
            element={<Internet />}
          />


          {/* =========================
              TELEVISIÓN
          ========================= */}

          <Route
            path="/television"
            element={<TelevisionPage />}
          />


          {/* =========================
              SOFTWARE
          ========================= */}

          <Route
            path="/software"
            element={<Software />}
          />


          {/* =========================
              TRABAJA
          ========================= */}

          <Route
            path="/trabaja"
            element={<Trabaja />}
          />


          {/* =========================
              CONTACTO
          ========================= */}

          <Route
            path="/contacto"
            element={<Contacto />}
          />


          {/* =========================
              DESARROLLO MOBILE
          ========================= */}

          <Route
            path="/desarrollomobile"
            element={<DesarrolloMobile />}
          />


          {/* =========================
              DESARROLLO FRONTEND
          ========================= */}

          <Route
            path="/desarrollofrontend"
            element={<DesarrolloFrontend />}
          />


          {/* =========================
              DESARROLLO BACKEND
          ========================= */}

          <Route
            path="/desarrollobackend"
            element={<Desarrollobackend />}
          />


          {/* =========================
              TRABAJA CON NOSOTROS
          ========================= */}

          <Route
            path="/trabajaconnosotros"
            element={<WorkWithUs />}
          />


          {/* =========================
              PQR
          ========================= */}

          <Route
            path="/pqr"
            element={<PQRPage />}
          />


          {/* =========================
              PROTECCIÓN INFANTIL
          ========================= */}

          <Route
            path="/proteccioninfantil"
            element={<ProteccionInfantil />}
          />


          {/* =========================
              NORMATIVA
          ========================= */}

          <Route
            path="/normativa"
            element={<Normativa />}
          />


          {/* =========================
              SPEED TEST
          ========================= */}

          <Route
            path="/speedtest"
            element={<SpeedTestPage />}
          />


          {/* =========================
              FALLBACK
          ========================= */}

          <Route
            path="*"
            element={<Home />}
          />

        </Routes>

      </Suspense>

    </>

  );
}


/* =========================
   APP
========================= */

function App() {

  /*
    Evita que el navegador restaure
    automáticamente la posición anterior
    cuando se recarga o navega.
  */

  useEffect(() => {

    if ("scrollRestoration" in window.history) {

      window.history.scrollRestoration = "manual";

    }

  }, []);


  return (

    <BrowserRouter>

      {/* =========================
          SCROLL TOP
      ========================= */}

      <ScrollToTop />


      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar />


      {/* =========================
          MAIN
      ========================= */}

      <main className="app-container">

        <AppRoutes />

      </main>


      {/* =========================
          FLOATING BUTTONS
      ========================= */}

      <FloatingButtons />


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </BrowserRouter>

  );
}


export default App;