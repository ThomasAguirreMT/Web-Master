import Input from "./Input";
import Select from "./Select";

export default function StepOne({

    form,
    set,
    tiposId,
    errors,
    touched,
    setStep

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

                onChange={(e)=>

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

                onChange={(e)=>

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

                    tiposId.map((t)=>(

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

                onChange={(e)=>

                    set(

                        "documento",

                        e.target.value.replace(/\D/g,"")

                    )

                }

                error={errors.documento}

                touched={touched.documento}

            />

            <Input

                required

                type="email"

                placeholder="correo@ejemplo.com outlook o gmail "

                value={form.correo}

                onChange={(e)=>

                    set(

                        "correo",

                        e.target.value.trim()

                    )

                }

                error={errors.correo}

                touched={touched.correo}

            />

            <Input

              
                required

                placeholder="3001234567"

                value={form.telefono}

                inputMode="numeric"

                maxLength={10}

                onChange={(e)=>

                    set(

                        "telefono",

                        e.target.value.replace(/\D/g,"")

                    )

                }

                error={errors.telefono}

                touched={touched.telefono}

            />

            <div className="pqr-actions">

                <button

                    onClick={()=>setStep(2)}

                    disabled={!puedeContinuar}

                >

                    Continuar

                </button>

            </div>

        </>

    );

}