import { useState } from "react";
import "./Projects.css";
import video from "../../assets/videos/video-demo.mp4";

function Projects(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="main-container projects-section">
      <div className="section-content">

        {/* ===== TITRE DE SECTION ===== */}
        <div className="section-heading projects-heading">
          <span className="section-label">MES PROJETS</span>

          <h2>
            Des applications conçues pour{" "}
            <span>répondre à des besoins réels.</span>
          </h2>
        </div>

        {/* ===== PROJET APPTA ===== */}
        <article className={`project-card ${isOpen ? "open" : ""}`}>

          {/* EN-TÊTE CLIQUABLE */}
          <button
            type="button"
            className="project-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <div className="project-hero">

              <div className="project-number">
                01
              </div>

              <div className="project-summary">
                <span className="project-category">
                  APPLICATION WEB FULL STACK
                </span>

                <h3>
                  APPTA — Plateforme de gestion de rendez-vous
                </h3>

                <p>
                  Application web full stack conçue pour améliorer
                  l'accès aux services d'une organisation et
                  structurer ses activités.
                </p>
              </div>

              <span className="toggle-icon">
                {isOpen ? "−" : "+"}
              </span>

            </div>
          </button>

          {/* ===== CONTENU DU PROJET ===== */}
          <div className={`project-content ${isOpen ? "visible" : ""}`}>

            {/* LIENS */}
            <div className="project-links">

              <a
                href="https://appta-center.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir l'application
              </a>

              <a
                href="https://github.com/massodanielle5-code/daniJoRepository1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Voir le code GitHub
              </a>

            </div>

            {/* PROBLÈME / SOLUTION */}
            <div className="project-grid">

              <div className="project-section">
                <span className="project-section-label">
                  I — PROBLÈME
                </span>

                <h4>
                  Des processus encore trop manuels
                </h4>

                <p>
                  L'organisation gérait ses rendez-vous manuellement,
                  ce qui entraînait des erreurs, un manque de suivi
                  et une perte d'efficacité opérationnelle.
                </p>

                <p>
                  Sans outil structuré, il était difficile de
                  coordonner les activités, d'assurer un suivi fiable
                  des patients et de faire évoluer les services.
                </p>
              </div>

              <div className="project-section">
                <span className="project-section-label">
                  II — SOLUTION
                </span>

                <h4>
                  Une plateforme centralisée
                </h4>

                <p>
                  Développement d'une plateforme complète permettant
                  la réservation, le paiement et l'organisation
                  automatisée des rendez-vous.
                </p>
              </div>

            </div>

            {/* FONCTIONNALITÉS */}
            <div className="project-section">
              <span className="project-section-label">
                III — FONCTIONNALITÉS
              </span>

              <div className="feature-grid">

                <div className="feature-item">
                  <span>01</span>
                  <p>Prise de rendez-vous avec gestion des créneaux</p>
                </div>

                <div className="feature-item">
                  <span>02</span>
                  <p>Paiement mobile</p>
                </div>

                <div className="feature-item">
                  <span>03</span>
                  <p>Notifications email automatiques</p>
                </div>

                <div className="feature-item">
                  <span>04</span>
                  <p>Synchronisation Google Calendar</p>
                </div>

                <div className="feature-item">
                  <span>05</span>
                  <p>Dashboard administrateur</p>
                </div>

                <div className="feature-item">
                  <span>06</span>
                  <p>Gestion des statuts et des paiements</p>
                </div>

              </div>
            </div>

            {/* EXPÉRIENCE UTILISATEUR */}
            <div className="project-section">
              <span className="project-section-label">
                IV — EXPÉRIENCE UTILISATEUR
              </span>

              <div className="feature-grid">

                <div className="feature-item">
                  <span>01</span>
                  <p>Chatbot conversationnel</p>
                </div>

                <div className="feature-item">
                  <span>02</span>
                  <p>Scroll spy dynamique</p>
                </div>

                <div className="feature-item">
                  <span>02</span>
                  <p>Infinite scroll</p>
                </div>

                <div className="feature-item">
                  <span>03</span>
                  <p>Bouton retour en haut avec progression</p>
                </div>

              </div>
            </div>

            {/* STACK */}
            <div className="project-section">
              <span className="project-section-label">
                V — STACK TECHNIQUE
              </span>

              <div className="tech-stack">

                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
                <span>Supabase</span>
                <span>REST API</span>

              </div>
            </div>

            {/* DÉPLOIEMENT */}
            <div className="project-section">
              <span className="project-section-label">
                VI — DÉPLOIEMENT
              </span>

              <p>
                Application déployée avec Render et Supabase,
                avec surveillance de disponibilité via Uptime Robot
                et suivi des statistiques avec Google Analytics.
              </p>
            </div>

            {/* SÉCURITÉ */}
            <div className="project-section">
              <span className="project-section-label">
                VII — SÉCURITÉ & LOGIQUE MÉTIER
              </span>

              <ul className="project-list">

                <li>
                  Validation des paiements avant confirmation du
                  rendez-vous
                </li>

                <li>
                  Mail de confirmation/annulation du rendez-vous envoyé automatiquement et évènement enregistré/supprimé automatiquement du Google Calendar de l'administrateur 
                </li>

                <li>
                  Gestion des états : DRAFT, PENDING, VALIDATED
                </li>

                <li>
                  Authentification et protection des données
                </li>

              </ul>
            </div>

            {/* IMPACT */}
            <div className="project-impact">

              <span className="project-section-label">
                VIII — IMPACT
              </span>

              <h4>
                Une application réellement mise en production.
              </h4>

              <p>
                Mise en production d'une application complète avec
                logique métier complexe, gestion des rendez-vous et paiements et
                expérience utilisateur optimisée.
              </p>

              <p>
                Ce projet reflète ce que je veux construire :
                des solutions utiles, structurées et alignées avec
                les réalités des organisations et des utilisateurs.
              </p>

            </div>

            {/* DÉMO */}
            <div className="project-demo">

              <div className="project-demo-heading">
                <span className="project-section-label">
                  IX — DÉMO
                </span>

                <h4>
                  Découvrez l'application en fonctionnement.
                </h4>
              </div>

              <video
                className="video-demo"
                controls
                preload="metadata"
              >
                <source
                  src={video}
                />

                Votre navigateur ne supporte pas la lecture de
                cette vidéo.
              </video>

            </div>

          </div>
        </article>

      </div>
    </section>
  );
};

export default Projects;