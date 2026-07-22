
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import UploadFile from "./UploadFile";

export default function StepTwo({

    form,
    set,
    tipos,
    solicitudes,
    motivos,
    handleTipo,
    handleSolicitud,
    errors,
    touched,

    file,
    setFile,
    fileError,
    setFileError,

    setStep

}) {



    const handleFile = (e) => {

        const archivo = e.target.files[0];

        if (!archivo) {

            setFile(null);

            return;

        }

        const permitidos = [

            "application/pdf",

            "image/png",

            "image/jpeg"

        ];

        if (!permitidos.includes(archivo.type)) {

            setFileError(

                "Solo se permiten archivos PDF, JPG o PNG."

            );

            setFile(null);

            return;

        }

        if (archivo.size > 10 * 1024 * 1024) {

            setFileError(

                "El archivo no puede superar los 10 MB."

            );

            setFile(null);

            return;

        }

        setFileError("");

        setFile(archivo);

    };

    return (

        <>

            <Select

                label="Tipo de PQR"

                required

                value={form.tipo}

                onChange={(e) =>

                    handleTipo(

                        e.target.value

                    )

                }

            >

                <option value="">

                    Seleccione...

                </option>

                {

                    tipos.map(tipo => (

                        <option

                            key={tipo.id}

                            value={tipo.id}

                        >

                            {tipo.nombre}

                        </option>

                    ))

                }

            </Select>

            <Select

                label="Solicitud"

                required

                value={form.area}

                onChange={(e) =>

                    handleSolicitud(

                        e.target.value

                    )

                }

            >

                <option value="">

                    Seleccione...

                </option>

                {

                    solicitudes.map(item => (

                        <option

                            key={item.id}

                            value={item.id}

                        >

                            {item.nombre}

                        </option>

                    ))

                }

            </Select>

            <Select

                label="Motivo"

                required

                value={form.motivo}

                onChange={(e) =>

                    set(

                        "motivo",

                        e.target.value

                    )

                }

            >

                <option value="">

                    Seleccione...

                </option>

                {

                    motivos.map(item => (

                        <option

                            key={item.id}

                            value={item.id}

                        >

                            {item.nombre}

                        </option>

                    ))

                }

            </Select>            <Input

                label="Asunto"

                required

                placeholder="Escriba el asunto"

                value={form.asunto}

                onChange={(e) =>

                    set(

                        "asunto",

                        e.target.value

                    )

                }

                error={errors.asunto}

                touched={touched.asunto}

            />

            <div className="pqr-counter">

                {form.asunto.length} / 100

            </div>

            <TextArea

                label="Descripción"

                required

                placeholder="Describa detalladamente su solicitud"

                value={form.descripcion}

                onChange={(e) =>

                    set(

                        "descripcion",

                        e.target.value

                    )

                }

                error={errors.descripcion}

                touched={touched.descripcion}

                maxLength={500}

            />

            <div className="pqr-counter">

                {form.descripcion.length} / 500

            </div>

            <UploadFile

                file={file}

                error={fileError}

                onChange={handleFile}

            />            <div className="pqr-actions">

                <button

                    className="pqr-secondary"

                    onClick={() =>

                        setStep(1)

                    }

                >

                    Atrás

                </button>

                <button

                    onClick={() =>

                        setStep(3)

                    }

                    disabled={

                        !form.tipo ||

                        !form.area ||

                        !form.motivo ||

                        errors.asunto ||

                        errors.descripcion ||

                        !form.asunto ||

                        !form.descripcion

                    }

                >

                    Continuar

                </button>

            </div>

        </>

    );

}