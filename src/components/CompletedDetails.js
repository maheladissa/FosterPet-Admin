import React from "react";
import { Link } from "react-router-dom";

const CompletedDetails = () => {
  return (
    <div className="detail-container">
      <h1 className="detail-header">Completed Fosterings Details</h1>
      <div className="detail-content">
        {/* Display completed fostering-specific details here */}
        Detail content about completed fosterings goes here.
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default CompletedDetails;
