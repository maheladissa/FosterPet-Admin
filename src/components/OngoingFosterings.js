import React from "react";
import { Link } from "react-router-dom";

const OngoingFosterings = () => {
  return (
    <div className="detail-container">
      <h1 className="detail-header">Ongoing Fosterings Details</h1>
      <div className="detail-content">
        {/* Display ongoing fostering-specific details here */}
        Detail content about ongoing fosterings goes here.
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default OngoingFosterings;
