// UserCard.js
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      <p>
        <strong>Subscription Plan:</strong> {user.subscriptionPlan}
      </p>
      {/* Additional user information as needed */}
    </div>
  );
};

export default UserCard;
