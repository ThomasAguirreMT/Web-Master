import {

    MIN_DESCRIPTION,

    MIN_DOCUMENT,

    MIN_NAME,

    MIN_SUBJECT,

    MAX_PHONE_LENGTH

} from "./constants";

export function validateField(

    name,

    value

) {

    let error = "";

    switch (name) {

        case "nombre":

            if (!value.trim())

                error = "El nombre es obligatorio";

            else if (

                !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/

                    .test(value)

            )

                error = "Solo letras";

            else if (

                value.trim().length < MIN_NAME

            )

                error = `Mínimo ${MIN_NAME} caracteres`;

            break;

        case "documento":

            if (!value)

                error = "Documento obligatorio";

            else if (!/^\d+$/.test(value))

                error = "Solo números";

            else if (

                value.length < MIN_DOCUMENT

            )

                error = "Documento muy corto";

            break;

        case "correo":

            if (!value.trim())

                error = "Correo obligatorio";

            else if (

                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

                    .test(value)

            )

                error = "Correo inválido";

            break;

        case "telefono":

            if (!value)

                error = "Teléfono obligatorio";

            else if (

                !/^\d+$/.test(value)

            )

                error = "Solo números";

            else if (

                value.length !== MAX_PHONE_LENGTH

            )

                error = "Debe contener 10 dígitos";

            break;

        case "asunto":

            if (!value.trim())

                error = "Asunto obligatorio";

            else if (

                value.length < MIN_SUBJECT

            )

                error = "Muy corto";

            break;

        case "descripcion":

            if (!value.trim())

                error = "Descripción obligatoria";

            else if (

                value.length < MIN_DESCRIPTION

            )

                error = "Debe contener mínimo 20 caracteres";

            break;

        default:

            break;

        case "tipo":

            if (!value)

                error = "Seleccione un tipo";

            break;

        case "area":

            if (!value)

                error = "Seleccione una solicitud";

            break;

        case "motivo":

            if (!value)

                error = "Seleccione un motivo";

            break;

    }

    return error;

}


