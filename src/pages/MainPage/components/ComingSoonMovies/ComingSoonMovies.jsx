import React from "react";
import { useComingSoonMoviesQuery } from "../../../../hooks/useComingSoonMovies";
import MovieCardCarousel from "../../../../common/MovieCardCarousel/MovieCardCarousel";
import ClipLoader from "react-spinners/ClipLoader";

const ComingSoonMovies = ({ openModal }) => {
  const {
    data: comingSoonData,
    isLoading,
    isError,
    error,
  } = useComingSoonMoviesQuery();

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

  return (
    <div>
      <MovieCardCarousel
        items={comingSoonData?.results}
        openModal={openModal}
      />
    </div>
  );
};

export default ComingSoonMovies;
