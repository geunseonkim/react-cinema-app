import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };
  const handleCarouselNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-slider">
          <img
            src={`https://image.tmdb.org/t/p/original${items[currentIndex].backdrop_path}`}
          />
        </div>

        <button onClick={handleCarouselPrev} className="carousel-arrow left">
          &lt;
        </button>
        <button onClick={handleCarouselNext} className="carousel-arrow right">
          &gt;
        </button>

        <div className="carousel-movie-info">
          <h1>{items[currentIndex]?.original_title}</h1>
          <p>{items[currentIndex]?.release_date}</p>
        </div>

        <div className="carousel-indicator">
          {items?.map((_, i) => (
            <span
              key={i}
              className={`indicator ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
