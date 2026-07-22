export default function Success({

    radicado

}) {

    return (

        <div className="pqr-success">

            <h3>

                Solicitud enviada correctamente

            </h3>

            <p>

                Tu número de radicado es:

            </p>

            <div className="pqr-radicado">

                {radicado}

            </div>

            <p>

                En los próximos minutos
                recibirás un correo electrónico
                con la confirmación.

            </p>

        </div>

    );
    <button

        onClick={() => window.location.reload()}

    >

        Nueva solicitud

    </button>

}