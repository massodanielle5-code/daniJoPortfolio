import { useState } from "react";
import "./Projects.css";
import video from "../../assets/videos/video-demo.mp4";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;

  status?: string;

  problem: {
    title: string;
    paragraphs: string[];
  };

  solution: {
    title: string;
    description: string;
  };

  features: string[];
  userExperience: string[];
  stack: string[];
  deployment: string;
  security: string[];

  impact: {
    title: string;
    paragraphs: string[];
  };

  demo?: {
    title: string;
    video: string;
  };

  applicationUrl?: string;
  githubUrl?: string;
};


const projects: Project[] = [

  /* ==================================================
     PROJET 01 — APPTA
  ================================================== */

  {
    number: "01",

    category: "APPLICATION WEB FULL STACK",

    title: "APPTA — Plateforme de gestion de rendez-vous",

    description:
      "Application web full stack conçue pour améliorer l'accès aux services d'une organisation et structurer ses activités.",

    problem: {
      title: "Des processus encore trop manuels",

      paragraphs: [
        "L'organisation gérait ses rendez-vous manuellement, ce qui entraînait des erreurs, un manque de suivi et une perte d'efficacité opérationnelle.",

        "Sans outil structuré, il était difficile de coordonner les activités, d'assurer un suivi fiable des patients et de faire évoluer les services.",
      ],
    },

    solution: {
      title: "Une plateforme centralisée",

      description:
        "Développement d'une plateforme complète permettant la réservation, le paiement et l'organisation automatisée des rendez-vous.",
    },

    features: [
      "Prise de rendez-vous avec gestion des créneaux",
      "Paiement mobile",
      "Notifications email automatiques",
      "Synchronisation Google Calendar",
      "Dashboard administrateur",
      "Gestion des statuts et des paiements",
    ],

    userExperience: [
      "Chatbot conversationnel",
      "Scroll spy dynamique",
      "Infinite scroll",
      "Bouton retour en haut avec progression",
    ],

    stack: [
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "REST API",
    ],

    deployment:
      "Application déployée avec Render et Supabase, avec surveillance de disponibilité via Uptime Robot et suivi des statistiques avec Google Analytics.",

    security: [
      "Validation des paiements avant confirmation du rendez-vous",

      "Mail de confirmation/annulation du rendez-vous envoyé automatiquement et événement enregistré/supprimé automatiquement du Google Calendar de l'administrateur",

      "Gestion des états : DRAFT, PENDING, VALIDATED",

      "Authentification et protection des données",
    ],

    impact: {
      title: "Une application réellement mise en production.",

      paragraphs: [
        "Mise en production d'une application complète avec logique métier complexe, gestion des rendez-vous et paiements et expérience utilisateur optimisée.",

        "Ce projet reflète ce que je veux construire : des solutions utiles, structurées et alignées avec les réalités des organisations et des utilisateurs.",
      ],
    },

    demo: {
      title: "Découvrez l'application en fonctionnement.",
      video: video,
    },

    applicationUrl: "https://appta-center.org",

    githubUrl:
      "https://github.com/massodanielle5-code/daniJoRepository1",
  },


  /* ==================================================
     PROJET 02 — PORTFOLIO
  ================================================== */

  {
    number: "02",

    category: "SINGLE PAGE APPLICATION — PORTFOLIO",

    title: "Masso Danielle — Portfolio professionnel",

    description:
      "Portfolio web conçu pour présenter mon parcours, mes compétences et mes projets de développement logiciel à travers une interface moderne, responsive et accessible.",

    problem: {
      title: "Présenter un parcours professionnel hybride",

      paragraphs: [
        "Mon parcours professionnel combine plusieurs années d'expérience en finance, comptabilité et gestion avec une transition vers le développement logiciel.",

        "L'enjeu était de présenter cette évolution de manière claire et cohérente tout en mettant en avant mes compétences techniques et mes réalisations concrètes.",
      ],
    },

    solution: {
      title: "Une interface personnelle structurée",

      description:
        "Conception et développement d'un portfolio responsive permettant de présenter mon parcours, mon expérience, mes compétences, ma formation et mes projets dans une interface cohérente et professionnelle.",
    },

    features: [
      "Navigation responsive",
      "Menu mobile avec gestion d'état",
      "Navigation fluide entre les sections",
      "Présentation détaillée des projets",
      "Sections Expérience, Compétences et Formation",
      "Section Contact et références professionnelles",
      "Bouton de retour en haut",
      "CTA de contact via WhatsApp",
    ],

    userExperience: [
      "Smooth scroll entre les sections",
      "Fermeture du menu mobile au clic extérieur",
      "Retour automatique au Hero après actualisation",
      "Animations d'apparition du Hero",
      "Interface adaptée aux écrans desktop, tablette et mobile",
      "Respect du principe de réduction des animations",
    ],

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],

    deployment:
      "Portfolio déployé sur Netlify avec une interface responsive adaptée aux différents formats d'écran.",

    security: [
      'Utilisation de liens externes avec rel="noopener noreferrer"',

      "Navigation accessible au clavier",

      "Utilisation de boutons et liens adaptés à leur fonction",

      "Prise en compte de prefers-reduced-motion pour les animations",
    ],

    impact: {
      title:
        "Un projet qui reflète ma transition vers le développement logiciel.",

      paragraphs: [
        "Ce portfolio constitue lui-même un projet de développement permettant de mettre en pratique React, TypeScript, responsive design, gestion d'état et conception d'interfaces modernes.",

        "Il présente également la complémentarité entre mon expérience en finance-comptabilité et mon orientation actuelle vers la conception de solutions logicielles.",
      ],
    },

    applicationUrl:
      "https://massodanielle-portfolio.netlify.app",

    githubUrl:
      "https://github.com/massodanielle5-code/daniJoPortfolio",
  },


  /* ==================================================
     PROJET 03 — ODOO
  ================================================== */

  {
    number: "03",

    category: "ERP & TRANSFORMATION DIGITALE",

    title:
      "Odoo — Digitalisation et gestion intégrée d'une activité commerciale",

    description:
      "Projet de mise en place et de paramétrage d'un environnement Odoo pour centraliser les achats, les ventes, les stocks, la facturation et les paiements d'une activité commerciale.",

    status: "EN COURS DE DÉVELOPPEMENT",

    problem: {
      title: "Des processus commerciaux à centraliser",

      paragraphs: [
        "L'objectif est de structurer les opérations d'une épicerie au sein d'un même environnement afin de mieux suivre les achats, les ventes, les stocks, les factures et les paiements.",

        "Le projet permet également de relier les opérations commerciales aux processus de gestion et de comptabilité afin d'obtenir une meilleure visibilité sur l'activité.",
      ],
    },

    solution: {
      title: "Une gestion intégrée avec Odoo",

      description:
        "Mise en place et paramétrage d'Odoo 19 Community pour modéliser les principaux processus commerciaux, depuis les achats et la réception des produits jusqu'à la vente, la facturation et le règlement.",
    },

    features: [
      "Création et gestion des fournisseurs",
      "Création des produits et configuration des catégories",
      "Demandes de prix et bons de commande",
      "Validation et réception des commandes",
      "Gestion des livraisons et des réceptions partielles",
      "Suivi du stock disponible et prévisionnel",
      "Facturation des achats",
      "Gestion des paiements",
      "Suivi des opérations de caisse, banque et chèques",
    ],

    userExperience: [
      "Gestion de plusieurs utilisateurs",
      "Attribution des rôles et des droits d'accès",
      "Centralisation des opérations commerciales",
      "Suivi de l'état des commandes et des livraisons",
      "Suivi du stock prévisionnel",
      "Organisation des processus d'achat, de vente et de paiement",
    ],

    stack: [
      "Odoo 19 Community",
      "Python",
      "JavaScript",
      "XML",
      "OWL",
      "Odoo ORM",
      "PostgreSQL 18",
      "Achats",
      "Ventes",
      "Inventaire",
      "Facturation",
      "Comptabilité",
    ],

    deployment:
      "Projet actuellement en cours de développement, de configuration et de paramétrage dans un environnement Odoo 19 Community avec PostgreSQL 18.",

    security: [
      "Gestion de plusieurs utilisateurs",

      "Configuration des rôles et des droits d'accès",

      "Organisation des accès selon les responsabilités",

      "Structuration des données et des processus métier",

      "Utilisation du système de permissions d'Odoo pour contrôler l'accès aux fonctionnalités",
    ],

    impact: {
      title:
        "Un projet orienté processus métier et transformation digitale.",

      paragraphs: [
        "Ce projet permet de mettre en pratique la compréhension des processus d'entreprise et leur traduction dans un système ERP intégré.",

        "Il complète mon profil de développeuse en valorisant également mon expérience en finance, comptabilité et gestion des entreprises.",

        "Le projet est actuellement en cours de développement et sera progressivement enrichi avec les configurations et personnalisations nécessaires.",
      ],
    },
  },
];


