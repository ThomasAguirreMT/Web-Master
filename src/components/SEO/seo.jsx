import { useEffect } from "react";

/* =========================================================
   SEO WEBMASTER COLOMBIA
   Enfoque principal:
   - Internet dedicado
   - Internet simétrico
   - Internet empresarial
   - Conectividad empresarial
   - Carrier
   - ISP
   - Bogotá / Colombia
========================================================= */

const SEO_DATA = {

    /* =====================================================
       HOME
    ===================================================== */

    "/": {
        title:
            "WebMaster Colombia | Internet Dedicado, Simetrico y Empresarial",

        description:
            "WebMaster Colombia ofrece internet dedicado, internet simetrico, internet empresarial, conectividad para empresas, ISP y operadores, enlaces de alta capacidad, baja latencia y alta disponibilidad.",

        keywords:
            "WebMaster Colombia, WebMaster, web master, wed master, internet dedicado, internet dedicado Colombia, internet dedicado Bogotá, internet empresarial, internet empresarial Colombia, internet empresarial Bogotá, internet para empresas, internet para empresas Bogotá, internet corporativo, internet corporativo Colombia, internet corporativo Bogotá, internet simetrico, internet simetrico Colombia, internet simetrico Bogotá, internet de alta velocidad, internet rápido, buen internet, internet bueno, conexión a internet, proveedor de internet, proveedor de internet Colombia, proveedor de internet Bogotá, proveedor internet empresarial, proveedor internet dedicado, conectividad empresarial, conectividad Colombia, telecomunicaciones Colombia, telecomunicaciones Bogotá, ISP Colombia, ISP Bogotá, carrier Colombia, carrier Bogotá, enlaces dedicados, enlace dedicado Colombia, enlace dedicado Bogotá, fibra óptica empresarial, fibra óptica Colombia, red empresarial, conectividad para empresas"
    },


    /* =====================================================
       INTERNET
    ===================================================== */

    "/internet": {
        title:
            "Internet Dedicado y Simetrico para Empresas | WebMaster Colombia",

        description:
            "Internet dedicado y simetrico para empresas, ISP y operadores. Conectividad de alta capacidad, baja latencia, estabilidad, redundancia y alta disponibilidad en Colombia.",

        keywords:
            "internet dedicado, internet dedicado Colombia, internet dedicado Bogotá, internet dedicado Bogota, internet dedicado empresarial, internet dedicado para empresas, internet dedicado corporativo, internet empresarial, internet empresarial Colombia, internet empresarial Bogotá, internet empresarial Bogota, internet para empresas, internet para empresas Bogotá, internet para empresas Colombia, internet corporativo, internet corporativo Colombia, internet corporativo Bogotá, internet simétrico, internet simétrico Colombia, internet simétrico Bogotá, internet simetrico Bogota, internet simétrico empresarial, internet simétrico para empresas, internet de alta velocidad, internet rápido, internet bueno, buen internet, conexión estable, internet estable, internet de alta disponibilidad, internet baja latencia, internet con baja latencia, internet de alta capacidad, conexión dedicada, conexión dedicada Colombia, conexión dedicada Bogotá, enlace dedicado, enlace dedicado Colombia, enlace dedicado Bogotá, enlace de internet, enlace de internet dedicado, enlace empresarial, enlace corporativo, proveedor de internet dedicado, proveedor internet empresarial, proveedor de internet Colombia, proveedor de internet Bogotá, proveedor internet corporativo, servicio de internet empresarial, servicio de internet dedicado, servicio de internet simétrico, internet para ISP, internet para ISP Colombia, internet para ISP Bogotá, internet para operadores, internet para operadores Colombia, internet carrier, carrier internet, carrier Colombia, carrier Bogotá, conectividad empresarial, conectividad empresarial Colombia, conectividad empresarial Bogotá, conectividad corporativa, fibra óptica empresarial, fibra óptica para empresas, fibra óptica Colombia, fibra óptica Bogotá, red de fibra óptica, telecomunicaciones Colombia, telecomunicaciones Bogotá, servicios de telecomunicaciones, internet empresarial de alta velocidad, internet dedicado de alta velocidad"
    },


    /* =====================================================
       TELEVISIÓN
    ===================================================== */
    "/television": {
        title:
            "Televisión e Internet | Planes de TV y Conectividad | WebMaster Colombia",

        description:
            "Soluciones de televisión e internet para hogares, empresas, operadores e ISP en Colombia. Conoce nuestros servicios de TV, conectividad y soluciones de telecomunicaciones.",

        keywords:
            "televisión, televisión Colombia, televisión Bogotá, televisión Colombia Bogotá, TV Colombia, TV Bogotá, servicio de televisión, servicio TV, televisión digital, televisión por fibra óptica, televisión por internet, TV por internet, TV sobre fibra óptica, televisión empresarial, televisión para empresas, TV empresarial, TV para empresas, televisión corporativa, TV corporativa, televisión para operadores, TV para operadores, televisión para ISP, TV para ISP, proveedor de televisión, proveedor TV, proveedor televisión Colombia, proveedor televisión Bogotá, planes de televisión, planes TV, planes de TV Colombia, planes TV Bogotá, contratar televisión, contratar TV, contratar televisión Colombia, contratar TV Bogotá, televisión para hogares, televisión hogar, TV hogar, televisión residencial, TV residencial, canales de televisión, servicio canales TV, plataforma de televisión, plataforma TV, soluciones de televisión, soluciones TV, soluciones de televisión Colombia, telecomunicaciones Colombia, telecomunicaciones Bogotá, internet y televisión, internet más televisión, internet + televisión, TV e internet, televisión e internet, televisión con internet, plan internet y televisión, planes internet y televisión, planes internet más televisión, contratar internet y televisión, contratar internet más televisión, internet TV Colombia, internet TV Bogotá, internet televisión Colombia, internet televisión Bogotá, fibra óptica televisión, fibra óptica TV, fibra óptica internet y televisión, conectividad y televisión, conectividad TV, servicios de telecomunicaciones, servicios de televisión e internet, WebMaster televisión, WebMaster TV, WebMaster Colombia televisión, WebMaster internet y televisión"
    },


    /* =====================================================
       SOFTWARE
    ===================================================== */

    "/software": {
        title:
            "Desarrollo de Software Empresarial | WebMaster Colombia",

        description:
            "Desarrollo de software, plataformas web, aplicaciones y soluciones tecnológicas para empresas, ISP, operadores y proyectos de telecomunicaciones.",

        keywords:
            "desarrollo de software, desarrollo de software Colombia, desarrollo de software Bogotá, software empresarial, software para empresas, software Colombia, software Bogotá, desarrollo web, desarrollo web Colombia, desarrollo web Bogotá, páginas web empresariales, aplicaciones empresariales, sistemas empresariales, soluciones digitales, soluciones tecnológicas, transformación digital, desarrollo de sistemas, desarrollo aplicaciones, desarrollo aplicaciones Colombia, desarrollo aplicaciones Bogotá, software para ISP, software para telecomunicaciones, software para operadores, tecnología empresarial, soluciones empresariales"
    },


    /* =====================================================
       DESARROLLO MOBILE
    ===================================================== */

    "/desarrollomobile": {
        title:
            "Desarrollo de Aplicaciones Móviles | WebMaster Colombia",

        description:
            "Desarrollo de aplicaciones móviles para empresas y proyectos tecnológicos. Soluciones Android, iOS y aplicaciones empresariales.",

        keywords:
            "desarrollo aplicaciones móviles, desarrollo apps, desarrollo apps Colombia, desarrollo apps Bogotá, aplicaciones móviles Colombia, aplicaciones móviles Bogotá, desarrollo Android, aplicaciones Android, desarrollo iOS, aplicaciones iOS, apps empresariales, aplicaciones empresariales, desarrollo móvil, desarrollo móvil Colombia, desarrollo móvil Bogotá, software móvil, aplicaciones para empresas, soluciones móviles, desarrollo tecnológico"
    },


    /* =====================================================
       FRONTEND
    ===================================================== */

    "/desarrollofrontend": {
        title:
            "Desarrollo Frontend y Diseño Web | WebMaster Colombia",

        description:
            "Desarrollo frontend y diseño web moderno para empresas. Creamos sitios web rápidos, adaptables, funcionales y orientados a una excelente experiencia de usuario.",

        keywords:
            "desarrollo frontend, desarrollo frontend Colombia, desarrollo frontend Bogotá, frontend Colombia, frontend Bogotá, desarrollo web, desarrollo web Colombia, desarrollo web Bogotá, diseño web, diseño web Colombia, diseño web Bogotá, páginas web, páginas web Colombia, páginas web Bogotá, páginas web empresariales, sitios web empresariales, desarrollo React, React Colombia, React Bogotá, interfaces web, UI web, UX web, experiencia de usuario, desarrollo páginas web, creación páginas web, página web para empresas, desarrollo tecnológico"
    },


    /* =====================================================
       BACKEND
    ===================================================== */

    "/desarrollobackend": {
        title:
            "Desarrollo Backend, APIs y Sistemas Empresariales | WebMaster",

        description:
            "Desarrollo backend, APIs, bases de datos, servidores y arquitecturas de software para empresas, ISP y operadores.",

        keywords:
            "desarrollo backend, desarrollo backend Colombia, desarrollo backend Bogotá, backend Colombia, backend Bogotá, APIs, API Colombia, API Bogotá, desarrollo API, desarrollo APIs, bases de datos, bases de datos Colombia, bases de datos Bogotá, servidores, arquitectura de software, arquitectura backend, sistemas empresariales, software empresarial, backend empresarial, desarrollo sistemas, desarrollo software, programación backend, servicios backend, soluciones tecnológicas, plataformas empresariales"
    },


    /* =====================================================
       TRABAJA
    ===================================================== */

    "/trabaja": {
        title:
            "Trabaja con Nosotros | WebMaster Colombia",

        description:
            "Conoce las oportunidades laborales de WebMaster Colombia y encuentra vacantes relacionadas con tecnología, telecomunicaciones, internet y desarrollo de software.",

        keywords:
            "trabajo WebMaster, trabajar en WebMaster, empleo WebMaster, empleo WebMaster Colombia, vacantes WebMaster, vacantes Colombia, trabajo telecomunicaciones, empleo telecomunicaciones Colombia, trabajo telecomunicaciones Bogotá, empleo tecnología Colombia, empleo tecnología Bogotá, trabajo internet, empleo ISP, trabajo ISP, trabajo desarrollo software, empleo desarrollo software, oportunidades laborales Colombia"
    },


    /* =====================================================
       TRABAJA CON NOSOTROS
    ===================================================== */

    "/trabajaconnosotros": {
        title:
            "Trabaja con Nosotros | WebMaster Colombia",

        description:
            "Forma parte del equipo de WebMaster Colombia y encuentra oportunidades laborales en telecomunicaciones, tecnología, internet y desarrollo de software.",

        keywords:
            "trabaja con nosotros WebMaster, trabaja con WebMaster Colombia, empleo WebMaster Colombia, vacantes WebMaster Colombia, trabajo WebMaster Colombia, empleo telecomunicaciones Colombia, empleo telecomunicaciones Bogotá, trabajo telecomunicaciones Bogotá, empleo tecnología Colombia, trabajo tecnología Bogotá, empleo ISP Colombia, trabajo ISP Colombia, empleo internet, trabajo internet, empleo desarrollo software"
    },


    /* =====================================================
       CONTACTO
    ===================================================== */

    "/contacto": {
        title:
            "Contacto WebMaster Colombia | Internet Dedicado y Empresarial",

        description:
            "Contacta a WebMaster Colombia para solicitar información sobre internet dedicado, internet simétrico, internet empresarial, conectividad y soluciones de telecomunicaciones.",

        keywords:
            "contacto WebMaster, contacto WebMaster Colombia, contactar WebMaster, teléfono WebMaster, WhatsApp WebMaster, contacto internet dedicado, contacto internet empresarial, contacto internet simétrico, internet dedicado contacto, internet empresarial contacto, internet Bogotá contacto, proveedor internet contacto, cotizar internet dedicado, cotización internet dedicado, cotizar internet empresarial, contratar internet dedicado, contratar internet empresarial, soporte WebMaster, atención WebMaster"
    },


    /* =====================================================
       PQR
    ===================================================== */

    "/pqr": {
        title:
            "PQR WebMaster | Peticiones, Quejas, Reclamos y Sugerencias",

        description:
            "Presenta tus peticiones, quejas, reclamos o sugerencias ante WebMaster Colombia mediante nuestro formulario de atención al usuario.",

        keywords:
            "PQR WebMaster, PQR WebMaster Colombia, peticiones WebMaster, petición WebMaster, quejas WebMaster, queja WebMaster, reclamos WebMaster, reclamo WebMaster, sugerencias WebMaster, sugerencia WebMaster, atención al cliente WebMaster, atención usuario WebMaster, servicio al cliente WebMaster, soporte WebMaster, atención telecomunicaciones"
    },


    /* =====================================================
       SPEEDTEST
    ===================================================== */

    "/speedtest": {
        title:
            "Test de Velocidad de Internet | Speedtest WebMaster Colombia",

        description:
            "Realiza un test de velocidad de internet y comprueba el rendimiento, velocidad de descarga, velocidad de subida y latencia de tu conexión.",

        keywords:
            "test velocidad internet, test de velocidad internet, speedtest, speed test, prueba velocidad internet, prueba de internet, medir velocidad internet, medir internet, velocidad internet, velocidad de descarga, velocidad de subida, velocidad de internet Colombia, test velocidad Colombia, test velocidad Bogotá, velocidad internet dedicado, velocidad internet empresarial, velocidad internet simétrico, prueba internet dedicado, prueba internet empresarial, prueba conexión internet, medir latencia, latencia internet, ping internet"
    },


    /* =====================================================
       PROTECCIÓN INFANTIL
    ===================================================== */

    "/proteccioninfantil": {
        title:
            "Protección Infantil en Internet | WebMaster Colombia",

        description:
            "Conoce recomendaciones para una navegación segura y responsable y herramientas de protección infantil en internet.",

        keywords:
            "protección infantil internet, protección niños internet, seguridad internet niños, seguridad digital niños, navegación segura, navegación segura niños, internet seguro, internet seguro para niños, seguridad digital, seguridad en internet, control parental, protección digital, educación digital, uso responsable internet, WebMaster Colombia"
    },


    /* =====================================================
       NORMATIVA
    ===================================================== */

    "/normativa": {
        title:
            "Normativa de Telecomunicaciones | WebMaster Colombia",

        description:
            "Consulta información y normativa relacionada con los servicios de telecomunicaciones, conectividad e internet en Colombia.",

        keywords:
            "normativa telecomunicaciones Colombia, normativa telecomunicaciones Bogotá, regulación telecomunicaciones Colombia, regulación internet Colombia, normativa internet Colombia, regulación ISP Colombia, normativa ISP, regulación operadores Colombia, normativa servicios telecomunicaciones, regulación servicios telecomunicaciones, WebMaster normativa, telecomunicaciones Colombia"
    }

};


