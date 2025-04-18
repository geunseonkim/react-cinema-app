import React from "react";
import YouTube from "react-youtube";
import { useMovieTrailerQuery } from "../../../../hooks/useMovieTrailer";
import "./MovieTrailer.css";
import ClipLoader from "react-spinners/ClipLoader";

const MovieTrailer = ({ itemId }) => {
  const { data, isLoading, isError, error } = useMovieTrailerQuery({
    movie_id: itemId,
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
