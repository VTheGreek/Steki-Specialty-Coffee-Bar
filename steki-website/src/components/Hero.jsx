import heroImage from "../assets/hero.jpg";
import "../styles/Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src={heroImage}
        alt="Steki coffee shop"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-small-text">
          SPECIALTY COFFEE • GOOD VIBES
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

        <a href="#about" className="hero-button">
          Discover Steki
        </a>

      </div>

    </section>
  );
}

export default Hero;