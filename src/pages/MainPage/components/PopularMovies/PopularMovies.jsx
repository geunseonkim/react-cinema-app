import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import ClipLoader from "react-spinners/ClipLoader";

const PopularMovies = () => {
  const {
    data: popularData,
    isLoading,
    isError,
    error,
  } = usePopularMoviesQuery();

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <ClipLoader color="red" loading={isLoading} size={150} />
      </div>
    );
  if (isError) return <alert>{error.message}</alert>;
  return <div></div>;
};

export default PopularMovies;
