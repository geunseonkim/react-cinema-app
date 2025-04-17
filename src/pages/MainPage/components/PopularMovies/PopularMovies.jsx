import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const PopularMovies = () => {
  const {
    data: popularData,
    isLoading,
    isError,
    error,
  } = usePopularMoviesQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;
  return (
    <div>
      {/* <h2>Popular</h2> */}
      {/* <MovieCard /> */}
    </div>
  );
};

export default PopularMovies;
