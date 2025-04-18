import React from "react";
import "./MovieDetailInfo.css";

const MovieDetailInfo = ({ item }) => {
  console.log("iii", item);
  return (
    <div>
      <div className="movie-detail-container">
        <div className="movie-detail-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
          />
          <button>▶︎</button>
        </div>

        <div className="movie-detail-info">
          <h2 className="movie-detail-title">{item?.original_title}</h2>

          <div>
            <h1>
              {item?.original_title}
              <span className="movie-detail-adult">
                {item?.adult ? "R16" : "M"}
              </span>
            </h1>

            <p>{item?.overview}</p>

            <div className="movie-detail-content">
              <div>
                <p>Release Date:</p>
                <p>Running Time:</p>
                <p>Budget</p>
                <p>Genre</p>
              </div>

              <div>
                <p>{item?.release_date}</p>
                <p>{item?.runtime} mins</p>
                <p>{item?.budget?.toLocaleString()}</p>
                <p>
                  <div style={{ display: "flex", marginRight: "10px" }}>
                    {item?.genres.map((item) => (
                      <p key={item.id} style={{ marginRight: "5px" }}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailInfo;
