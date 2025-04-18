import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReview = ({ movie_id }) => {
  return api.get(`movie/${movie_id}/reviews`);
};

export const useMovieReviewQuery = ({ movie_id }) => {
  return useQuery({
    queryKey: ["movie-review", movie_id],
    queryFn: () => fetchMovieReview({ movie_id }),
    select: (data) => data.data,
  });
};
