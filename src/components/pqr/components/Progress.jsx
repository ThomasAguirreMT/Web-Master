export default function Progress({ step }) {

    return (

        <div className="pqr-steps">

            <div
                className={`pqr-step ${step >= 1 ? "active" : ""}`}
            />

            <div
                className={`pqr-step ${step >= 2 ? "active" : ""}`}
            />

            <div
                className={`pqr-step ${step >= 3 ? "active" : ""}`}
            />

        </div>

    );

}