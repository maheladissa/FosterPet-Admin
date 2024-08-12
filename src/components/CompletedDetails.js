import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCompletedFosterings } from "../services/FosteringService";

const CompletedDetails = () => {
  const [completedFostering, setCompletedFostering] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompletedFosterings()
      .then((data) => {
        setCompletedFostering(data);
        setLoading(false);
        console.log("CompletedFosterings data:", data);
      })
      .catch((error) => {
        console.error("Error fetching completed fosterings data:", error);
      });
  }, []);

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
