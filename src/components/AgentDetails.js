import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AgentDetails.css";
import { fetchActiveKennels } from "../services/KennelService";

const AgentDetails = () => {
  const [agentDetails, setAgentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState(new Date(0).toISOString());
  const [endTime, setEndTime] = useState(new Date().toISOString());

  useEffect(() => {
    fetchActiveKennels(startTime, endTime)
      .then((data) => {
        setAgentDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching agent details:", error);
        setLoading(false);
      });
  }, [startTime, endTime]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (agentDetails.length === 0) {
    return <div>No agent details available.</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-header">Agent Details</h1>
      <div className="detail-content">
        {agentDetails.map((agent) => (
          <div key={agent.kennelId} className="agent-detail-item">
            <h2>{agent.kennelName}</h2>
            <p>
              <strong>Kennel ID:</strong> {agent.kennelId}
            </p>
            <p>
              <strong>Created Date:</strong>{" "}
              {new Date(agent.createdDate).toLocaleString()}
            </p>

            <div className="agent-address">
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                {agent.kennelAddress.address1} {agent.kennelAddress.address2}
              </p>
              <p>
                {agent.kennelAddress.city}, {agent.kennelAddress.zipCode}
              </p>
            </div>

            <p>
              <strong>Location:</strong> Latitude:{" "}
              {agent.kennelLocation.coordinates[0]}, Longitude:{" "}
              {agent.kennelLocation.coordinates[1]}
            </p>
            <p>
              <strong>Owner Name:</strong> {agent.ownerName}
            </p>
            <p>
              <strong>Owner Email:</strong> {agent.ownerEmail}
            </p>
            <p>
              <strong>Owner Phone:</strong> {agent.ownerPhone || "N/A"}
            </p>
          </div>
        ))}
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default AgentDetails;
