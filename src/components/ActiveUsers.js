import React from "react";
import { Link } from "react-router-dom";

const ActiveUsers = () => {
  return (
    <div className="detail-container">
      <h1 className="detail-header">Active User Details</h1>
      <div className="detail-content">
        {/* Display user-specific details here */}
        Detail content about active users goes here.
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default ActiveUsers;
