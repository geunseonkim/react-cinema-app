import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviePage.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieDropdown from "../../common/MovieDropdown/MovieDropdown";
import MovieDetailModal from "../../common/MovieDetailModal/MovieDetailModal";
import ReactPaginate from "react-paginate";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [modalItem, setModalItem] = useState(null);
  const [modalType, setModalType] = useState("");
  const [page, setPage] = useState(1);

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
  } = useMovieGenreQuery();

  const {
    data: searchData,
    isLoading: searchIsLoading,
    isError: searchIsError,
    error: searchError,
  } = useSearchMovieQuery({ keyword, page });

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
  console.log("ooo", searchData);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div className="movies-container">
      <div className="filter-sidebar">
        <MovieDropdown
          genreData={genreData}
          setSelectedOption={setSelectedOption}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      <div className="movies-cards-wrapper">
        <div className="movies-cards-content">
          {sortedMovies.map((item) => (
            <MovieCard key={item.id} item={item} openModal={handleOpenModal} />
          ))}
        </div>

        <div>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={searchData?.total_pages} // 전체
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1} //bc 0부터 카운트
          />
        </div>
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
