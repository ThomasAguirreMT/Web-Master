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

const Home = lazy(() => import("./pages/Home"));
const Internet = lazy(() => import("./pages/internet"));
const TelevisionPage = lazy(() => import("./pages/television"));
const Software = lazy(() => import("./pages/software"));
const Trabaja = lazy(() => import("./pages/trabaja"));
const Contacto = lazy(() => import("./pages/contacto"));

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

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    const timeout = setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }, 50);

    return () => clearTimeout(timeout);

  }, [pathname]);

  return null;
}

/* =========================
   ROUTES
========================= */

function AppRoutes() {
  return (

    <Suspense fallback={<PageLoader />}>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/internet"
          element={<Internet />}
        />

        <Route
          path="/television"
          element={<TelevisionPage />}
        />

        <Route
          path="/software"
          element={<Software />}
        />

        <Route
          path="/trabaja"
          element={<Trabaja />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/desarrollomobile"
          element={<DesarrolloMobile />}
        />

        <Route
          path="/desarrollofrontend"
          element={<DesarrolloFrontend />}
        />

        <Route
          path="/desarrollobackend"
          element={<Desarrollobackend />}
        />

        <Route
          path="/trabajaconnosotros"
          element={<WorkWithUs />}
        />

        <Route
          path="/pqr"
          element={<PQRPage />}
        />

        <Route
          path="/proteccioninfantil"
          element={<ProteccionInfantil />}
        />

        <Route
          path="/normativa"
          element={<Normativa />} />

        <Route
          path="/speedtest"
          element={<SpeedTestPage />}
        />


        {/* fallback */}

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

    </Suspense>
  );
}

/* =========================
   APP
========================= */

function App() {
  return (

    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <main className="app-container">

        <AppRoutes />

      </main>

      <FloatingButtons />

      <Footer />

    </BrowserRouter>
  );
}

export default App;