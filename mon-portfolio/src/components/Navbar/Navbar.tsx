import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.jpeg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo Danielle Masso" className="logo" />
        <span className="brand-name">Masso Danielle</span>
      </div>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            À propos
          </a>
          <a href="#experience" onClick={closeMenu}>
            Expérience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Mes projets
          </a>
          <a href="#skills" onClick={closeMenu}>
            Compétences
          </a>
          <a href="#formation" onClick={closeMenu}>
            Formation
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="navbar-cta-mobile"
            href="https://wa.me/237651104953"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Discuter sur WhatsApp
          </a>
        </div>
      )}

      <div className="navbar-links">
        <a href="#about">À propos</a>
        <a href="#experience">Expérience</a>
        <a href="#projects">Mes projets</a>
        <a href="#skills">Compétences</a>
        <a href="#formation">Formation</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        className="navbar-cta"
        href="https://wa.me/237651104953"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discuter sur WhatsApp
      </a>
    </nav>
  );
}

export default Navbar;
