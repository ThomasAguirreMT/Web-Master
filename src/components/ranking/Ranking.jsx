import "./Ranking.css";

export default function RankingSection() {

  const handleRedirect = () => {
    window.open("https://bgp.tools/rankings/CO?sort=peering", "_blank");
  };

  return (
    <section className="ranking">

      <div className="ranking-left">
        <h2>
          ESTAMOS EN EL <span>QUINTO</span><br />
          PUESTO DEL <span>RANKING</span><br />
          DE CONEXIONES EN<br />
          <span>COLOMBIA</span>
        </h2>
      </div>

      <div className="ranking-right">
        <div className="ranking-shape">

          <div className="ranking-content">

            <div className="ranking-number">
              <h1>5</h1>
              <span>PUESTO</span>
            </div>

            <div className="ranking-divider" />

            <div className="ranking-text">
              <h3>RANKING</h3>
              <h3 className="outline">NACIONAL</h3>

              <button 
                className="ranking-btn"
                onClick={handleRedirect}
              >
                <span className="btn-icon">→</span>
               VER MÁS
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}