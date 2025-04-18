import React from "react";
import { useMovieRecommendationsQuery } from "../../../../hooks/useMovieRecommendations";
import { useParams } from "react-router-dom";
import MovieCardCarousel from "../../../../common/MovieCardCarousel/MovieCardCarousel";
import "./MovieRecommendation.css";
import ClipLoader from "react-spinners/ClipLoader";

const MovieRecommendation = () => {
  const { id } = useParams();

  const {
    data: RecommendationData,
    isLoading,
    isError,
    error,
  } = useMovieRecommendationsQuery({
    movie_id: id,
  });

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
  if (isError) return <div>{error.message}</div>;

  console.log("dd", RecommendationData);

  return (
    <div className="recommendation-container">
      <h1>Recommendations</h1>
      <div>
        {/* {RecommendationData?.results.map((item) => (
          <MovieCardCarousel key={item.id} item={item} />
        ))} */}

        <MovieCardCarousel items={RecommendationData?.results} />
      </div>
    </div>
  );
};

export default MovieRecommendation;
