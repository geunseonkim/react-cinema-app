import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import MovieDetailBanner from "./components/MovieDetailBanner/MovieDetailBanner";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import MovieReview from "./components/MovieReview/MovieReview";
import MovieRecommendation from "./components/MovieRecommendation/MovieRecommendation";

const MovieDetailPage = () => {
  const { id } = useParams();

  const {
    data: movieDetailData,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({
    movie_id: id,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;

  return (
    <div>
      <MovieDetailBanner item={movieDetailData} />
      <MovieDetailInfo item={movieDetailData} />
      <MovieReview />
      <MovieRecommendation />
    </div>
  );
};

export default MovieDetailPage;
