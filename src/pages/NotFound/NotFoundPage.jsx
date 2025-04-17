import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>We can't find the page you were looking for.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "1rem 2rem",
          border: "1px solid black",
          backgroundColor: "white",
          cursor: "pointer",
          marginTop: "2rem",
        }}
      >
        Go to home page
      </button>
    </div>
  );
};

export default NotFoundPage;
