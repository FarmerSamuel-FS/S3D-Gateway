// LandingPage.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you use react-router-dom for navigation

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to S3D-Gateway</h1>
      <p>Sign up or log in to access your printers and user profile.</p>
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

export default LandingPage;
