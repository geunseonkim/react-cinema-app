import React, { useState } from "react";

const MovieDropdown = ({ genreData, setSelectedOption, setSelectedGenre }) => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSelectedOption(value);
  };
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <div>
        <select value={selected} onChange={handleOptionChange}>
          <option value="">정렬 선택</option>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      <div>
        <div>
          {genreData?.map((genre) => (
            <button key={genre.id} onClick={() => handleGenreChange(genre.id)}>
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDropdown;
