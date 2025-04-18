import React from "react";
import "./MovieDetailModal.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieTrailer from "./components/MovieTrailer/MovieTrailer";

const MovieDetailModal = ({ item, type, handleCloseModal }) => {
  const { data: genreData, isLoading, isError, error } = useMovieGenreQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;

  //***
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div onClick={handleCloseModal} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-wrap">
        <button onClick={handleCloseModal} className="modal-close-button">
          &times;
        </button>

        {type === "play" ? (
          <MovieTrailer itemId={item.id} />
        ) : (
          <div className="modal-content">
            <div className="modal-content-detail">
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
              <div>
                <h2>{item?.original_title}</h2>
                <div className="modal-genre">
                  {showGenre(item?.genre_ids).map((genre) => (
                    <p key={genre.id}>{genre}</p>
                  ))}
                </div>
                <p>Release Date: {item?.release_date}</p>

                <div className="modal-share-button">
                  <p>Add to Watchlist</p>
                  <p>Share</p>
                </div>
              </div>
            </div>

            <div className="modal-description">{item?.overview}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailModal;