/* =========================================================
   COMPONENTE SEO
========================================================= */

export default function SEO({ pathname }) {

    const data =
        SEO_DATA[pathname] || SEO_DATA["/"];


    useEffect(() => {

        /* =====================================================
           TITLE
        ===================================================== */

        document.title = data.title;


        /* =====================================================
           META DESCRIPTION
        ===================================================== */

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

            document.head.appendChild(
                description
            );
        }

        description.setAttribute(
            "content",
            data.description
        );


        /* =====================================================
           META KEYWORDS
        ===================================================== */

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

            document.head.appendChild(
                keywords
            );
        }

        keywords.setAttribute(
            "content",
            data.keywords
        );


        /* =====================================================
           ROBOTS
        ===================================================== */

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

            document.head.appendChild(
                robots
            );
        }

        robots.setAttribute(
            "content",
            "index, follow"
        );


        /* =====================================================
           IDIOMA
        ===================================================== */

        document.documentElement.lang =
            "es-CO";


        /* =====================================================
           OPEN GRAPH
        ===================================================== */

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

                document.head.appendChild(
                    meta
                );
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

        setMeta(
            "og:site_name",
            "WebMaster Colombia"
        );


        /* =====================================================
           TWITTER / X
        ===================================================== */

        const setTwitter = (
            name,
            content
        ) => {

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

                document.head.appendChild(
                    meta
                );
            }

            meta.setAttribute(
                "content",
                content
            );
        };


        setTwitter(
            "twitter:card",
            "summary_large_image"
        );

        setTwitter(
            "twitter:title",
            data.title
        );

        setTwitter(
            "twitter:description",
            data.description
        );


    }, [data]);


    return null;
}