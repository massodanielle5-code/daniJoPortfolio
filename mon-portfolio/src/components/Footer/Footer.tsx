import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
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
        className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
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

          <p>
            © {new Date().getFullYear()} Danielle Masso
            <span>—</span>
            Tous droits réservés
          </p>

        </div>
      </footer>
    </>
  );
};

export default Footer;