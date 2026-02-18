import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import Internet from "./pages/internet";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internet" element={<Internet />} />
        <Route path="/television" element={<Television />} />
        <Route path="/software" element={<Software />} />
        <Route path="/trabaja" element={<Trabaja />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
