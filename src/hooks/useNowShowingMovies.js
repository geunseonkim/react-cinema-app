import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchNowShowingMovies = () => {
  return api.get(`/movie/now_playing`);
};

export const useNowShowingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-now-showing"],
    queryFn: fetchNowShowingMovies,
    select: (data) => data.data,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 15000),
    staleTime: 60000,
    cacheTime: 600000,
  });
};
