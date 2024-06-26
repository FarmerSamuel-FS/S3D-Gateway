import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="user-avatar">
        <Link to="/user">
          <img src="path_to_avatar_image" alt="User Avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
