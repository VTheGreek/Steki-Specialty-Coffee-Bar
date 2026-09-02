import aboutImage from "../assets/about.jpg";
import mascotMan from "../assets/steki-man.jpg";

import "../styles/About.css";

function About() {
  return (
    <section className="about section" id="about">

      {/* ========================================
          INTRO
      ======================================== */}

      <div className="about-intro">

        <p className="about-label">
          ABOUT STEKI
        </p>

        <h2 className="about-intro-title">
          Steki is a specialty coffee bar & eatery
          <span> with a Greek soul.</span>
        </h2>

        <p className="about-intro-location">
          Founded in Leuven in 2025.
        </p>

      </div>


      {/* ========================================
          HOW IT STARTED
      ======================================== */}

      <div className="about-story">

        <div className="about-story-image">
          <img
            src={aboutImage}
            alt="Inside Steki Specialty Coffee Bar"
          />
        </div>

        <div className="about-story-content">

          <p className="about-label">
            HOW IT STARTED
          </p>

          <h3>
            A simple idea.
            <br />
            A place worth coming back to.
          </h3>

          <p>
            The idea for Steki started with George and a simple
            thought: to create the kind of place he would genuinely
            want to visit himself.
          </p>

          <p>
            Living in Belgium, he wanted to bring together two
            things he loved — the culture of specialty coffee and
            the flavours and food traditions he grew up with in
            Greece.
          </p>

          <p>
            Not by creating a traditional Greek café, but by giving
            those influences a place within a modern specialty
            coffee bar.
          </p>

          <p>
            That idea became Steki in 2025.
          </p>

        </div>

      </div>


      {/* ========================================
          WHY STEKI
      ======================================== */}

      <div className="about-meaning">

        <div className="about-meaning-heading">

          <p className="about-label">
            WHY STEKI?
          </p>

          <h3>
            A name with
            <br />
            a feeling behind it.
          </h3>

        </div>

        <div className="about-meaning-content">

          <div className="meaning-word">
            <span className="meaning-greek">
              στέκι
            </span>

            <p>
              The name Steki comes from Greek. It describes
              that special place you keep coming back to —
              your favourite spot to meet, have a coffee,
              share food and spend time together.
            </p>
          </div>

          <div className="meaning-divider">
            +
          </div>

          <div className="meaning-word">
            <span className="meaning-dutch">
              een gezellig stekje
            </span>

            <p>
              In Dutch, <em>een gezellig stekje</em> can
              describe a cosy little place of your own.
            </p>
          </div>

        </div>

        <p className="about-meaning-ending">
          Different words, different origins, but a feeling
          that comes surprisingly close.
        </p>

      </div>


      {/* ========================================
          COFFEE & FOOD
      ======================================== */}

      <div className="about-values">

        {/* Coffee */}

        <article className="about-value">

          <p className="about-label">
            SPECIALTY COFFEE
          </p>

          <h3>
            Coffee is
            <br />
            at the heart.
          </h3>

          <p>
            Coffee is at the heart of Steki. You'll find
            everything you expect from a specialty coffee bar,
            prepared with attention to quality and consistency.
          </p>

          <p>
            But George also wanted Steki to have its own
            identity. Throughout the year, the menu evolves
            with seasonal drinks inspired by Greek ingredients
            and flavours — taking something familiar and
            occasionally using it in an unexpected way.
          </p>

        </article>


        {/* Food */}

        <article className="about-value">

          <p className="about-label">
            FOOD WE CARE ABOUT
          </p>

          <h3>
            Good food
            <br />
            deserves attention.
          </h3>

          <p>
            From the beginning, the idea was that the food
            should receive the same attention as the coffee.
          </p>

          <p>
            The menu brings together traditional savoury pies,
            Greek-inspired breakfast and lunch choices, and
            homemade cakes, with an emphasis on good ingredients,
            balanced flavours and food we would genuinely want
            to eat ourselves.
          </p>

          <p>
            Rather than offering an endless menu, we prefer to
            keep things thoughtful. We carefully choose what
            earns a place on it, work with seasonal ingredients
            whenever possible, and continue developing new
            recipes while staying connected to the simplicity
            and flavours of Greek food.
          </p>

        </article>

      </div>


      {/* ========================================
          GREEK TOUCH
      ======================================== */}

      <div className="about-philosophy">

        <p>
          For us, it's not about making everything
          <span> "Greek".</span>
        </p>

        <p>
          It's about taking the ingredients, memories and
          food culture we know and giving them a natural place
          in a modern specialty coffee bar.
        </p>

      </div>


      {/* ========================================
          YOUR STEKI
      ======================================== */}

      <div className="about-ending">

        <div className="about-ending-content">

          <p className="about-label">
            YOUR STEKI
          </p>

          <h3>
            A place you
            <br />
            want to come back to.
          </h3>

          <p>
            More than anything, George wanted Steki to become
            exactly what its name suggests: a place you want
            to come back to.
          </p>

          <strong>
            Your coffee, your food, your Steki.
          </strong>

        </div>

        <div className="about-ending-mascot">
          <img
            src={mascotMan}
            alt="Steki mascot"
          />
        </div>

      </div>

    </section>
  );
}

export default About;