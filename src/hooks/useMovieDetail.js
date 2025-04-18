import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = ({ movie_id }) => {
  return api.get(`/movie/${movie_id}`);
};

export const useMovieDetailQuery = ({ movie_id }) => {
  return useQuery({
    queryKey: ["movie-detail", movie_id],
    queryFn: () => fetchMovieDetail({ movie_id }),
    select: (data) => data.data,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 15000),
    staleTime: 60000,
    cacheTime: 600000,
  });
};
