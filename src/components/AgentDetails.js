import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/AgentDetails.css";
import { fetchActiveKennels } from "../services/KennelService";

const AgentDetails = () => {
  const [agentDetails, setAgentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState(new Date(0));
  const [endTime, setEndTime] = useState(new Date());

  useEffect(() => {
    // Check if startTime is before endTime
    if (startTime > endTime) {
      console.warn("Start date should be before end date.");
      return;
    }

    const formattedStartTime = startTime.toISOString();
    const formattedEndTime = endTime.toISOString();

    fetchActiveKennels(formattedStartTime, formattedEndTime)
      .then((data) => {
        // Filter data based on the date range
        const filteredData = data.filter((agent) => {
          const createdDate = new Date(agent.createdDate);
          return createdDate >= startTime && createdDate <= endTime;
        });
        setAgentDetails(filteredData);
        setLoading(false);
        console.log("filtered data", filteredData);
      })
      .catch((error) => {
        console.error("Error fetching agent details:", error);
        setLoading(false);
      });
  }, [startTime, endTime]);

  return (
    <div className="detail-container">
      <h1 className="detail-header">Active Agent Details</h1>

      <div className="date-picker-container">
        <DatePicker
          selected={startTime}
          onChange={(date) => setStartTime(date)}
          dateFormat="yyyy/MM/dd"
          className="date-picker"
        />
        <DatePicker
          selected={endTime}
          onChange={(date) => setEndTime(date)}
          dateFormat="yyyy/MM/dd"
          className="date-picker"
        />
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : agentDetails.length === 0 ? (
        <div>No agent details available.</div>
      ) : (
        <div className="detail-content">
          {agentDetails.map((agent) => (
            <div key={agent.kennelId} className="agent-detail-item">
              <h2>{agent.kennelName}</h2>
              <p>
                <strong>Kennel ID:</strong> {agent.kennelId}
              </p>
              <p>
                <strong>Created Date:</strong>{" "}
                {new Date(agent.createdDate).toLocaleDateString()}
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
      )}

      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default AgentDetails;
