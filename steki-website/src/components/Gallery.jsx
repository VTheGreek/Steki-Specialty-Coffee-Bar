import coffeeImage from "../assets/coffee.jpg";
import mascotWoman from "../assets/steki-woman.jpg";
import "../styles/CoffeeSection.css";

function CoffeeSection() {
  return (
    <section className="coffee-section section" id="coffee">

      <div className="coffee-container">

        <div className="coffee-content">

          <p className="section-label">
            COFFEE TIME
          </p>

          <h2>
            Good coffee.
            <br />
            Good mood.
          </h2>

          <p>
            From your first coffee of the morning to that
            afternoon pick-me-up, we make every cup with care.
          </p>

          <p>
            Take your time, enjoy your drink and make yourself
            comfortable.
          </p>

          <div className="mascot-wrapper mascot-right">
            <img
              src={mascotWoman}
              alt="Steki mascot"
              className="mascot-image"
            />
          </div>

        </div>

        <div className="coffee-image-wrapper">

          <img
            src={coffeeImage}
            alt="Coffee at Steki"
            className="coffee-image"
          />

        </div>

      </div>

    </section>
  );
}

export default CoffeeSection;