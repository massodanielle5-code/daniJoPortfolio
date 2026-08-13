import "./Formation.css";

const Formation = () => {
  return (
    <section id="formation" className="main-container formation-section">
      <div className="section-content">

        {/* ===== TITRE ===== */}
        <div className="section-heading projects-heading">
          <span className="section-label">FORMATION</span>

          <h2>
            Un parcours entre{" "}
            <span>finance, gestion et développement.</span>
          </h2>
        </div>

        {/* ===== PARCOURS ===== */}
        <div className="formation-grid">

          {/* ================================
              DIPLÔMES
          ================================= */}

          <div className="formation-column">

            <div className="formation-column-heading">
              <span className="formation-column-number">
                01
              </span>

              <h3>Diplômes</h3>
            </div>

            <div className="formation-list">

              <article className="formation-item">

                <span className="formation-year">
                  2018 — 2019
                </span>

                <div className="formation-details">

                  <h4>
                    Licence Professionnelle en
                    Finance Comptabilité
                  </h4>

                  <p>
                    SUPdeCo — Yaoundé, Cameroun
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2017 — 2018
                </span>

                <div className="formation-details">

                  <h4>
                    Brevet de Technicien Supérieur
                    en Comptabilité et Gestion
                    d'Entreprise
                  </h4>

                  <p>
                    SUPdeCo — Yaoundé, Cameroun
                  </p>

                </div>

              </article>

            </div>

          </div>


          {/* ================================
              CERTIFICATIONS
          ================================= */}

          <div className="formation-column">

            <div className="formation-column-heading">
              <span className="formation-column-number">
                02
              </span>

              <h3>Certifications</h3>
            </div>

            <div className="formation-list">

              <article className="formation-item">

                <span className="formation-year">
                  2026
                </span>

                <div className="formation-details">

                  <h4>
                    Développement Web Full Stack
                  </h4>

                  <p>
                    University of London — Coursera
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2026
                </span>

                <div className="formation-details">

                  <h4>
                    Data-driven Websites
                  </h4>

                  <p>
                    University of London — Coursera
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2026
                </span>

                <div className="formation-details">

                  <h4>
                    HTML
                  </h4>

                  <p>
                    University of London — Coursera
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2026
                </span>

                <div className="formation-details">

                  <h4>
                    CSS
                  </h4>

                  <p>
                    University of London — Coursera
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2025
                </span>

                <div className="formation-details">

                  <h4>
                    Introduction to Data Engineering
                  </h4>

                  <p>
                    IBM — Coursera
                  </p>

                </div>

              </article>


              <article className="formation-item">

                <span className="formation-year">
                  2025
                </span>

                <div className="formation-details">

                  <h4>
                    React Node MERN Stack
                  </h4>

                  <p>
                    Udemy
                  </p>

                </div>

              </article>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Formation;