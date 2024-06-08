import React from "react";
import { Link } from "react-router-dom";
import "../styles/OverViewDetails.css";

const AgentDetails = () => {
  return (
    <div className="detail-container">
      <h1 className="detail-header">Agent Details</h1>
      <div className="detail-content">
        {/* Display agent-specific details here */}
        Detail content about agents goes here.
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default AgentDetails;
