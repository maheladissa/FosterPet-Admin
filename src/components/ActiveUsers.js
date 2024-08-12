import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {fetchActiveUsers} from "../services/UserService";

const ActiveUsers = () => {

    const [activeUsers, setActiveUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // Setting startTime to the Unix epoch start
    const [startTime, setStartTime] = useState(new Date(0).toISOString());

    // Setting endTime to the current date and time
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
    } , [startTime, endTime]);

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
