import { useEffect } from "react";

const COMPANY = {
  name: "Web Master Colombia",
  description:
    "Internet dedicado, conectividad empresarial, televisión y soluciones tecnológicas para empresas, ISP y operadores en Colombia.",
};

const SEO_DATA = {
  "/": {
    title:
      "Internet Dedicado Para Empresas, ISP y Operadores | Web Master Colombia",
    description:
      "Internet dedicado, internet empresarial, televisión para ISP, infraestructura de red y soluciones tecnológicas para empresas en Colombia.",
    keywords:
      "internet dedicado Colombia, internet empresarial, internet para ISP, carrier Colombia, proveedor internet ISP, televisión para ISP, conectividad empresarial, enlaces dedicados, infraestructura de red, Web Master Colombia",
  },

  "/internet": {
    title:
      "Internet Dedicado Para Empresas, ISP y Operadores | Web Master Colombia",
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
      "Trabaja con Nosotros | Web Master Colombia",
    description:
      "Conoce las oportunidades laborales disponibles y forma parte del equipo de Web Master Colombia.",
    keywords:
      "trabajo Web Master Colombia, vacantes telecomunicaciones, empleo tecnología, empleo ISP, trabajo Colombia",
  },

  "/trabaja": {
    title:
      "Trabaja con Nosotros | Web Master Colombia",
    description:
      "Conoce las oportunidades laborales disponibles y forma parte del equipo de Web Master Colombia.",
    keywords:
      "trabajo Web Master Colombia, vacantes telecomunicaciones, empleo tecnología, empleo ISP, trabajo Colombia",
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
      "Consulta información normativa y regulatoria relacionada con los servicios de telecomunicaciones de Web Master Colombia.",
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
  useEffect(() => {
    /*
     * Detectar automáticamente el dominio actual.
     *
     * Si el usuario entra por:
     * https://internetdedicado.com
     *
     * se utilizará ese dominio.
     *
     * Si entra por:
     * https://webmastercolombia.net
     *
     * se utilizará ese dominio.
     */
    const currentOrigin = window.location.origin;

    /*
     * Normalizar la ruta para evitar problemas con
     * "/" al final.
     */
    let currentPath = pathname || window.location.pathname;

    if (currentPath.length > 1 && currentPath.endsWith("/")) {
      currentPath = currentPath.slice(0, -1);
    }

    const data = SEO_DATA[currentPath] || SEO_DATA["/"];

    /*
     * URL absoluta de la página actual.
     */
    const canonicalUrl =
      currentOrigin + (currentPath === "/" ? "/" : currentPath);

    /*
     * TITLE
     */
    document.title = data.title;

    /*
     * Función para crear/modificar meta tags.
     */
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

    /*
     * Función para Open Graph.
     */
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

    /*
     * META DESCRIPTION
     */
    setMeta("description", data.description);

    /*
     * KEYWORDS
     *
     * No son un factor importante actualmente para Google,
     * pero las dejamos si otros buscadores/sistemas las utilizan.
     */
    setMeta("keywords", data.keywords);

    /*
     * AUTHOR
     */
    setMeta("author", COMPANY.name);

    /*
     * ROBOTS
     */
    setMeta("robots", "index, follow");

    /*
     * GOOGLEBOT
     */
    setMeta(
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    /*
     * OPEN GRAPH
     */
    setProperty("og:title", data.title);
    setProperty("og:description", data.description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:site_name", COMPANY.name);
    setProperty("og:type", "website");
    setProperty("og:locale", "es_CO");

    /*
     * TWITTER / X
     */
    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:title", data.title);
    setProperty("twitter:description", data.description);

    /*
     * CANONICAL
     *
     * MUY IMPORTANTE:
     *
     * Ya no está fijo en internetdedicado.com.
     *
     * El dominio se obtiene automáticamente de window.location.origin.
     */
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    /*
     * SCHEMA.ORG
     */
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",

      name: COMPANY.name,

      url: currentOrigin,

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
        "Desarrollo web",
        "Aplicaciones móviles",
      ],
    };

    /*
     * Crear o actualizar JSON-LD.
     */
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

    /*
     * Idioma del documento.
     */
    document.documentElement.lang = "es";

  }, [pathname]);

  return null;
}