import { useEffect } from "react";

const COMPANY = {
  name: "Web Master Colombia",

  url: "https://webmastercolombia.net",

  description:
    "internet dedicado, conectividad empresarial, televisión y soluciones tecnológicas para empresas, ISP y operadores en Colombia.",
};

const SEO_DATA = {
  "/": {
    title:
      "Internet Dedicado",

    description:
      "internet dedicado, internet empresarial, televisión para ISP, infraestructura de red y soluciones tecnológicas para empresas en Colombia.",

    keywords:
      "internet dedicado Colombia, internet empresarial, internet para ISP, carrier Colombia, proveedor internet ISP, televisión para ISP, conectividad empresarial, enlaces dedicados, infraestructura de red, Web Master Colombia",
  },

  "/internet": {
    title:
      "Internet Dedicado ",

    description:
      "Internet dedicado y soluciones de conectividad para empresas, ISP y operadores. Servicios escalables, infraestructura de red y conectividad de alta disponibilidad.",

    keywords:
      "internet dedicado, internet empresarial, internet dedicado Colombia, internet para ISP, carrier ISP, conectividad empresarial, enlaces dedicados, proveedor de internet para ISP, infraestructura de red",
  },

  "/television": {
    title:
      "Televisión para ISP y Operadores | Web Master Colombia",

    description:
      "Soluciones de televisión para ISP y operadores. Amplía tu oferta de servicios con contenido digital y una parrilla de canales para tus clientes.",

    keywords:
      "televisión para ISP, televisión para operadores, TV para ISP, IPTV Colombia, canales digitales, televisión digital, proveedor televisión ISP, servicio televisión operadores",
  },

  "/software": {
    title:
      "Desarrollo de Software y Soluciones Tecnológicas | Web Master Colombia",

    description:
      "Desarrollo de software, aplicaciones, plataformas web, automatización y soluciones tecnológicas personalizadas para empresas y operadores.",

    keywords:
      "desarrollo de software, software empresarial, desarrollo web, aplicaciones empresariales, automatización empresarial, soluciones tecnológicas, software Colombia",
  },

  "/desarrollomobile": {
    title:
      "Desarrollo de Aplicaciones Móviles | Web Master Colombia",

    description:
      "Creamos aplicaciones móviles personalizadas para empresas, negocios y proyectos tecnológicos en Android y otras plataformas.",

    keywords:
      "desarrollo aplicaciones móviles, desarrollo apps, aplicaciones empresariales, aplicaciones Android, desarrollo móvil Colombia",
  },

  "/desarrollofrontend": {
    title:
      "Desarrollo Frontend y Aplicaciones Web | Web Master Colombia",

    description:
      "Diseño y desarrollo de interfaces web modernas, rápidas y adaptables para empresas y proyectos digitales.",

    keywords:
      "desarrollo frontend, desarrollo web, aplicaciones web, diseño web, páginas web empresariales, frontend Colombia",
  },

  "/desarrollobackend": {
    title:
      "Desarrollo Backend, APIs y Bases de Datos | Web Master Colombia",

    description:
      "Desarrollo de backend, APIs, bases de datos, servidores e integraciones tecnológicas para empresas y plataformas digitales.",

    keywords:
      "desarrollo backend, APIs, bases de datos, desarrollo servidores, integración de sistemas, software empresarial, backend Colombia",
  },

  "/trabajaconnosotros": {
    title:
      "Soluciones para ISP y Operadores | Web Master Colombia",

    description:
      "Internet dedicado, televisión, conectividad, infraestructura y soluciones tecnológicas para ISP, operadores y empresas que buscan crecer.",

    keywords:
      "soluciones ISP, carrier Colombia, internet para operadores, internet dedicado ISP, televisión para ISP, infraestructura ISP, crecimiento ISP",
  },

  "/trabaja": {
    title:
      "Trabaja con Nosotros | Web Master Colombia",

    description:
      "Conoce las oportunidades laborales disponibles y forma parte del equipo de Web Master Colombia.",

    keywords:
      "trabajo Web Master Colombia, vacantes telecomunicaciones, empleo tecnología, empleo ISP, trabajo Bogotá, empleo Colombia",
  },

  "/contacto": {
    title:
      "Contacto | Internet Dedicado y Soluciones Empresariales | Web Master Colombia",

    description:
      "Contacta a Web Master Colombia para conocer nuestras soluciones de internet dedicado, conectividad empresarial, televisión y tecnología.",

    keywords:
      "contacto Web Master Colombia, internet dedicado contacto, conectividad empresarial, soporte ISP, soluciones telecomunicaciones",
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
      "protección infantil internet, internet seguro, navegación segura, seguridad digital, control parental",
  },

  "/normativa": {
    title:
      "Normativa y Regulación de Telecomunicaciones | Web Master Colombia",

    description:
      "Consulta la información normativa y regulatoria relacionada con los servicios de telecomunicaciones de Web Master Colombia.",

    keywords:
      "normativa telecomunicaciones Colombia, regulación internet Colombia, normativa ISP, regulación telecomunicaciones",
  },

  "/speedtest": {
    title:
      "Test de Velocidad de Internet | Web Master Colombia",

    description:
      "Realiza una prueba de velocidad y comprueba el rendimiento de tu conexión a internet.",

    keywords:
      "test velocidad internet, prueba de velocidad, speedtest, medir velocidad internet, velocidad conexión",
  },
};

export default function SEO({ pathname }) {
  const data =
    SEO_DATA[pathname] || SEO_DATA["/"];

  useEffect(() => {
    document.title = data.title;

    const setMeta = (name, content) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

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

    setMeta("description", data.description);

    setMeta("keywords", data.keywords);

    setMeta("author", COMPANY.name);

    setMeta("robots", "index, follow");

    setProperty("og:title", data.title);

    setProperty(
      "og:description",
      data.description
    );

    setProperty(
      "og:url",
      `${COMPANY.url}${pathname}`
    );

    setProperty(
      "og:site_name",
      COMPANY.name
    );

    setProperty("og:type", "website");

    setProperty(
      "twitter:card",
      "summary_large_image"
    );

    setProperty(
      "twitter:title",
      data.title
    );

    setProperty(
      "twitter:description",
      data.description
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${COMPANY.url}${pathname}`
    );

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
        "Conectividad empresarial",
        "Internet para ISP",
        "Televisión para operadores",
        "Infraestructura de red",
        "Desarrollo de software",
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

    schema.textContent = JSON.stringify(
      structuredData
    );
  }, [pathname, data]);

  return null;
}