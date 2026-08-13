import "./Experience.css";

type Experience = {
  date: string;
  title: string;
  responsibilities: string[];
};

const experiences: Experience[] = [
  {
    date: "Janvier 2026 — Aujourd’hui",

    title: "Développeuse Full Stack — Freelance",

    responsibilities: [
      "Développement d'applications web accessibles, inclusives et responsives ainsi que de tableaux de bord.",
      "Création d'API et déploiement.",
      "Attribution de noms de domaine et configuration HTTPS.",
      "Hébergement et gestion de bases de données.",
    ],
  },

  {
    date: "Janvier 2023 — Aujourd’hui",

    title: "Contrôleur financier — APPTA",

    responsibilities: [
      "Élaboration et mise en oeuvre des systèmes financiers, planification financière, formation et gestion du personnel.",
    ],
  },

  {
    date: "Avril 2019 — Mars 2022",

    title: "Collaboratrice Comptable — Cabinet Simon POOCH",

    responsibilities: [
      "Saisie comptable, gestion des stocks et contrôle de caisse.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="main-container">
      <div className="section-content">

        {/* ===== TITRE ===== */}

        <div className="section-heading">
          <span className="section-label">
            Mon parcours
          </span>

          <h2>
            Une expérience construite entre{" "}
            <span>
              finance, gestion et développement logiciel.
            </span>
          </h2>
        </div>

        {/* ===== EXPÉRIENCES ===== */}

        <div className="experience-list">

          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={`${experience.date}-${experience.title}`}
            >

              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-details">

                <h3>
                  {experience.title}
                </h3>

                <ul>
                  {experience.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;