function Projects() {

  const [openProject, setOpenProject] = useState<string | null>(null);


  const toggleProject = (projectNumber: string) => {

    setOpenProject((current) =>
      current === projectNumber
        ? null
        : projectNumber,
    );
  };


  return (
    <section
      id="projects"
      className="main-container projects-section"
    >

      <div className="section-content">

        {/* ===== TITRE DE SECTION ===== */}

        <div className="section-heading projects-heading">

          <span className="section-label">
            MES PROJETS
          </span>

          <h2>
            Des applications conçues pour{" "}
            <span>
              répondre à des besoins réels.
            </span>
          </h2>

        </div>


        {/* ===== PROJETS ===== */}

        {projects.map((project) => {

          const isOpen =
            openProject === project.number;


          return (

            <article
              className={`project-card ${
                isOpen ? "open" : ""
              }`}
              key={project.number}
            >

              {/* ===== EN-TÊTE CLIQUABLE ===== */}

              <button
                type="button"
                className="project-toggle"
                onClick={() =>
                  toggleProject(project.number)
                }
                aria-expanded={isOpen}
                aria-controls={`project-content-${project.number}`}
              >

                <div className="project-hero">

                  <div className="project-number">
                    {project.number}
                  </div>


                  <div className="project-summary">

                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    {project.status && (
                      <span className="project-status">
                        {project.status}
                      </span>
                    )}

                  </div>


                  <span className="toggle-icon">
                    {isOpen ? "−" : "+"}
                  </span>

                </div>

              </button>


              {/* ===== CONTENU DU PROJET ===== */}

              <div
                id={`project-content-${project.number}`}
                className={`project-content ${
                  isOpen ? "visible" : ""
                }`}
              >

                {/* ===== LIENS ===== */}

                {(project.applicationUrl ||
                  project.githubUrl) && (

                  <div className="project-links">

                    {project.applicationUrl && (
                      <a
                        href={project.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Voir l'application
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        Voir le code GitHub
                      </a>
                    )}

                  </div>
                )}


                {/* ===== PROBLÈME / SOLUTION ===== */}

                <div className="project-grid">

                  <div className="project-section">

                    <span className="project-section-label">
                      I — PROBLÈME
                    </span>

                    <h4>
                      {project.problem.title}
                    </h4>

                    {project.problem.paragraphs.map(
                      (paragraph) => (
                        <p key={paragraph}>
                          {paragraph}
                        </p>
                      )
                    )}

                  </div>


                  <div className="project-section">

                    <span className="project-section-label">
                      II — SOLUTION
                    </span>

                    <h4>
                      {project.solution.title}
                    </h4>

                    <p>
                      {project.solution.description}
                    </p>

                  </div>

                </div>


                {/* ===== FONCTIONNALITÉS ===== */}

                <div className="project-section">

                  <span className="project-section-label">
                    III — FONCTIONNALITÉS
                  </span>

                  <div className="feature-grid">

                    {project.features.map(
                      (feature, index) => (

                        <div
                          className="feature-item"
                          key={feature}
                        >

                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p>
                            {feature}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* ===== EXPÉRIENCE UTILISATEUR ===== */}

                <div className="project-section">

                  <span className="project-section-label">
                    IV — EXPÉRIENCE UTILISATEUR
                  </span>

                  <div className="feature-grid">

                    {project.userExperience.map(
                      (feature, index) => (

                        <div
                          className="feature-item"
                          key={feature}
                        >

                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p>
                            {feature}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* ===== STACK ===== */}

                <div className="project-section">

                  <span className="project-section-label">
                    V — STACK TECHNIQUE
                  </span>

                  <div className="tech-stack">

                    {project.stack.map(
                      (technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>

                </div>


                {/* ===== DÉPLOIEMENT ===== */}

                <div className="project-section">

                  <span className="project-section-label">
                    VI — DÉPLOIEMENT / ÉTAT
                  </span>

                  <p>
                    {project.deployment}
                  </p>

                </div>


                {/* ===== SÉCURITÉ ===== */}

                <div className="project-section">

                  <span className="project-section-label">
                    VII — SÉCURITÉ & LOGIQUE MÉTIER
                  </span>

                  <ul className="project-list">

                    {project.security.map(
                      (item) => (

                        <li key={item}>
                          {item}
                        </li>

                      )
                    )}

                  </ul>

                </div>


                {/* ===== IMPACT ===== */}

                <div className="project-impact">

                  <span className="project-section-label">
                    VIII — IMPACT
                  </span>

                  <h4>
                    {project.impact.title}
                  </h4>

                  {project.impact.paragraphs.map(
                    (paragraph) => (

                      <p key={paragraph}>
                        {paragraph}
                      </p>

                    )
                  )}

                </div>


                {/* ===== DÉMO ===== */}

                {project.demo && (

                  <div className="project-demo">

                    <div className="project-demo-heading">

                      <span className="project-section-label">
                        IX — DÉMO
                      </span>

                      <h4>
                        {project.demo.title}
                      </h4>

                    </div>

                    <video
                      className="video-demo"
                      controls
                      preload="metadata"
                    >

                      <source
                        src={project.demo.video}
                        type="video/mp4"
                      />

                      Votre navigateur ne supporte pas
                      la lecture de cette vidéo.

                    </video>

                  </div>

                )}

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}


export default Projects;