export default function UploadFile({

    file,
    onChange,
    error = ""

}) {

    return (

        <div className="pqr-upload">

            <label className="pqr-label">

                Adjuntar soporte
                <span> (Opcional)</span>

            </label>

            <input

                id="pqr-file"

                type="file"

                accept=".pdf,.jpg,.jpeg,.png"

                onChange={onChange}

                hidden

            />

            <label

                htmlFor="pqr-file"

                className="btn-upload"

            >

                📎 Seleccionar archivo

            </label>

            {

                file && (

                    <div className="archivo-ok">

                        <strong>Archivo:</strong>

                        <br />

                        {file.name}

                        <br />

                        <small>

                            {(file.size / 1024 / 1024).toFixed(2)} MB

                        </small>

                    </div>

                )

            }

            {

                error && (

                    <small className="error-text">

                        {error}

                    </small>

                )

            }

            <small className="upload-info">

                Formatos permitidos: PDF, JPG, JPEG y PNG.

                <br />

                Tamaño máximo permitido: 10 MB.

            </small>

        </div>

    );

}