export default function UploadFile({

    file,
    onChange,
    error = ""

}) {

    return (

        <div className="pqr-upload">

            <label className="pqr-label">

                Adjuntar EVIDENCIA


            </label>

            <input

                id="pqr-file"

                type="file"

                accept=".pdf"

                onChange={onChange}

                hidden

            />

            <label
                htmlFor="pqr-file"
                className="btn-upload"
            >
                Seleccionar archivo
            </label>

            {

                file && (

                    <div className="archivo-ok">

                        <strong>{file.name}</strong>

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

                Adjunte un único archivo PDF (máximo 10 MB). Si tiene varios documentos, únalos en un solo PDF antes de enviarlo.
                <br />

                Tamaño máximo permitido: 10 MB.

            </small>

        </div>

    );

}