import { useState } from "react";

import "../styles/Gallery.css";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/gallery/gallery-1.jpg",
    },
    {
      id: 2,
      image: "/gallery/gallery-2.jpg",
    },
    {
      id: 3,
      image: "/gallery/gallery-3.jpg",
    },
    {
      id: 4,
      image: "/gallery/gallery-4.jpg",
    },
    {
      id: 5,
      image: "/gallery/gallery-5.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">

          <div>
            <p className="gallery-label">
              FOLLOW ALONG
            </p>

            <h2>
              Life at
              <br />
              Steki.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/steki_specialty_coffee_bar/"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-instagram-button"
          >
            Follow us on Instagram
          </a>

        </div>


        {/* Carousel */}
        <div className="gallery-carousel">

          <div
            className="gallery-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                className="gallery-slide"
                key={slide.id}
              >
                <img
                  src={slide.image}
                  alt="Steki specialty coffee bar"
                />
              </div>
            ))}
          </div>

        </div>


        {/* Controls */}
        <div className="gallery-controls">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            className="gallery-arrow"
          >
            ←
          </button>

          <div className="gallery-counter">
            <span>
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="gallery-counter-line">
              /
            </span>

            <span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="gallery-arrow"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default Gallery;