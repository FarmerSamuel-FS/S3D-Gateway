import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>S3D Gateway!</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/print-status">Print Status</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          <li>
            <Link to="/user-settings">User Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="avatar">
        {/* Replace with user avatar component or icon */}
        <img src="" alt="User Avatar" />
      </div>
    </header>
  );
};

export default Header;
