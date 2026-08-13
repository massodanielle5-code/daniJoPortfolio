import "./About.css";

function About() {
  return (
    <section id="about" className="main-container">
      <div className="section-content">

        <div className="section-heading">
          <span className="section-label">À PROPOS DE MOI</span>

          <h2>
            Une expérience en finance et gestion d'entreprise au service du
            <span> développement logiciel</span>
          </h2>
        </div>

        <div className="about-text">
          <p>
            <strong>
              Je suis Danielle Masso, développeuse full stack avec un parcours
              en finance-comptabilité et gestion des entreprises.
            </strong>
          </p>

          <p>
            J’ai travaillé au cœur des opérations financières, là où les
            entreprises font face à des problèmes concrets : organisation,
            suivi des activités, gestion manuelle et manque d’outils adaptés.
          </p>

          <p>
            C’est cette réalité qui m’a poussée vers le développement web.
            Aujourd’hui, je conçois des applications qui transforment ces
            contraintes en solutions digitales : automatisation, gestion
            intelligente et amélioration de l’expérience utilisateur.
          </p>

          <p>
            Mon objectif est simple :{" "}
            <strong>
              créer des outils utiles, structurés et pensés pour durer.
            </strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;