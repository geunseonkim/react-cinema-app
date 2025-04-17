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
  });
};
