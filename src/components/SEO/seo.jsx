import { useEffect } from "react";


import logo from "../../assets/logo/logo.svg";
/*
=========================================================
 SEO WEBMASTER COLOMBIA
=========================================================

 ENFOQUE PRINCIPAL:

 - Internet dedicado
 - Internet simétrico
 - Internet empresarial
 - Conectividad empresarial
 - Enlaces dedicados
 - Carrier
 - ISP
 - Operadores
 - Telecomunicaciones
 - Televisión
 - Televisión dedicada
 - Soluciones tecnológicas
 - Bogotá
 - Colombia
 - Soacha

=========================================================
*/

const SEO_DATA = {

  /*
  ========================================================
  HOME
  ========================================================
  */

  "/": {

    title:
      "Internet Dedicado Empresarial",

    description:
      "WebMaster Colombia ofrece internet dedicado, internet simétrico, conectividad empresarial, televisión y soluciones de telecomunicaciones para empresas, ISP y operadores en Colombia.",

    keywords:
      "WebMaster Colombia, WebMaster, Web Master, internet dedicado, internet dedicado Colombia, internet dedicado Bogotá, internet dedicado Bogota, internet empresarial, internet empresarial Colombia, internet empresarial Bogotá, internet para empresas, internet para empresas Colombia, internet corporativo, internet corporativo Colombia, internet simétrico, internet simétrico Colombia, internet simétrico Bogotá, conectividad empresarial, conectividad empresarial Colombia, conectividad Colombia, enlaces dedicados, enlace dedicado Colombia, enlace dedicado Bogotá, proveedor de internet Colombia, proveedor de internet Bogotá, proveedor de internet empresarial, proveedor de internet dedicado, ISP Colombia, ISP Bogotá, internet para ISP, internet para operadores, carrier Colombia, carrier Bogotá, telecomunicaciones Colombia, telecomunicaciones Bogotá, fibra óptica empresarial, fibra óptica Colombia, televisión Colombia, televisión dedicada, soluciones de telecomunicaciones",

    type: "website",

    schemaType: "Organization"

  },


  /*
  ========================================================
  INTERNET
  ========================================================
  */

  "/internet": {

    title:
      "Internet Dedicado para Empresas e ISP WebMaster",

    description:
      "Internet dedicado y simétrico para empresas, ISP y operadores. Conectividad empresarial de alta capacidad, estabilidad, baja latencia y alta disponibilidad en Colombia.",

    keywords:
      "internet dedicado, internet dedicado Colombia, internet dedicado Bogotá, internet dedicado Bogota, internet dedicado empresarial, internet dedicado para empresas, internet dedicado corporativo, internet empresarial, internet empresarial Colombia, internet empresarial Bogotá, internet para empresas, internet para empresas Colombia, internet corporativo, internet corporativo Colombia, internet simétrico, internet simétrico Colombia, internet simétrico Bogotá, internet simétrico empresarial, internet simétrico para empresas, internet simétrico para ISP, internet simétrico para operadores, conexión dedicada, conexión dedicada Colombia, conexión dedicada Bogotá, enlace dedicado, enlace dedicado Colombia, enlace dedicado Bogotá, enlace de internet dedicado, enlace empresarial, enlace corporativo, proveedor de internet dedicado, proveedor internet empresarial, proveedor de internet Colombia, proveedor de internet Bogotá, servicio de internet empresarial, servicio de internet dedicado, servicio de internet simétrico, internet para ISP, internet para ISP Colombia, internet para ISP Bogotá, internet para operadores, internet para operadores Colombia, carrier internet, carrier Colombia, carrier Bogotá, conectividad empresarial, conectividad empresarial Colombia, conectividad empresarial Bogotá, conectividad corporativa, fibra óptica empresarial, fibra óptica para empresas, fibra óptica Colombia, fibra óptica Bogotá, red de fibra óptica, telecomunicaciones Colombia, telecomunicaciones Bogotá, internet de alta capacidad, internet de alta disponibilidad, internet de baja latencia",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  TELEVISION
  ========================================================
  */

  "/television": {

    title:
      "Televisión Dedicada e Internet | Soluciones para Empresas e ISP",

    description:
      "Soluciones de televisión e internet para empresas, operadores e ISP en Colombia. Conoce los servicios de televisión, conectividad y telecomunicaciones de WebMaster.",

    keywords:
      "televisión WebMaster, televisión WebMaster Colombia, televisión Colombia, televisión Bogotá, televisión Bogota, TV Colombia, TV Bogotá, servicio de televisión, servicio TV, televisión digital, televisión por fibra óptica, televisión por internet, TV por internet, TV sobre fibra óptica, televisión empresarial, televisión para empresas, TV empresarial, TV para empresas, televisión corporativa, TV corporativa, televisión para operadores, TV para operadores, televisión para ISP, TV para ISP, proveedor de televisión, proveedor TV, proveedor televisión Colombia, proveedor televisión Bogotá, televisión dedicada, televisión dedicada Colombia, televisión dedicada Bogotá, televisión para empresas Colombia, televisión para operadores Colombia, televisión para ISP Colombia, plataforma de televisión, plataforma TV, soluciones de televisión, soluciones TV, soluciones de televisión Colombia, internet y televisión, internet más televisión, internet + televisión, TV e internet, televisión e internet, conectividad y televisión, servicios de telecomunicaciones, WebMaster televisión, WebMaster TV",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  SOFTWARE
  ========================================================
  */

  "/software": {

    title:
      "Desarrollo de Software Empresarial | WebMaster Colombia",

    description:
      "Desarrollo de software, plataformas web, aplicaciones y soluciones tecnológicas para empresas, ISP, operadores y proyectos de telecomunicaciones.",

    keywords:
      "desarrollo de software, desarrollo de software Colombia, desarrollo de software Bogotá, desarrollo software Bogota, software empresarial, software para empresas, software Colombia, software Bogotá, desarrollo web, desarrollo web Colombia, desarrollo web Bogotá, páginas web empresariales, aplicaciones empresariales, sistemas empresariales, soluciones digitales, soluciones tecnológicas, transformación digital, desarrollo de sistemas, desarrollo aplicaciones, desarrollo aplicaciones Colombia, desarrollo aplicaciones Bogotá, software para ISP, software para telecomunicaciones, software para operadores, tecnología empresarial, soluciones empresariales",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  DESARROLLO MOBILE
  ========================================================
  */

  "/desarrollomobile": {

    title:
      "Desarrollo de Aplicaciones Móviles | WebMaster Colombia",

    description:
      "Desarrollo de aplicaciones móviles para empresas y proyectos tecnológicos. Soluciones para Android, iOS y aplicaciones empresariales.",

    keywords:
      "desarrollo aplicaciones móviles, desarrollo aplicaciones moviles, desarrollo apps, desarrollo apps Colombia, desarrollo apps Bogotá, desarrollo apps Bogota, aplicaciones móviles Colombia, aplicaciones móviles Bogotá, desarrollo Android, aplicaciones Android, desarrollo iOS, aplicaciones iOS, apps empresariales, aplicaciones empresariales, desarrollo móvil, desarrollo móvil Colombia, desarrollo móvil Bogotá, software móvil, aplicaciones para empresas, soluciones móviles, desarrollo tecnológico",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  FRONTEND
  ========================================================
  */

  "/desarrollofrontend": {

    title:
      "Desarrollo Frontend y Diseño Web | WebMaster Colombia",

    description:
      "Desarrollo frontend y diseño web para empresas. Creamos sitios web modernos, rápidos, adaptables, funcionales y orientados a una excelente experiencia de usuario.",

    keywords:
      "desarrollo frontend, desarrollo frontend Colombia, desarrollo frontend Bogotá, frontend Colombia, frontend Bogotá, desarrollo web, desarrollo web Colombia, desarrollo web Bogotá, diseño web, diseño web Colombia, diseño web Bogotá, páginas web, páginas web Colombia, páginas web Bogotá, páginas web empresariales, sitios web empresariales, desarrollo React, React Colombia, React Bogotá, interfaces web, UI web, UX web, experiencia de usuario, desarrollo páginas web, creación páginas web, página web para empresas, desarrollo tecnológico",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  BACKEND
  ========================================================
  */

  "/desarrollobackend": {

    title:
      "Desarrollo Backend, APIs y Sistemas Empresariales | WebMaster",

    description:
      "Desarrollo backend, APIs, bases de datos, servidores y arquitecturas de software para empresas, ISP y operadores.",

    keywords:
      "desarrollo backend, desarrollo backend Colombia, desarrollo backend Bogotá, backend Colombia, backend Bogotá, APIs, API Colombia, API Bogotá, desarrollo API, desarrollo APIs, bases de datos, bases de datos Colombia, bases de datos Bogotá, servidores, arquitectura de software, arquitectura backend, sistemas empresariales, software empresarial, backend empresarial, desarrollo sistemas, desarrollo software, programación backend, servicios backend, soluciones tecnológicas, plataformas empresariales",

    type: "website",

    schemaType: "Service"

  },


  /*
  ========================================================
  TRABAJA
  ========================================================
  */

  "/trabaja": {

    title:
      "Trabaja con WebMaster Colombia | Vacantes y Empleo",

    description:
      "Conoce las oportunidades laborales y vacantes de WebMaster Colombia en tecnología, telecomunicaciones, internet y desarrollo de software.",

    keywords:
      "trabajo WebMaster, trabajar en WebMaster, empleo WebMaster, empleo WebMaster Colombia, vacantes WebMaster, vacantes Colombia, trabajo telecomunicaciones, empleo telecomunicaciones Colombia, trabajo telecomunicaciones Bogotá, empleo tecnología Colombia, empleo tecnología Bogotá, trabajo internet, empleo ISP, trabajo ISP, trabajo desarrollo software, empleo desarrollo software, oportunidades laborales Colombia",

    type: "website",

    schemaType: "WebPage"

  },


  /*
  ========================================================
  TRABAJA CON NOSOTROS
  ========================================================
  */

  "/trabajaconnosotros": {

    title:
      "Trabaja con Nosotros | WebMaster Colombia",

    description:
      "Forma parte del equipo de WebMaster Colombia y encuentra oportunidades laborales en telecomunicaciones, tecnología, internet y desarrollo de software.",

    keywords:
      "trabaja con nosotros WebMaster, trabaja con WebMaster Colombia, empleo WebMaster Colombia, vacantes WebMaster Colombia, trabajo WebMaster Colombia, empleo telecomunicaciones Colombia, empleo telecomunicaciones Bogotá, trabajo telecomunicaciones Bogotá, empleo tecnología Colombia, trabajo tecnología Bogotá, empleo ISP Colombia, trabajo ISP Colombia, empleo internet, trabajo internet, empleo desarrollo software",

    type: "website",

    schemaType: "WebPage"

  },


  /*
  ========================================================
  CONTACTO
  ========================================================
  */

  "/contacto": {

    title:
      "Contacto WebMaster Colombia | Internet Dedicado y Empresarial",

    description:
      "Contacta a WebMaster Colombia para solicitar información sobre internet dedicado, internet simétrico, internet empresarial, conectividad y soluciones de telecomunicaciones.",

    keywords:
      "contacto WebMaster, contacto WebMaster Colombia, contactar WebMaster, teléfono WebMaster, WhatsApp WebMaster, contacto internet dedicado, contacto internet empresarial, contacto internet simétrico, internet dedicado contacto, internet empresarial contacto, internet Bogotá contacto, proveedor internet contacto, cotizar internet dedicado, cotización internet dedicado, cotizar internet empresarial, contratar internet dedicado, contratar internet empresarial, soporte WebMaster, atención WebMaster",

    type: "website",

    schemaType: "ContactPage"

  },


  /*
  ========================================================
  PQR
  ========================================================
  */

  "/pqr": {

    title:
      "PQR WebMaster | Peticiones, Quejas, Reclamos y Sugerencias",

    description:
      "Presenta tus peticiones, quejas, reclamos o sugerencias ante WebMaster Colombia mediante nuestro formulario oficial de atención al usuario.",

    keywords:
      "PQR WebMaster, PQR WebMaster Colombia, peticiones WebMaster, petición WebMaster, quejas WebMaster, queja WebMaster, reclamos WebMaster, reclamo WebMaster, sugerencias WebMaster, sugerencia WebMaster, atención al cliente WebMaster, atención usuario WebMaster, servicio al cliente WebMaster, soporte WebMaster, atención telecomunicaciones",

    type: "website",

    schemaType: "WebPage"

  },


  /*
  ========================================================
  SPEEDTEST
  ========================================================
  */

  "/speedtest": {

    title:
      "Test de Velocidad de Internet | Speedtest WebMaster Colombia",

    description:
      "Realiza un test de velocidad y comprueba la velocidad de descarga, subida, latencia y rendimiento de tu conexión a internet.",

    keywords:
      "test velocidad internet, test de velocidad internet, speedtest, speed test, prueba velocidad internet, prueba de internet, medir velocidad internet, medir internet, velocidad internet, velocidad descarga, velocidad subida, velocidad internet Colombia, test velocidad Colombia, test velocidad Bogotá, velocidad internet dedicado, velocidad internet empresarial, velocidad internet simétrico, prueba internet dedicado, prueba internet empresarial, prueba conexión internet, medir latencia, latencia internet, ping internet",

    type: "website",

    schemaType: "WebPage"

  },


  /*
  ========================================================
  PROTECCION INFANTIL
  ========================================================
  */

  "/proteccioninfantil": {

    title:
      "Protección Infantil en Internet | WebMaster Colombia",

    description:
      "Conoce recomendaciones para una navegación segura y responsable y herramientas de protección infantil en internet.",

    keywords:
      "protección infantil internet, protección niños internet, seguridad internet niños, seguridad digital niños, navegación segura, navegación segura niños, internet seguro, internet seguro para niños, seguridad digital, seguridad en internet, control parental, protección digital, educación digital, uso responsable internet, WebMaster Colombia",

    type: "website",

    schemaType: "WebPage"

  },


  /*
  ========================================================
  NORMATIVA
  ========================================================
  */

  "/normativa": {

    title:
      "Normativa de Telecomunicaciones | WebMaster Colombia",

    description:
      "Consulta información y normativa relacionada con los servicios de telecomunicaciones, conectividad e internet en Colombia.",

    keywords:
      "normativa telecomunicaciones Colombia, normativa telecomunicaciones Bogotá, regulación telecomunicaciones Colombia, regulación internet Colombia, normativa internet Colombia, regulación ISP Colombia, normativa ISP, regulación operadores Colombia, normativa servicios telecomunicaciones, regulación servicios telecomunicaciones, WebMaster normativa, telecomunicaciones Colombia",

    type: "website",

    schemaType: "WebPage"

  }

};


/*
=========================================================
 INFORMACIÓN GENERAL DE LA EMPRESA
=========================================================
*/

const COMPANY = {
  name: "WebMaster Colombia",

  url: "https://webmastercolombia.net",

  description:
    "Proveedor de servicios de telecomunicaciones, internet dedicado, conectividad empresarial, televisión y soluciones tecnológicas para empresas, ISP y operadores en Colombia.",

  country: "CO",

  city: "Bogotá",

  region: "Bogotá D.C.",

  logo:
    "https://webmastercolombia.net/logo.svg"
};

/*
=========================================================
 CREAR / ACTUALIZAR META
=========================================================
*/

function setMetaByName(name, content) {

  let meta =
    document.querySelector(
      `meta[name="${name}"]`
    );

  if (!meta) {

    meta =
      document.createElement("meta");

    meta.setAttribute(
      "name",
      name
    );

    document.head.appendChild(meta);

  }

  meta.setAttribute(
    "content",
    content
  );

}


/*
=========================================================
 CREAR / ACTUALIZAR OPEN GRAPH
=========================================================
*/

function setMetaByProperty(property, content) {

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

}


/*
=========================================================
 CANONICAL
=========================================================
*/

function setCanonical(url) {

  let canonical =
    document.querySelector(
      'link[rel="canonical"]'
    );

  if (!canonical) {

    canonical =
      document.createElement("link");

    canonical.setAttribute(
      "rel",
      "canonical"
    );

    document.head.appendChild(canonical);

  }

  canonical.setAttribute(
    "href",
    url
  );

}


/*
=========================================================
 JSON-LD
=========================================================
*/

function setStructuredData(data) {

  let script =
    document.getElementById(
      "webmaster-structured-data"
    );

  if (!script) {

    script =
      document.createElement("script");

    script.id =
      "webmaster-structured-data";

    script.type =
      "application/ld+json";

    document.head.appendChild(script);

  }

  script.textContent =
    JSON.stringify(data);

}


/*
=========================================================
 COMPONENTE SEO
=========================================================
*/

export default function SEO({ pathname }) {

  const data =
    SEO_DATA[pathname] ||
    SEO_DATA["/"];


  useEffect(() => {

    /*
    ======================================================
    URL ACTUAL
    ======================================================
    */

    const currentUrl =
      `https://webmastercolombia.net${
        pathname === "/"
          ? "/"
          : pathname
      }`;


    /*
    ======================================================
    TITLE
    ======================================================
    */

    document.title =
      data.title;


    /*
    ======================================================
    DESCRIPTION
    ======================================================
    */

    setMetaByName(
      "description",
      data.description
    );


    /*
    ======================================================
    KEYWORDS
    ======================================================
    */

    setMetaByName(
      "keywords",
      data.keywords
    );


    /*
    ======================================================
    ROBOTS
    ======================================================
    */

    setMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );


    /*
    ======================================================
    LANGUAGE
    ======================================================
    */

    document.documentElement.lang =
      "es-CO";


    /*
    ======================================================
    CANONICAL
    ======================================================
    */

    setCanonical(
      currentUrl
    );


    /*
    ======================================================
    OPEN GRAPH
    ======================================================
    */

    setMetaByProperty(
      "og:title",
      data.title
    );

    setMetaByProperty(
      "og:description",
      data.description
    );

    setMetaByProperty(
      "og:type",
      data.type || "website"
    );

    setMetaByProperty(
      "og:url",
      currentUrl
    );

    setMetaByProperty(
      "og:site_name",
      "WebMaster Colombia"
    );

    setMetaByProperty(
      "og:locale",
      "es_CO"
    );


    /*
    ======================================================
    OPEN GRAPH IMAGE
    ======================================================
    */

    setMetaByProperty(
      "og:image",
      COMPANY.logo
    );

    setMetaByProperty(
      "og:image:alt",
      "WebMaster Colombia"
    );


    /*
    ======================================================
    TWITTER / X
    ======================================================
    */

    setMetaByName(
      "twitter:card",
      "summary_large_image"
    );

    setMetaByName(
      "twitter:title",
      data.title
    );

    setMetaByName(
      "twitter:description",
      data.description
    );

    setMetaByName(
      "twitter:image",
      COMPANY.logo
    );


    /*
    ======================================================
    AUTHOR
    ======================================================
    */

    setMetaByName(
      "author",
      "WebMaster Colombia"
    );


    /*
    ======================================================
    THEME COLOR
    ======================================================
    */

    setMetaByName(
      "theme-color",
      "#ffffff"
    );


    /*
    ======================================================
    JSON-LD
    ======================================================
    */

    let structuredData;


    /*
    ======================================================
    ORGANIZATION
    ======================================================
    */

    if (
      data.schemaType ===
      "Organization"
    ) {

      structuredData = {

        "@context":
          "https://schema.org",

        "@type":
          "Organization",

        name:
          COMPANY.name,

        url:
          COMPANY.url,

        logo:
          COMPANY.logo,

        description:
          COMPANY.description,

        address: {

          "@type":
            "PostalAddress",

          addressLocality:
            COMPANY.city,

          addressRegion:
            COMPANY.region,

          addressCountry:
            COMPANY.country

        }

      };

    }


    /*
    ======================================================
    SERVICE
    ======================================================
    */

    else if (
      data.schemaType ===
      "Service"
    ) {

      structuredData = {

        "@context":
          "https://schema.org",

        "@type":
          "Service",

        name:
          data.title,

        description:
          data.description,

        provider: {

          "@type":
            "Organization",

          name:
            COMPANY.name,

          url:
            COMPANY.url

        },

        areaServed: {

          "@type":
            "Country",

          name:
            "Colombia"

        },

        url:
          currentUrl

      };

    }


    /*
    ======================================================
    CONTACT PAGE
    ======================================================
    */

    else if (
      data.schemaType ===
      "ContactPage"
    ) {

      structuredData = {

        "@context":
          "https://schema.org",

        "@type":
          "ContactPage",

        name:
          data.title,

        description:
          data.description,

        url:
          currentUrl,

        isPartOf: {

          "@type":
            "WebSite",

          name:
            COMPANY.name,

          url:
            COMPANY.url

        }

      };

    }


    /*
    ======================================================
    WEBPAGE
    ======================================================
    */

    else {

      structuredData = {

        "@context":
          "https://schema.org",

        "@type":
          "WebPage",

        name:
          data.title,

        description:
          data.description,

        url:
          currentUrl,

        isPartOf: {

          "@type":
            "WebSite",

          name:
            COMPANY.name,

          url:
            COMPANY.url

        },

        inLanguage:
          "es-CO"

      };

    }


    /*
    ======================================================
    INSERTAR JSON-LD
    ======================================================
    */

    setStructuredData(
      structuredData
    );


  }, [pathname, data]);


  return null;
}