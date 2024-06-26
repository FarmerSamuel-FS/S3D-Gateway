// Homepage.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom for navigation

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to S3D-Gateway</h1>
      <p>Manage your 3D prints and printers with ease.</p>
      <div className="welcome-card">
        <h2>Explore S3D-Gateway</h2>
        <p>Discover features such as:</p>
        <ul>
          <li>Monitor your 3D prints in real-time</li>
          <li>Manage multiple printers from one place</li>
          <li>View detailed print analytics</li>
        </ul>
      </div>
      <div className="buttons">
        <Link to="/signup" className="button">
          Sign Up
        </Link>
        <Link to="/login" className="button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
