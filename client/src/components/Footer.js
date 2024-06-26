// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/printers">Printers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-info">
        <p>
          Contact us:{" "}
          <a href="mailto:sam.d3v.35@gmail.com">sam.d3v.35@gmail.com</a>
        </p>
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/samdev35"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@icepikcrxsi?si=IEXU0y--OKCqCAvg"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://github.com/FarmerSamuel-FS"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <p>&copy; 2024 S3D-Gateway</p>
    </footer>
  );
}

export default Footer;
