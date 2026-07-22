export default function StepThree({

    form,

    tipos,

    solicitudes,

    motivos,

    tiposId,

    getNombre,

    getTipoIdNombre,

    submit,

    loading,

    setStep

}){

    return(

        <>

            <div className="pqr-resume">

                <p><b>Nombre:</b> {form.nombre}</p>

                <p>

                    <b>Tipo identificación:</b>

                    {getTipoIdNombre(

                        form.tipo_identificacion

                    )}

                </p>

                <p>

                    <b>Documento:</b>

                    {form.documento}

                </p>

                <p>

                    <b>Correo:</b>

                    {form.correo}

                </p>

                <p>

                    <b>Teléfono:</b>

                    {form.telefono}

                </p>

                <p>

                    <b>Tipo:</b>

                    {getNombre(

                        tipos,

                        form.tipo

                    )}

                </p>

                <p>

                    <b>Solicitud:</b>

                    {getNombre(

                        solicitudes,

                        form.area

                    )}

                </p>

                <p>

                    <b>Motivo:</b>

                    {getNombre(

                        motivos,

                        form.motivo

                    )}

                </p>

                <p>

                    <b>Asunto:</b>

                    {form.asunto}

                </p>

            </div>

            <div className="pqr-actions">

                <button

                    className="pqr-secondary"

                    onClick={()=>setStep(2)}

                >

                    Atrás

                </button>

                <button

                    onClick={submit}

                    disabled={loading}

                >

                    {

                        loading

                        ?

                        "Enviando..."

                        :

                        "Enviar"

                    }

                </button>

            </div>

        </>

    );

}