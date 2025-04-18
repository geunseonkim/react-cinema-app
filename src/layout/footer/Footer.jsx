import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Our Cinemas</h3>
      <div className="cinema-columns">
        <ul>
          <li>
            <strong>New Zealand</strong>
          </li>
          <li>Albany</li>
          <li>Blenheim</li>
        </ul>
        <ul>
          <li>Chartwell</li>
          <li>Coastlands</li>
          <li>Embassy Theatre</li>
        </ul>
        <ul>
          <li>Manukau</li>
          <li>New Plymouth</li>
        </ul>
        <ul>
          <li>
            Newmarket
            <br />
            (Westfield Mall)
          </li>
          <li>Palmerston North</li>
        </ul>
        <ul>
          <li>
            Queen Street
            <br />
            (Auckland)
          </li>
        </ul>
        <ul>
          <li>
            Queensgate
            <br />
            (Wellington)
          </li>
          <li>St Lukes</li>
        </ul>
        <ul>
          <li>Tauranga Central</li>
          <li>Tauranga Crossing</li>
          <li>Westcity</li>
        </ul>
        <ul>
          <li>Westgate (Auckland)</li>
          <li>Whangarei</li>
        </ul>
      </div>

      <p style={{ textAlign: "right", fontSize: "0.8rem" }}>
        © 2025 Event Cinema. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
