import "./Skills.css";

function Skills(){
  const skillGroups = [
    {
      number: "01",
      title: "Backend",
      description: "Conception de la logique serveur et des API.",
      skills: ["Node.js", "Express"],
    },
    {
      number: "02",
      title: "Frontend",
      description: "Création d'interfaces modernes, responsives et accessibles.",
      skills: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      number: "03",
      title: "Base de données",
      description: "Gestion et structuration des données applicatives.",
      skills: ["PostgreSQL", "Supabase", "Prisma"],
    },
    {
      number: "04",
      title: "Outils & déploiement",
      description: "Développement, versionnement et mise en production.",
      skills: ["Render", "Uptime Robot", "Git", "GitHub"],
    },
    {
      number: "05",
      title: "Autres compétences",
      description: "Compétences transversales liées aux applications web.",
      skills: [
        "API REST",
        "Authentification",
        "Paiement mobile",
        "Responsive Design",
        "Interfaces modernes",
      ],
    },
  ];

  return (
    <section id="skills" className="main-container skills-section">
      <div className="section-content">

        {/* ===== TITRE ===== */}
        <div className="section-heading projects-heading">
          <span className="section-label">COMPÉTENCES</span>

          <h2>
            Des compétences au service de{" "}
            <span>solutions web complètes.</span>
          </h2>
        </div>

        {/* ===== GRILLE ===== */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>

              <div className="skill-card-header">
                <span className="skill-number">
                  {group.number}
                </span>

              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;