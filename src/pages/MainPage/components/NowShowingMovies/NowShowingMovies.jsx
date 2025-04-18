import React from "react";
import { useNowShowingMoviesQuery } from "../../../../hooks/useNowShowingMovies";
import "./NowShowingMovies.css";
import MovieCardCarousel from "../../../../common/MovieCardCarousel/MovieCardCarousel";
import ClipLoader from "react-spinners/ClipLoader";

const NowShowingMovies = ({ openModal }) => {
  const {
    data: nowShowingData,
    isLoading,
    isError,
    error,
  } = useNowShowingMoviesQuery();

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
        items={nowShowingData?.results}
        openModal={openModal}
      />
    </div>
  );
};

export default NowShowingMovies;
