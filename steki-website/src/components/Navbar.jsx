import { useState } from "react";
import logo from "../assets/steki-logo.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo + Name */}
        <div className="navbar-brand">

          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Steki Specialty Coffee Bar"
            />
          </a>

          <a
            href="#home"
            className="navbar-name"
            onClick={closeMenu}
          >
            Steki
          </a>

        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#coffee">Coffee</a>

          <a href="#menu">Menu</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="navbar-button"
          onClick={closeMenu}
        >
          Visit Us
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        <a
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#coffee"
          onClick={closeMenu}
        >
          Coffee
        </a>

        <a
          href="#menu"
          onClick={closeMenu}
        >
          Menu
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-menu-button"
          onClick={closeMenu}
        >
          Visit Us
        </a>

      </nav>

    </header>
  );
}

export default Navbar;