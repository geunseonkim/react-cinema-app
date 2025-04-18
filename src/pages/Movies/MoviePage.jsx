import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieDropdown from "../../common/MovieDropdown/MovieDropdown";
import MovieDetailModal from "../../common/MovieDetailModal/MovieDetailModal";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (item, type) => {
    setModalItem(item);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalItem(null);
    setModalType("");
  };

  const {
    data: genreData,
    isLoading: genreIsLoading,
    isError: genreIsError,
    error: genreError,
  } = useMovieGenreQuery({ keyword });

  const {
    data: searchData,
    isLoading: searchIsLoading,
    isError: searchIsError,
    error: searchError,
  } = useSearchMovieQuery({ keyword });

  if (genreIsLoading || searchIsLoading) return <h1>Loading...</h1>;
  if (genreIsError || searchIsError)
    return <alert>{genreError.message || searchError.message}</alert>;

  const filteredGenre = selectedGenre
    ? searchData?.results.filter((item) =>
        item.genre_ids.includes(selectedGenre)
      )
    : searchData?.results;

  const sortedMovies = filteredGenre?.sort((a, b) => {
    if (selectedOption === "latest")
      return new Date(b.release_date) - new Date(a.release_date);
    if (selectedOption === "oldest")
      return new Date(a.release_date) - new Date(b.release_date);
    if (selectedOption === "popular") return b.popularity - a.popularity;
  });

  return (
    <div className="movies-container">
      <div>
        <div className="movies-cards-wrapper">
          {sortedMovies.map((item, i) => (
            <MovieCard item={item} openModal={handleOpenModal} />
          ))}
        </div>
      </div>

      <div>
        <MovieDropdown
          genreData={genreData}
          setSelectedOption={setSelectedOption}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      {modalItem && (
        <MovieDetailModal
          item={modalItem}
          type={modalType}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MoviePage;
