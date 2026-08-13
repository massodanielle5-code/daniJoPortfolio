import "./Contact.css";

function Contact () {
  return (
    <section id="contact" className="main-container contact-section">
      <div className="section-content">
        {/* ================================
            TITRE
        ================================= */}

        <div className="section-heading projects-heading">
          <span className="section-label">CONTACT</span>

          <h2>
            Construisons quelque chose d' <span>utile ensemble.</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* ================================
              CONTACT
          ================================= */}

          <div className="contact-block">
            <div className="contact-introduction">
              <h3>Parlons de votre projet.</h3>

              <p>
                Vous avez un projet web, un besoin de digitalisation ou
                simplement envie d'échanger sur une idée ? Je serais ravie d'en
                discuter avec vous.
              </p>
            </div>

            <div className="contact-list">
              <a
                href="mailto:massodanielle5@gmail.com"
                className="contact-item"
              >
                <span className="contact-icon">@</span>

                <span>
                  <small>Email</small>
                  massodanielle5@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/237651104953"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item contact-whatsapp"
              >
                <span className="contact-icon">↗</span>

                <span>
                  <small>WhatsApp</small>
                  Discuter sur WhatsApp
                </span>
              </a>

              <div className="contact-item">
                <span className="contact-icon">+</span>

                <span>
                  <small>Téléphone</small>
                  +237 675 878 031
                </span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">◉</span>

                <span>
                  <small>Localisation</small>
                  Yaoundé, Cameroun
                </span>
              </div>
            </div>

            {/* RÉSEAUX */}

            <div className="contact-socials">
              <a
                href="https://github.com/massodanielle5-code"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/danielle-masso-8abbb6346"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* ================================
    RÉFÉRENCES
================================= */}

          <div className="references-block">
            <div className="references-heading">

              <h3>Références professionnelles</h3>
            </div>

            <p className="references-introduction">
              Des références professionnelles peuvent être communiquées sur
              demande.
            </p>

            <article className="reference-card">
              <span className="reference-number">01</span>

              <div>
                <h4>M. ONGONO Martin</h4>

                <p className="reference-role">Directeur — APPTA</p>

                <span className="reference-availability">
                  Coordonnées disponibles sur demande
                </span>
              </div>
            </article>

            <article className="reference-card">
              <span className="reference-number">02</span>

              <div>
                <h4>M. POOCH Simon</h4>

                <p className="reference-role">
                  Expert Comptable — Cabinet SIMON POOCH
                </p>

                <span className="reference-availability">
                  Coordonnées disponibles sur demande
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
