import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import "./MainPage.css";
import NowShowingMovies from "./components/NowShowingMovies/NowShowingMovies";
import ComingSoonMovies from "./components/ComingSoonMovies/ComingSoonMovies";

const movieTabs = ["NOW SHOWING", "COMING SOON"];
const MainPage = () => {
  const [movieListName, setMovieListName] = useState("NOW SHOWING");

  const handleMovieListName = (name) => {
    setMovieListName(name);
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
          <NowShowingMovies />
        ) : (
          <ComingSoonMovies />
        )}
      </div>
    </div>
  );
};

export default MainPage;
