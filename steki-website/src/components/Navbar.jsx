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
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Instagram CTA */}
        <a
          href="https://www.instagram.com/steki_specialty_coffee_bar?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
          className="navbar-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Us on Instagram
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
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="https://www.instagram.com/steki_specialty_coffee_bar?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
          className="mobile-menu-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Follow Us on Instagram
        </a>
      </nav>
    </header>
  );
}

export default Navbar;