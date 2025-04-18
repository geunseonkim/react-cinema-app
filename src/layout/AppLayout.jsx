import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.css";
import { Link } from "react-router-dom";
import Footer from "./footer/Footer";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movie?q=${keyword}`);
  };
  return (
    <>
      <div className="nav-container">
        <header className="header">
          <Link to="/">
            <h1>EventCinema</h1>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movie">Movies</Link>
          </nav>
        </header>
        <div style={{ flexGrow: 1 }}></div>

        <form className="search-form" onSubmit={searchByKeyword}>
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onFocus={() => setKeyword("")}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
