export default function Success({ radicado }) {

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
                En los próximos minutos recibirás un correo electrónico
                con la confirmación, Si no lo recibes, por favor revisa tu bandeja de correo no deseado(SPAM).

            </p>

       <p>

        <br
        
        ></br>
           
       </p>

       <p>Conserve este número de radicado para realizar consultas sobre el estado de su solicitud.</p>

        </div>

    );

}