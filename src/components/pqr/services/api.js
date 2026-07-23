const API = "https://thomas.webmastercolombia.net";

const request = async (endpoint, options = {}) => {

    const response = await fetch(`${API}${endpoint}`, options);

    if (!response.ok) {

        const error = await response.text();

        console.error(error);

        throw new Error(error);

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

export const enviarPQR = (form, file) => {

    const formData = new FormData();

    Object.keys(form).forEach((key) => {

        formData.append(key, form[key]);

    });

    if (file) {

        formData.append("archivo", file);

    }

    return request("/pqr", {

        method: "POST",

        body: formData

    });

};