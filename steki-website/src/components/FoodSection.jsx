import foodImage from "../assets/food.jpeg";
import mascotCoffee from "../assets/steki_specialty_coffee.png";
import "../styles/FoodSection.css";

function FoodSection() {
  return (
    <section className="food-section section" id="food">

      <div className="food-container">

        <div className="food-image-wrapper">
          <img
            src={foodImage}
            alt="Waffles at Steki"
            className="food-image"
          />
        </div>

        <div className="food-content">

          <p className="section-label">
            SOMETHING TO EAT
          </p>

          <h2>
            A little
            <br />
            something sweet.
          </h2>

          <p>
            Good coffee deserves good food.
            Enjoy something delicious alongside your
            favorite drink.
          </p>

          <p>
            From sweet treats to comforting favorites,
            there's always something waiting for you.
          </p>

          <div className="mascot-wrapper">

            <img
              src={mascotCoffee}
              alt="Steki mascot drinking coffee"
              className="mascot-image mascot-coffee"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default FoodSection;