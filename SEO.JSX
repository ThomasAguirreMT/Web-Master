import { useEffect } from "react";

const SEO_DATA = {

  "/": {
    title: "Web Master | Internet Fibra Óptica en Bogotá y Soacha",
    description:
      "Internet hogar y empresarial con fibra óptica en Bogotá y Soacha. Conoce los planes de Web Master, consulta cobertura, paga tu factura en línea y disfruta internet de alta velocidad.",
    keywords:
      "Web Master, internet Web Master, internet hogar, internet hogar Bogotá, internet hogar Soacha, internet fibra óptica, internet fibra Bogotá, internet fibra Soacha, fibra óptica Bogotá, fibra óptica Soacha, internet de alta velocidad, planes de internet, proveedor de internet Colombia"
  },

  "/internet": {
    title: "Internet Fibra Óptica en Bogotá y Soacha  Web Master",
    description:
      "Planes de internet por fibra óptica para hogares y empresas en Bogotá y Soacha. Internet de alta velocidad, conexión estable y planes adaptados a tus necesidades.",
    keywords:
      "internet fibra óptica, internet fibra óptica Bogotá, internet fibra óptica Soacha, internet hogar Bogotá, internet hogar Soacha, internet residencial, internet empresarial, internet alta velocidad, planes internet Bogotá, planes internet Soacha, internet económico, internet rápido, proveedor internet Bogotá, proveedor internet Soacha, fibra óptica Colombia"
  },

  "/television": {
    title: "Televisión e Internet  Planes de TV e Internet  Web Master",
    description:
      "Disfruta televisión e internet en un solo servicio con Web Master. Conoce nuestros planes de televisión, canales y opciones de conectividad para tu hogar.",
    keywords:
      "televisión Web Master, TV Web Master, televisión Bogotá, televisión Soacha, televisión por cable, planes televisión, internet y televisión, internet más televisión, TV hogar, canales televisión, televisión Colombia"
  },

  "/software": {
    title: "Desarrollo de Software para Empresas Web Master",
    description:
      "Desarrollo de software, aplicaciones y soluciones digitales para empresas. Conoce los servicios tecnológicos de Web Master.",
    keywords:
      "desarrollo de software, software empresarial, desarrollo web, desarrollo aplicaciones, aplicaciones empresariales, desarrollo tecnológico, software Colombia, desarrollo software Bogotá, desarrollo software Soacha"
  },

  "/trabaja": {
    title: "Trabaja con Web Master  Vacantes y Oportunidades Laborales",
    description:
      "Conoce las oportunidades laborales y vacantes disponibles en Web Master. Forma parte de nuestro equipo.",
    keywords:
      "trabajo Web Master, trabajar en Web Master, vacantes Web Master, empleo Web Master, ofertas laborales Bogotá, empleo Soacha, trabajo Bogotá, trabajo Soacha, empleo telecomunicaciones"
  },

  "/trabajaconnosotros": {
    title: "Trabaja con Nosotros | Web Master",
    description:
      "Encuentra oportunidades para trabajar con Web Master y forma parte de nuestro equipo de telecomunicaciones y tecnología.",
    keywords:
      "trabaja con nosotros Web Master, empleo Web Master, vacantes Web Master, trabajo telecomunicaciones, empleo telecomunicaciones Bogotá, empleo Soacha"
  },

  "/contacto": {
    title: "Contacto Web Master | Atención al Cliente e Internet",
    description:
      "Contacta a Web Master para solicitar información sobre internet, planes, cobertura, pagos, soporte técnico y servicios de telecomunicaciones.",
    keywords:
      "contacto Web Master, teléfono Web Master, WhatsApp Web Master, atención al cliente Web Master, soporte Web Master, servicio al cliente, internet Bogotá, internet Soacha"
  },

  "/pqr": {
    title: "PQR Web Master | Peticiones, Quejas, Reclamos y Sugerencias",
    description:
      "Presenta una petición, queja, reclamo o sugerencia ante Web Master mediante nuestro formulario PQR.",
    keywords:
      "PQR Web Master, peticiones Web Master, quejas Web Master, reclamos Web Master, sugerencias Web Master, atención al cliente Web Master"
  },

  "/proteccioninfantil": {
    title: "Protección Infantil en Internet | Web Master",
    description:
      "Información y recomendaciones de Web Master para promover una navegación segura y responsable para niños y familias.",
    keywords:
      "protección infantil internet, seguridad niños internet, internet seguro niños, control parental, navegación segura, seguridad digital, Web Master"
  },

  "/normativa": {
    title: "Normativa y Regulación | Web Master",
    description:
      "Consulta información normativa, regulatoria y documentación relacionada con los servicios de telecomunicaciones de Web Master.",
    keywords:
      "normativa telecomunicaciones, regulación telecomunicaciones Colombia, normativa Web Master, regulación internet Colombia, telecomunicaciones Colombia"
  },

  "/speedtest": {
    title: "Test de Velocidad de Internet | Web Master",
    description:
      "Realiza una prueba de velocidad de internet y comprueba el rendimiento de tu conexión.",
    keywords:
      "test velocidad internet, speedtest, prueba velocidad internet, medir velocidad internet, medir internet, velocidad fibra óptica, test internet Web Master"
  },

  "/desarrollomobile": {
    title: "Desarrollo de Aplicaciones Móviles | Web Master",
    description:
      "Desarrollo de aplicaciones móviles para empresas y proyectos digitales.",
    keywords:
      "desarrollo aplicaciones móviles, aplicaciones Android, aplicaciones iOS, desarrollo móvil Colombia, desarrollo apps Bogotá, desarrollo apps Soacha"
  },

  "/desarrollofrontend": {
    title: "Desarrollo Frontend | Web Master",
    description:
      "Diseño y desarrollo frontend para sitios web modernos, rápidos y adaptables.",
    keywords:
      "desarrollo frontend, desarrollo web, páginas web, diseño web, frontend Colombia, desarrollo web Bogotá, desarrollo web Soacha"
  },

  "/desarrollobackend": {
    title: "Desarrollo Backend | Web Master",
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