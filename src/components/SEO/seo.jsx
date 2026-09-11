import { useEffect } from "react";

const COMPANY = {
  name: "Web Master Colombia",
  url: "https://webmastercolombia.net",
  description:
    "Web Master Colombia ofrece internet dedicado, conectividad empresarial, televisión y soluciones tecnológicas para empresas, ISP y operadores en Colombia.",
};

const SEO_DATA = {
  "/": {
    title:
      "Internet Dedicado Para Empresas, ISP y Operadores | Web Master Colombia",
    description:
      "Internet dedicado, conectividad empresarial y soluciones tecnológicas para empresas, ISP y operadores en Colombia.",
    keywords:
      "internet dedicado Colombia, internet empresarial, internet para ISP, conectividad empresarial, enlaces dedicados, operador ISP, Web Master Colombia",
  },

  "/internet": {
    title:
      "Internet Dedicado Para Empresas, ISP y Operadores | Web Master Colombia",
    description:
      "Internet dedicado y soluciones de conectividad para empresas, ISP y operadores. Conectividad estable, escalable y de alta disponibilidad.",
    keywords:
      "internet dedicado, internet empresarial, internet dedicado Colombia, internet para ISP, conectividad empresarial, enlaces dedicados, carrier Colombia, proveedor ISP",
  },

  "/television": {
    title:
      "Televisión para ISP y Operadores | Web Master Colombia",
    description:
      "Soluciones de televisión para ISP y operadores. Amplía tu portafolio con televisión digital y contenido para tus clientes.",
    keywords:
      "televisión para ISP, televisión para operadores, TV para ISP, televisión digital Colombia, canales para ISP, televisión operadores",
  },

  "/software": {
    title:
      "Desarrollo de Software y Soluciones Tecnológicas | Web Master Colombia",
    description:
      "Desarrollo de software y soluciones tecnológicas personalizadas para empresas, operadores y proyectos digitales.",
    keywords:
      "desarrollo de software Colombia, software empresarial, desarrollo de sistemas, soluciones tecnológicas, software para empresas",
  },

  "/desarrollomobile": {
    title:
      "Desarrollo de Aplicaciones Móviles | Web Master Colombia",
    description:
      "Desarrollo de aplicaciones móviles personalizadas para empresas y proyectos digitales.",
    keywords:
      "desarrollo aplicaciones móviles, desarrollo apps Colombia, aplicaciones Android, aplicaciones empresariales, desarrollo móvil",
  },

  "/desarrollofrontend": {
    title:
      "Desarrollo Frontend y Aplicaciones Web | Web Master Colombia",
    description:
      "Diseño y desarrollo frontend de aplicaciones web modernas, rápidas, adaptables y orientadas a las necesidades de cada empresa.",
    keywords:
      "desarrollo frontend Colombia, desarrollo web, aplicaciones web, diseño frontend, páginas web empresariales",
  },

  "/desarrollobackend": {
    title:
      "Desarrollo Backend, APIs y Bases de Datos | Web Master Colombia",
    description:
      "Desarrollo backend, APIs, bases de datos e integraciones para empresas y plataformas digitales.",
    keywords:
      "desarrollo backend Colombia, APIs, bases de datos, servidores, integración de sistemas, backend empresarial",
  },

  "/trabajaconnosotros": {
    title:
      "Soluciones para ISP y Operadores | Web Master Colombia",
    description:
      "Soluciones de internet dedicado, televisión, conectividad, infraestructura y tecnología para ISP, operadores y empresas.",
    keywords:
      "soluciones ISP, internet para operadores, internet dedicado ISP, televisión para ISP, infraestructura ISP, tecnología para operadores",
  },

  "/trabaja": {
    title:
      "Trabaja con Nosotros | Web Master Colombia",
    description:
      "Conoce las oportunidades laborales y vacantes disponibles en Web Master Colombia.",
    keywords:
      "trabajo Web Master Colombia, vacantes tecnología, empleo telecomunicaciones, empleo ISP, trabajo Colombia",
  },

  "/contacto": {
    title:
      "Contacto | Internet Dedicado y Soluciones Empresariales | Web Master Colombia",
    description:
      "Contacta a Web Master Colombia para conocer nuestras soluciones de internet dedicado, conectividad empresarial, televisión y tecnología.",
    keywords:
      "contacto Web Master Colombia, internet dedicado contacto, soporte ISP, conectividad empresarial, soluciones telecomunicaciones",
  },

  "/pqr": {
    title:
      "PQR | Peticiones, Quejas, Reclamos y Sugerencias | Web Master Colombia",
    description:
      "Radica tus peticiones, quejas, reclamos y sugerencias a través del sistema PQR de Web Master Colombia.",
    keywords:
      "PQR Web Master Colombia, peticiones, quejas, reclamos, sugerencias, atención al cliente",
  },

  "/proteccioninfantil": {
    title:
      "Protección Infantil y Navegación Segura | Web Master Colombia",
    description:
      "Información y recomendaciones para promover una navegación segura y responsable para niños, niñas y adolescentes.",
    keywords:
      "protección infantil internet, navegación segura, seguridad digital, internet seguro, control parental",
  },

  "/normativa": {
    title:
      "Normativa y Regulación de Telecomunicaciones | Web Master Colombia",
    description:
      "Consulta información normativa y regulatoria relacionada con los servicios de telecomunicaciones de Web Master Colombia.",
    keywords:
      "normativa telecomunicaciones Colombia, regulación telecomunicaciones, normativa ISP, regulación internet Colombia",
  },

  "/speedtest": {
    title:
      "Test de Velocidad de Internet | Web Master Colombia",
    description:
      "Realiza una prueba de velocidad y comprueba el rendimiento de tu conexión a internet.",
    keywords:
      "test velocidad internet, prueba velocidad internet, speedtest Colombia, medir velocidad internet",
  },
};

export default function SEO({ pathname }) {
  const data = SEO_DATA[pathname] || SEO_DATA["/"];

  useEffect(() => {
    const currentUrl =
      pathname === "/"
        ? COMPANY.url
        : `${COMPANY.url}${pathname}`;

    // TITLE
    document.title = data.title;

    // META NAME
    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // META PROPERTY
    const setProperty = (property, content) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // SEO
    setMeta("description", data.description);
    setMeta("keywords", data.keywords);
    setMeta("author", COMPANY.name);
    setMeta("robots", "index, follow");

    // Google
    setMeta(
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Open Graph
    setProperty("og:title", data.title);
    setProperty("og:description", data.description);
    setProperty("og:url", currentUrl);
    setProperty("og:site_name", COMPANY.name);
    setProperty("og:type", "website");
    setProperty("og:locale", "es_CO");

    // Twitter / X
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", data.title);
    setMeta("twitter:description", data.description);

    // CANONICAL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", currentUrl);

    // STRUCTURED DATA
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
      description: COMPANY.description,

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      knowsAbout: [
        "Internet dedicado",
        "Internet empresarial",
        "Conectividad empresarial",
        "Internet para ISP",
        "Televisión para operadores",
        "Infraestructura de red",
        "Desarrollo de software",
        "Desarrollo web",
        "Aplicaciones móviles",
      ],
    };

    let schema = document.getElementById(
      "structured-data"
    );

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(structuredData);
  }, [pathname, data]);

  return null;
}