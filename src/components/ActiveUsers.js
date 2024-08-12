import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchActiveUsers } from "../services/UserService";
import "../styles/ActiveUsers.css";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState(new Date(0).toISOString());
  const [endTime, setEndTime] = useState(new Date().toISOString());

  useEffect(() => {
    fetchActiveUsers(startTime, endTime)
      .then((data) => {
        setActiveUsers(data);
        console.log(startTime, endTime);
        console.log("Active users data:", data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching active users:", error);
        setLoading(false);
      });
  }, [startTime, endTime]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-header">Active User Details</h1>
      <div className="detail-content">
        {activeUsers.length === 0 ? (
          <p>No active users at the moment.</p>
        ) : (
          activeUsers.map((user) => (
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
          ))
        )}
      </div>
      <Link to="/overview" className="back-link">
        Back to Overview
      </Link>
    </div>
  );
};

export default ActiveUsers;
