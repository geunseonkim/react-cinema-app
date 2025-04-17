import React from "react";
import { useComingSoonMoviesQuery } from "../../../../hooks/useComingSoonMovies";
import MovieCardCarousel from "../../../../common/MovieCardCarousel/MovieCardCarousel";

const ComingSoonMovies = () => {
  const {
    data: comingSoonData,
    isLoading,
    isError,
    error,
  } = useComingSoonMoviesQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;

  return (
    <div>
      <MovieCardCarousel items={comingSoonData?.results} />
    </div>
  );
};

export default ComingSoonMovies;
