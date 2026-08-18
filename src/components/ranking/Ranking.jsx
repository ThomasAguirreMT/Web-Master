import "./Ranking.css";

export default function RankingSection() {

  const handleRedirect = () => {
    window.open(
      "https://bgp.tools/rankings/CO?sort=peering",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="ranking">

      <div className="ranking-left">


        <h2>
          ESTAMOS EN EL <strong>QUINTO</strong>
          <br />
          PUESTO DEL <strong>RANKING</strong>
          <br />
          DE CONEXIONES EN
          <br />
          <strong>COLOMBIA</strong>
        </h2>

        <p>
          Una red diseñada para ofrecer conectividad de alto rendimiento,
          estabilidad y excelentes interconexiones.
        </p>

      </div>

      <div className="ranking-right">

        <div className="ranking-shape">

          <div className="ranking-content">

            <div className="ranking-number">

              <h1>5</h1>

              <span>PUESTO</span>

            </div>

            <div className="ranking-divider"></div>

            <div className="ranking-text">

              <h3>RANKING</h3>

              <h3 className="outline">
                NACIONAL
              </h3>

              <button
                className="ranking-btn"
                onClick={handleRedirect}
              >

                <span className="btn-icon">
                  →
                </span>

                <span>
                  VER RANKING
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}