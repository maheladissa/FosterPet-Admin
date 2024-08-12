import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOngoingFosterings } from "../services/FosteringService";

const OngoingFosterings = () => {
  const [ongoingFostering, setOngoingFostering] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOngoingFosterings()
      .then((data) => {
        setOngoingFostering(data);
        setLoading(false);
        console.log("OngoingFosterings data:", data);
      })
      .catch((error) => {
        console.error("Error fetching ongoing fosterings data:", error);
      });
  }, []);

  return (
    <div className="detail-container">
      <h1 className="detail-header">Ongoing Fostering Details</h1>
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
