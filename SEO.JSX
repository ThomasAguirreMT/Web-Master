import { useEffect } from "react";

const SEO_DATA = {

  "/": {
    title: "Inttelgo | Internet Fibra Óptica en Bogotá y Soacha",
    description:
      "Internet hogar y empresarial con fibra óptica en Bogotá y Soacha. Conoce los planes de Inttelgo, consulta cobertura, paga tu factura en línea y disfruta internet de alta velocidad.",
    keywords:
      "Inttelgo, internet Inttelgo, internet hogar, internet hogar Bogotá, internet hogar Soacha, internet fibra óptica, internet fibra Bogotá, internet fibra Soacha, fibra óptica Bogotá, fibra óptica Soacha, internet de alta velocidad, planes de internet, proveedor de internet Colombia"
  },

  "/internet": {
    title: "Internet Fibra Óptica en Bogotá y Soacha | Inttelgo",
    description:
      "Planes de internet por fibra óptica para hogares y empresas en Bogotá y Soacha. Internet de alta velocidad, conexión estable y planes adaptados a tus necesidades.",
    keywords:
      "internet fibra óptica, internet fibra óptica Bogotá, internet fibra óptica Soacha, internet hogar Bogotá, internet hogar Soacha, internet residencial, internet empresarial, internet alta velocidad, planes internet Bogotá, planes internet Soacha, internet económico, internet rápido, proveedor internet Bogotá, proveedor internet Soacha, fibra óptica Colombia"
  },

  "/television": {
    title: "Televisión e Internet  Planes de TV e Internet | Inttelgo",
    description:
      "Disfruta televisión e internet en un solo servicio con Inttelgo. Conoce nuestros planes de televisión, canales y opciones de conectividad para tu hogar.",
    keywords:
      "televisión Inttelgo, TV Inttelgo, televisión Bogotá, televisión Soacha, televisión por cable, planes televisión, internet y televisión, internet más televisión, TV hogar, canales televisión, televisión Colombia"
  },

  "/software": {
    title: "Desarrollo de Software para Empresas | Inttelgo",
    description:
      "Desarrollo de software, aplicaciones y soluciones digitales para empresas. Conoce los servicios tecnológicos de Inttelgo.",
    keywords:
      "desarrollo de software, software empresarial, desarrollo web, desarrollo aplicaciones, aplicaciones empresariales, desarrollo tecnológico, software Colombia, desarrollo software Bogotá, desarrollo software Soacha"
  },

  "/trabaja": {
    title: "Trabaja con Inttelgo | Vacantes y Oportunidades Laborales",
    description:
      "Conoce las oportunidades laborales y vacantes disponibles en Inttelgo. Forma parte de nuestro equipo.",
    keywords:
      "trabajo Inttelgo, trabajar en Inttelgo, vacantes Inttelgo, empleo Inttelgo, ofertas laborales Bogotá, empleo Soacha, trabajo Bogotá, trabajo Soacha, empleo telecomunicaciones"
  },

  "/trabajaconnosotros": {
    title: "Trabaja con Nosotros | Inttelgo",
    description:
      "Encuentra oportunidades para trabajar con Inttelgo y forma parte de nuestro equipo de telecomunicaciones y tecnología.",
    keywords:
      "trabaja con nosotros Inttelgo, empleo Inttelgo, vacantes Inttelgo, trabajo telecomunicaciones, empleo telecomunicaciones Bogotá, empleo Soacha"
  },

  "/contacto": {
    title: "Contacto Inttelgo | Atención al Cliente e Internet",
    description:
      "Contacta a Inttelgo para solicitar información sobre internet, planes, cobertura, pagos, soporte técnico y servicios de telecomunicaciones.",
    keywords:
      "contacto Inttelgo, teléfono Inttelgo, WhatsApp Inttelgo, atención al cliente Inttelgo, soporte Inttelgo, servicio al cliente, internet Bogotá, internet Soacha"
  },

  "/pqr": {
    title: "PQR Inttelgo | Peticiones, Quejas, Reclamos y Sugerencias",
    description:
      "Presenta una petición, queja, reclamo o sugerencia ante Inttelgo mediante nuestro formulario PQR.",
    keywords:
      "PQR Inttelgo, peticiones Inttelgo, quejas Inttelgo, reclamos Inttelgo, sugerencias Inttelgo, atención al cliente Inttelgo"
  },

  "/proteccioninfantil": {
    title: "Protección Infantil en Internet | Inttelgo",
    description:
      "Información y recomendaciones de Inttelgo para promover una navegación segura y responsable para niños y familias.",
    keywords:
      "protección infantil internet, seguridad niños internet, internet seguro niños, control parental, navegación segura, seguridad digital, Inttelgo"
  },

  "/normativa": {
    title: "Normativa y Regulación | Inttelgo",
    description:
      "Consulta información normativa, regulatoria y documentación relacionada con los servicios de telecomunicaciones de Inttelgo.",
    keywords:
      "normativa telecomunicaciones, regulación telecomunicaciones Colombia, normativa Inttelgo, regulación internet Colombia, telecomunicaciones Colombia"
  },

  "/speedtest": {
    title: "Test de Velocidad de Internet | Inttelgo",
    description:
      "Realiza una prueba de velocidad de internet y comprueba el rendimiento de tu conexión.",
    keywords:
      "test velocidad internet, speedtest, prueba velocidad internet, medir velocidad internet, medir internet, velocidad fibra óptica, test internet Inttelgo"
  },

  "/desarrollomobile": {
    title: "Desarrollo de Aplicaciones Móviles | Inttelgo",
    description:
      "Desarrollo de aplicaciones móviles para empresas y proyectos digitales.",
    keywords:
      "desarrollo aplicaciones móviles, aplicaciones Android, aplicaciones iOS, desarrollo móvil Colombia, desarrollo apps Bogotá, desarrollo apps Soacha"
  },

  "/desarrollofrontend": {
    title: "Desarrollo Frontend | Inttelgo",
    description:
      "Diseño y desarrollo frontend para sitios web modernos, rápidos y adaptables.",
    keywords:
      "desarrollo frontend, desarrollo web, páginas web, diseño web, frontend Colombia, desarrollo web Bogotá, desarrollo web Soacha"
  },

  "/desarrollobackend": {
    title: "Desarrollo Backend | Inttelgo",
    description:
      "Desarrollo backend, APIs, bases de datos y soluciones tecnológicas para empresas.",
    keywords:
      "desarrollo backend, APIs, bases de datos, servidores, backend Colombia, desarrollo software Bogotá, desarrollo software Soacha"
  }

};


