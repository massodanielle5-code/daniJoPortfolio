import "./Formation.css";

type FormationItem = {
  year: string;
  title: string;
  institution: string;
};

type FormationGroup = {
  number: string;
  title: string;
  items: FormationItem[];
};

const formationGroups: FormationGroup[] = [
  {
    number: "01",

    title: "Diplômes",

    items: [
      {
        year: "2018 — 2019",

        title: "Licence Professionnelle en Finance Comptabilité",

        institution: "SUPdeCo — Yaoundé, Cameroun",
      },

      {
        year: "2017 — 2018",

        title:
          "Brevet de Technicien Supérieur en Comptabilité et Gestion d'Entreprise",

        institution: "SUPdeCo — Yaoundé, Cameroun",
      },
    ],
  },

  {
    number: "02",

    title: "Certifications",

    items: [
      {
        year: "2026",

        title: "Développement Web Full Stack",

        institution: "University of London — Coursera",
      },

      {
        year: "2026",

        title: "Data-driven Websites",

        institution: "University of London — Coursera",
      },

      {
        year: "2026",

        title: "HTML",

        institution: "University of London — Coursera",
      },

      {
        year: "2026",

        title: "CSS",

        institution: "University of London — Coursera",
      },

      {
        year: "2025",

        title: "Introduction to Data Engineering",

        institution: "IBM — Coursera",
      },

      {
        year: "2025",

        title: "React Node MERN Stack",

        institution: "Udemy",
      },
    ],
  },
];

function Formation() {
  return (
    <section
      id="formation"
      className="main-container formation-section"
    >
      <div className="section-content">

        {/* ===== TITRE ===== */}

        <div className="section-heading projects-heading">
          <span className="section-label">
            FORMATION
          </span>

          <h2>
            Un parcours entre{" "}
            <span>
              finance, gestion et développement.
            </span>
          </h2>
        </div>

        {/* ===== PARCOURS ===== */}

        <div className="formation-grid">

          {formationGroups.map((group) => (
            <div
              className="formation-column"
              key={group.number}
            >

              {/* ===== TITRE DE COLONNE ===== */}

              <div className="formation-column-heading">

                <span className="formation-column-number">
                  {group.number}
                </span>

                <h3>
                  {group.title}
                </h3>

              </div>

              {/* ===== LISTE ===== */}

              <div className="formation-list">

                {group.items.map((item) => (
                  <article
                    className="formation-item"
                    key={`${item.year}-${item.title}`}
                  >

                    <span className="formation-year">
                      {item.year}
                    </span>

                    <div className="formation-details">

                      <h4>
                        {item.title}
                      </h4>

                      <p>
                        {item.institution}
                      </p>

                    </div>

                  </article>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Formation;