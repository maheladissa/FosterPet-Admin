import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchActiveUsers } from "../services/UserService";
import "../styles/ActiveUsers.css";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
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

    fetchActiveUsers(formattedStartTime, formattedEndTime)
      .then((data) => {
        setActiveUsers(data);
        console.log("Active users data:", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching active users:", error);
        setLoading(false);
      });
  }, [startTime, endTime]);

  return (
    <div className="detail-container">
      <h1 className="detail-header">Active User Details</h1>

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
        <div className="loading-text">Loading...</div>
      ) : activeUsers.length === 0 ? (
        <div className="no-data-text">No active users at the moment.</div>
      ) : (
        <div className="detail-content">
          {activeUsers.map((user) => (
            <div key={user.userId} className="user-details">
              <h2>User ID: {user.userId}</h2>
              <p>
                <strong>First Name:</strong> {user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone Number:</strong>{" "}
                {user.phoneNumber ? user.phoneNumber : "N/A"}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
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

export default ActiveUsers;
