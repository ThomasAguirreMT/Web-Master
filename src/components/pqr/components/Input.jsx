export default function Input({

    label,
    required = false,
    type = "text",
    value,
    placeholder,
    onChange,
    error,
    touched,
    maxLength,
    inputMode,
    className = ""

}) {

    return (

        <div className="pqr-field">

            {label && (

                <label>

                    {label}

                    {required && <span> *</span>}

                </label>

            )}

            <input

                type={type}

                value={value}

                placeholder={placeholder}

                onChange={onChange}

                maxLength={maxLength}

                inputMode={inputMode}

                className={[
                    className,
                    touched
                        ? error
                            ? "input-error"
                            : "input-success"
                        : ""
                ].join(" ")}

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