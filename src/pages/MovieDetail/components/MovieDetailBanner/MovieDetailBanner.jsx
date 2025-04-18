import React, { useState } from "react";
import "./MovieDetailBanner.css";
import MovieTrailer from "../../../../common/MovieDetailModal/components/MovieTrailer/MovieTrailer";

const MovieDetailBanner = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="movie-detail-banner-container">
      <img src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`} />
      <button
        onClick={handleOpenModal}
        className="movie-detail-banner-trailer-button"
      >
        ▷ Video Trailer
      </button>

      {openModal && (
        <div onClick={handleCloseModal} className="modal-container">
          <div onClick={handleCloseModal} className="modal-container">
            <div onClick={(e) => e.stopPropagation()} className="modal-wrap">
              <button onClick={handleCloseModal} className="modal-close-button">
                &times;
              </button>

              <div className="modal-wrapper">
                <MovieTrailer itemId={item.id} />
                <div className="modal-share-button share-button-trailer">
                  <p>Add to Watchlist</p>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailBanner;
