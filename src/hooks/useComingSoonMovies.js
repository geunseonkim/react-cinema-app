import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchComingSoonMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useComingSoonMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-coming-soon"],
    queryFn: fetchComingSoonMovies,
    select: (data) => data.data,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 15000),
    staleTime: 60000,
    cacheTime: 600000,
  });
};
