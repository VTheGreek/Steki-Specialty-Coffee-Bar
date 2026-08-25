import aboutImage from "../assets/about.jpg";
import mascotMan from "../assets/steki-man.jpg";

function About() {
  return (
    <section className="about section" id="about">

      <div className="about-container">

        <div className="about-image-wrapper">
          <img
            src={aboutImage}
            alt="Inside Steki"
            className="about-image"
          />
        </div>

        <div className="about-content">

          <p className="section-label">
            WELCOME TO STEKI
          </p>

          <h2>
            More than
            <br />
            just a coffee.
          </h2>

          <p>
            Steki is a place where you can slow down,
            grab your favorite coffee and enjoy the moment.
          </p>

          <p>
            Whether you're meeting friends, working on your
            laptop or simply looking for a quiet corner,
            there's always a place for you here.
          </p>

          <div className="mascot-wrapper">
            <img
              src={mascotMan}
              alt="Steki mascot"
              className="mascot-image"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;