const API = "https://thomas.webmastercolombia.net";

const request = async (endpoint, options = {}) => {

    const response = await fetch(`${API}${endpoint}`, options);

    if (!response.ok) {

        throw new Error(`Error ${response.status}`);

    }

    return response.json();

};

export const getTipos = () =>

    request("/tipos-pqr");

export const getTiposIdentificacion = () =>

    request("/tipos-identificacion");

export const getSolicitudes = (idTipo) =>

    request(`/solicitudes/${idTipo}`);

export const getMotivos = (idSolicitud) =>

    request(`/motivos/${idSolicitud}`);

export const enviarPQR = (form) =>

    request("/pqr", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(form)


        
    });


