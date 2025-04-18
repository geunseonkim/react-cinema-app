import React from "react";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item, openModal }) => {
  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movie/${item.id}`);
  };
  return (
    <>
      <div className="movie-card-container">
        <div className="movie-card-wrap">
          <img
            onClick={goToMovieDetail}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          />
          <div className="movie-card-actions">
            <button onClick={() => openModal(item, "play")} className="left">
              ▶︎
            </button>
            <button onClick={() => openModal(item, "info")} className="right">
              i
            </button>
          </div>
          <p className="movie-card-title" onClick={goToMovieDetail}>
            {item.original_title}
          </p>
          <button className="movie-card-times-tickets">Times & Tickets</button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
