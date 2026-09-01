import heroImage from "../assets/about.jpg";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src={heroImage}
        alt="Steki Specialty Coffee Bar"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">
          SPECIALTY COFFEE
        </p>

        <h1>
          Your little place
          <br />
          away from home.
        </h1>

        <p className="hero-description">
          Coffee, food, good company
          <br />
          and a place to feel at home.
        </p>
      </div>
    </section>
  );
}

export default Hero;