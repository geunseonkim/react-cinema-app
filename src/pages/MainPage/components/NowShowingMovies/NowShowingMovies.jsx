import React from "react";
import { useNowShowingMoviesQuery } from "../../../../hooks/useNowShowingMovies";
import "./NowShowingMovies.css";
import MovieCardCarousel from "../../../../common/MovieCardCarousel/MovieCardCarousel";

const NowShowingMovies = () => {
  const {
    data: nowShowingData,
    isLoading,
    isError,
    error,
  } = useNowShowingMoviesQuery();
  console.log("ggg", nowShowingData);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;
  return (
    <div>
      <h2>Now Showing</h2>
      <MovieCardCarousel items={nowShowingData?.results} />
    </div>
  );
};

export default NowShowingMovies;
