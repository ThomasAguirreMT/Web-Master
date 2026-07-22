export const getNombre = (lista, id) => {

    return lista.find(item => item.id == id)?.nombre || "";

};

export const getTipoIdNombre = (lista, id) => {

    return (

        lista.find(

            item =>

                item.id_tipo_identificacion == id

        )?.tipo_identificacion || ""

    );

};

export const limpiarNumeros = (texto) =>

    texto.replace(/\D/g, "");

export const limpiarNombre = (texto) =>

    texto.replace(

        /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,

        ""

    );