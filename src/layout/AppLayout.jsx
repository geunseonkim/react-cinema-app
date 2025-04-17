import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.css";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="nav-container">
        <header className="header">
          <h1>EventCinema</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movie">Movies</Link>
          </nav>
        </header>
        <div style={{ flexGrow: 1 }}></div>

        <form className="search-form">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
