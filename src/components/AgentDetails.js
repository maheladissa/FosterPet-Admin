import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/OverViewDetails.css";

const AgentDetails = () => {
    const [agentDetails, setAgentDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    // Setting startTime to the Unix epoch start
    const [startTime, setStartTime] = useState(new Date(0).toISOString());

    // Setting endTime to the current date and time
    const [endTime, setEndTime] = useState(new Date().toISOString());

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
