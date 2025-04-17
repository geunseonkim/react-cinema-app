import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCardCarousel.css";

const MovieCardCarousel = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardPerPage = 7;
  const totalPage = Math.ceil(items.length / cardPerPage);
  const handleCardCarouselNext = () => {
    if (currentIndex < totalPage - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCardCarouselPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMobileState = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleMobileState();
    window.addEventListener("resize", handleMobileState);
    return () => window.addEventListener("resize", handleMobileState); //언마운트
  }, []);
  return (
    <div>
      <div className="movie-card-carousel-container">
        <div className={`movie-card-wrapper ${isMobile ? "scrollable" : ""}`}>
          <div
            className="movie-card-slider"
            style={{
              transform: isMobile
                ? "none"
                : `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {items?.map((item, i) => (
              <div className="movie-card-carousel-slide">
                <MovieCard key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>

        {!isMobile && currentIndex > 0 && (
          <button
            onClick={handleCardCarouselPrev}
            className="card-carousel-arrow left"
          >
            앞
          </button>
        )}
        {!isMobile && currentIndex < totalPage - 1 && (
          <button
            onClick={handleCardCarouselNext}
            className="card-carousel-arrow right"
          >
            뒤
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCardCarousel;
