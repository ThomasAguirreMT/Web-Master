export default function Select({

    label,
    required = false,
    value,
    onChange,
    children,
    error,
    touched

}){

    return(

        <div className="pqr-field">

            {label && (

                <label>

                    {label}

                    {required && <span> *</span>}

                </label>

            )}

            <select

                value={value}

                onChange={onChange}

                className={
                    touched
                        ? error
                            ? "input-error"
                            : "input-success"
                        : ""
                }

            >

                {children}

            </select>

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