export default function TextArea({

    label,
    required=false,
    value,
    placeholder,
    onChange,
    error,
    touched,
    maxLength

}){

    return(

        <div className="pqr-field">

            {label && (

                <label>

                    {label}

                    {required && <span> *</span>}

                </label>

            )}

            <textarea

                value={value}

                placeholder={placeholder}

                onChange={onChange}

                maxLength={maxLength}

                className={
                    touched
                        ? error
                            ? "input-error"
                            : "input-success"
                        : ""
                }

            />

            {

                touched && error && (

                    <small className="error-text">

                        {error}

                    </small>

                )

            }

        </div>

    );

}