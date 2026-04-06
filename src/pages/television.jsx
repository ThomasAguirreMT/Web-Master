// src/pages/TelevisionPage.jsx

import Television from "../components/television/television";
import NuestraTV from "../components/nuestratv/nuestraTv";
import CanalesTV from "../components/canalesTV/CanalesTV";
import Banner from "../components/bannertv/bannerTV";

const TelevisionPage = () => {
  return (
    <>
      <Television />
      <NuestraTV />
      <CanalesTV />
      <Banner />

    </>
  );
};

export default TelevisionPage;