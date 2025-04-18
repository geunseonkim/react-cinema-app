import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecommendations = ({ movie_id }) => {
  return api.get(`movie/${movie_id}/recommendations`);
};

export const useMovieRecommendationsQuery = ({ movie_id }) => {
  return useQuery({
    queryKey: ["movie-recommendation", movie_id],
    queryFn: () => fetchMovieRecommendations({ movie_id }),
    select: (data) => data.data,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 15000),
    staleTime: 60000,
    cacheTime: 600000,
  });
};
