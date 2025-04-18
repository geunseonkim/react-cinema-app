import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import "./MainPage.css";
import NowShowingMovies from "./components/NowShowingMovies/NowShowingMovies";
import ComingSoonMovies from "./components/ComingSoonMovies/ComingSoonMovies";
import MovieDetailModal from "../../common/MovieDetailModal/MovieDetailModal";

const movieTabs = ["NOW SHOWING", "COMING SOON"];
const MainPage = () => {
  const [movieListName, setMovieListName] = useState("NOW SHOWING");
  const [modalItem, setModalItem] = useState(null);
  const [modalType, setModalType] = useState("");

  const handleMovieListName = (name) => {
    setMovieListName(name);
  };

  const handleOpenModal = (item, type) => {
    setModalItem(item);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalItem(null);
    setModalType("");
  };
  return (
    <div>
      <Banner />
      <div className="movie-list-name">
        {movieTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleMovieListName(tab)}
            className={`movie-list-action ${
              movieListName === tab ? "active" : ""
            }`}
          >
            {tab}
          </button>
        ))}

        {movieListName === "NOW SHOWING" ? (
          <NowShowingMovies openModal={handleOpenModal} />
        ) : (
          <ComingSoonMovies openModal={handleOpenModal} />
        )}
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

export default MainPage;
