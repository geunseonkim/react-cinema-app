import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Carousel from "../Carousel/Carousel";
import NowShowingMovies from "../NowShowingMovies/NowShowingMovies";
import "./Banner.css";
import ClipLoader from "react-spinners/ClipLoader";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

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
      <Carousel items={data?.results.slice(0, 3)} />
    </div>
  );
};

export default Banner;
