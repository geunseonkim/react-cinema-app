import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieTailer = ({ movie_id }) => {
  return api.get(`/movie/${movie_id}/videos`);
};

export const useMovieTrailerQuery = ({ movie_id }) => {
  return useQuery({
    queryKey: ["movie-trailer", movie_id],
    queryFn: () => fetchMovieTailer({ movie_id }),
    select: (data) => data.data,
  });
};
