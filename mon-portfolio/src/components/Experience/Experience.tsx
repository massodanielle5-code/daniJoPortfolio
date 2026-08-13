import "./Experience.css";

function Experience(){
  return (
    <section id="experience" className="main-container">
      <div className="section-content">

        <div className="section-heading">
          <span className="section-label">Mon parcours</span>

          <h2>
            Une expérience construite entre{" "}
            <span>finance, gestion et développement logiciel.</span>
          </h2>
        </div>

        <div className="experience-list">

          <article className="experience-item">
            <div className="experience-date">
              Janvier 2026 — Aujourd’hui
            </div>

            <div className="experience-details">
              <h3>Développeuse Full Stack — Freelance</h3>

              <ul>
                <li>
                  Développement d'applications web accessibles,
                  inclusives et responsives <br/>ainsi que de tableaux de bord.
                </li>
                <li>Création d'API et déploiement.</li>
                <li>Attribution de noms de domaine et configuration HTTPS.</li>
                <li>Hébergement et gestion de bases de données.</li>
              </ul>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-date">
              Janvier 2023 — Aujourd’hui
            </div>

            <div className="experience-details">
              <h3>Contrôleur financier — APPTA</h3>

              <ul>
                <li>
                  Élaboration et mise en oeuvre des systèmes financiers, planification financière,
                  formation et gestion du personnel.
                </li>
              </ul>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-date">
              Avril 2019 — Mars 2022
            </div>

            <div className="experience-details">
              <h3>Collaboratrice Comptable — Cabinet Simon POOCH</h3>

              <ul>
                <li>
                  Saisie comptable, gestion des stocks et contrôle de caisse.
                </li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Experience;