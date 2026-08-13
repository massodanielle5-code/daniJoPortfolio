import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-background"
        src={heroImage}
        alt=""
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            DÉVELOPPEUSE FULL STACK
          </span>

          <h1>
            Je développe des applications web modernes qui{" "}
            <span>créent de la valeur.</span>
          </h1>

          <p>
            J'aide les organisations à transformer leurs besoins
            en solutions digitales performantes, fiables et évolutives.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-button">
              Voir mes projets
            </a>

            <a
              href="/documents/CV-Danielle-Masso.pdf"
              className="hero-secondary-button"
              download
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;