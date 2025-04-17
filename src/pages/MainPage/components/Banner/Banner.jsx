import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Carousel from "../Carousel/Carousel";
import PopularMovies from "../PopularMovies/PopularMovies";
import NowShowingMovies from "../NowShowingMovies/NowShowingMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;
  return (
    <div>
      <Carousel items={data?.results.slice(0, 3)} />
      <PopularMovies />
      <NowShowingMovies />
    </div>
  );
};

export default Banner;
