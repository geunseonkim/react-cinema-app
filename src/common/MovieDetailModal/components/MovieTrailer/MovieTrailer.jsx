import React from "react";
import YouTube from "react-youtube";
import { useMovieTrailerQuery } from "../../../../hooks/useMovieTrailer";
import "./MovieTrailer.css";

const MovieTrailer = ({ itemId }) => {
  const { data, isLoading, isError, error } = useMovieTrailerQuery({
    movie_id: itemId,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <alert>{error.message}</alert>;

  const youtubeTrailer = data?.results.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );
  if (!youtubeTrailer)
    return <p>We couldn't find trailer you were looking for</p>;
  console.log("youtubeTrailer", youtubeTrailer);

  const opts = {
    width: "700",
    height: "370",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="youtube-wrap">
      <YouTube videoId={youtubeTrailer.key} opts={opts} />
    </div>
  );
};

export default MovieTrailer;
