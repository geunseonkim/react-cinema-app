import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieReview.css";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import ClipLoader from "react-spinners/ClipLoader";

const MovieReview = () => {
  const { id } = useParams();

  const {
    data: reviewData,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({
    movie_id: id,
  });

  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleExpand = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

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

  return (
    <div className="review-container">
      <h1>Review</h1>

      {reviewData?.results.map((review) => {
        const isExpanded = expandedReviews[review.id] || false;
        const contentToShow = isExpanded
          ? review.content
          : review.content.slice(0, 300);

        const shouldShowToggle = review.content.length > 300;

        return (
          <div key={review.id} className="review-item">
            <h2>{review.author}</h2>
            <p>
              {contentToShow}
              {shouldShowToggle && (
                <span
                  className="toggle-button"
                  onClick={() => toggleExpand(review.id)}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "6px",
                  }}
                >
                  {isExpanded ? "접기" : "더보기"}
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieReview;
