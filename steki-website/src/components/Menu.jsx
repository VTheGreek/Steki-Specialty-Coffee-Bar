import { useEffect, useState } from "react";
import foodImage from "../assets/food.jpeg";
import "../styles/Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.id = "widgetPreview";
    script.src =
      "https://widgets.orderbilly.com/billy.widget.min.js";
    script.async = true;

    script.onload = () => {
      console.log("OrderBilly widget loaded");
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("widgetPreview");

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const openMenu = () => {
    setMenuOpen(true);

    if (window.widgetPreview) {
      window.widgetPreview("init", {
        venue: "359a52b4-93bd-4980-a7e1-535ff7686f9d",
        giftcards: false,
        buttons: true,
        buttonsPositionHorizontal: "right",
        buttonsPositionVertical: "bottom",
        widgetPositionHorizontal: "right",
        widgetPositionVertical: "bottom",
      });
    }
  };

  return (
    <section className="menu section" id="menu">

      <div className="menu-container">

        <div className="menu-content">

          <p className="section-label">
            OUR MENU
          </p>

          <h2>
            Good things
            <br />
            worth staying for.
          </h2>

          <p className="menu-description">
            From carefully prepared specialty coffee to
            something sweet or savory, there's always
            something waiting for you at Steki.
          </p>

          <button
            type="button"
            className="menu-button"
            onClick={openMenu}
          >
            View Menu
          </button>

        </div>

        <div className="menu-image-wrapper">

          <img
            src={foodImage}
            alt="Food at Steki"
            className="menu-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Menu;