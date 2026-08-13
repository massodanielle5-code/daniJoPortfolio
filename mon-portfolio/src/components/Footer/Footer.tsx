import { useEffect, useState } from "react";
import "./Footer.css";

function Footer () {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================================
          BOUTON RETOUR EN HAUT
      ================================= */}

      <button
        type="button"
        className={`scroll-to-top ${
          showScrollTop ? "visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
        title="Retour en haut"
      >
        ↑
      </button>

      {/* ================================
          FOOTER
      ================================= */}

      <footer className="footer">
        <div className="footer-content">

          <div className="footer-main">

            <p className="footer-copyright">
              © {new Date().getFullYear()} Danielle Masso
              <span>—</span>
              Tous droits réservés
            </p>

            <p className="footer-tech">
              Conçu et développé avec{" "}
              <span>React</span> &{" "}
              <span>TypeScript</span>.
            </p>

          </div>

          <div className="footer-links">

            <a
              href="https://github.com/massodanielle5-code"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Danielle Masso"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/masso-danielle-8abbb6346"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Danielle Masso"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/237651104953"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Danielle Masso sur WhatsApp"
              className="footer-whatsapp"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;