export default function SEO({ pathname }) {

  const data =
    SEO_DATA[pathname] || SEO_DATA["/"];


  useEffect(() => {

    /* =========================
       TITLE
    ========================= */

    document.title = data.title;


    /* =========================
       DESCRIPTION
    ========================= */

    let description =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!description) {

      description =
        document.createElement("meta");

      description.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(description);

    }

    description.setAttribute(
      "content",
      data.description
    );


    /* =========================
       KEYWORDS
       (útiles para otros sistemas,
       Google no las utiliza)
    ========================= */

    let keywords =
      document.querySelector(
        'meta[name="keywords"]'
      );

    if (!keywords) {

      keywords =
        document.createElement("meta");

      keywords.setAttribute(
        "name",
        "keywords"
      );

      document.head.appendChild(keywords);

    }

    keywords.setAttribute(
      "content",
      data.keywords
    );


    /* =========================
       ROBOTS
    ========================= */

    let robots =
      document.querySelector(
        'meta[name="robots"]'
      );

    if (!robots) {

      robots =
        document.createElement("meta");

      robots.setAttribute(
        "name",
        "robots"
      );

      document.head.appendChild(robots);

    }

    robots.setAttribute(
      "content",
      "index, follow"
    );


    /* =========================
       LANGUAGE
    ========================= */

    document.documentElement.lang = "es";


    /* =========================
       OPEN GRAPH
    ========================= */

    const setMeta = (
      property,
      content
    ) => {

      let meta =
        document.querySelector(
          `meta[property="${property}"]`
        );

      if (!meta) {

        meta =
          document.createElement("meta");

        meta.setAttribute(
          "property",
          property
        );

        document.head.appendChild(meta);

      }

      meta.setAttribute(
        "content",
        content
      );

    };


    setMeta(
      "og:title",
      data.title
    );

    setMeta(
      "og:description",
      data.description
    );

    setMeta(
      "og:type",
      "website"
    );

    setMeta(
      "og:locale",
      "es_CO"
    );


  }, [data]);


  return null;
}