import Input from "./Input";
import Select from "./Select";

export default function StepOne({

    form,
    set,
    tiposId,
    errors,
    touched,
    setStep,

    mensajeCodigo,

    codigo,
    setCodigo,


    correoVerificado

}) {

    const puedeContinuar =

        form.nombre &&
        form.tipo_identificacion &&
        form.documento &&
        form.correo &&
        form.telefono &&

        !errors.nombre &&
        !errors.tipo_identificacion &&
        !errors.documento &&
        !errors.correo &&
        !errors.telefono;

    return (

        <>

            <Input

                required

                placeholder="Nombre completo"

                value={form.nombre}

                onChange={(e) =>

                    set(

                        "nombre",

                        e.target.value.replace(

                            /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,

                            ""

                        )

                    )

                }

                error={errors.nombre}

                touched={touched.nombre}

            />

            <Select

                required

                value={form.tipo_identificacion}

                onChange={(e) =>

                    set(

                        "tipo_identificacion",

                        e.target.value

                    )

                }

                error={errors.tipo_identificacion}

                touched={touched.tipo_identificacion}

            >

                <option value="">

                    Seleccione...

                </option>

                {

                    tiposId.map((t) => (

                        <option

                            key={t.id_tipo_identificacion}

                            value={t.id_tipo_identificacion}

                        >

                            {t.tipo_identificacion}

                        </option>

                    ))

                }

            </Select>

            <Input

                required

                placeholder="Número de documento"

                value={form.documento}

                inputMode="numeric"

                onChange={(e) =>

                    set(

                        "documento",

                        e.target.value.replace(/\D/g, "")

                    )

                }

                error={errors.documento}

                touched={touched.documento}

            />

            {/*==========================================
                INFORMACIÓN
            ==========================================*/}

            {

                !mensajeCodigo && !correoVerificado && (

                    <div className="correo-info">

                        <h4>

                             Verifica tu correo electrónico

                        </h4>

                        <p>

                            Ingresa tu correo electrónico y

                            enviaremos automáticamente un código de verificación para poder continuar con tu solicitud.

                        </p>

                    </div>

                )

            }

            <Input

                required

                type="email"

                placeholder="correo@ejemplo.com"

                value={form.correo}

                onChange={(e) =>

                    set(

                        "correo",

                        e.target.value.trim()

                    )

                }

              

                error={errors.correo}

                touched={touched.correo}

            />

            {/*==========================================
                ESTADO VERIFICACIÓN
            ==========================================*/}

            <div className="correo-verificacion">

                {

                    mensajeCodigo && !correoVerificado && (

                        <div className="correo-info enviado">

                            <h4>

                                Código enviado

                            </h4>

                            <p>

                                Revisa tu correo electrónico e ingresa el código de 6 dígitos.

                            </p>

                        </div>

                    )

                }

                {

                    correoVerificado && (

                        <div className="correo-ok">

                            <strong>

                                Correo verificado

                            </strong>

                            <small>

                                Ya puedes continuar con tu solicitud.

                            </small>

                        </div>

                    )

                }

            </div>

            {

                mensajeCodigo && !correoVerificado && (

                    <Input

                        placeholder="Código de verificación"

                        value={codigo}

                        inputMode="numeric"

                        maxLength={6}

                        onChange={(e) =>

                            setCodigo(

                                e.target.value.replace(/\D/g, "")

                            )

                        }

                    />

                )

            }

            <Input

                required

                placeholder="3001234567"

                value={form.telefono}

                inputMode="numeric"

                maxLength={10}

                onChange={(e) =>

                    set(

                        "telefono",

                        e.target.value.replace(/\D/g, "")

                    )

                }

                error={errors.telefono}

                touched={touched.telefono}

            />

            <div className="pqr-actions">

                <button

                    onClick={() => setStep(2)}

                    disabled={

                        !puedeContinuar ||

                        !correoVerificado

                    }

                >

                    Continuar

                </button>

            </div>

        </>

    );

}