import React from "react";
import UserCard from "../components/UserCard"; // Adjust the path as per your project structure

const UserPage = () => {
  // Assume user information is fetched or provided as props
  const user = {
    name: "John Doe",
    address: "123 Main St, Anytown, USA",
    subscriptionPlan: "Premium",
  };

  return (
    <div className="user-page">
      <h1>User Profile</h1>
      <UserCard user={user} />
      {/* Other user-related content */}
    </div>
  );
};

export default UserPage;
