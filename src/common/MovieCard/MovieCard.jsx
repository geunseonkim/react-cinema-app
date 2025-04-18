import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ item, openModal }) => {
  return (
    <>
      <div className="movie-card-container">
        <div className="movie-card-wrap">
          <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
          <div className="movie-card-actions">
            <button onClick={() => openModal(item, "play")} className="left">
              재생
            </button>
            <button onClick={() => openModal(item, "info")} className="right">
              정보
            </button>
          </div>
          <p className="movie-card-title">{item.original_title}</p>
          <button className="movie-card-times-tickets">Times & Tickets</button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
