import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCompletedFosterings } from "../services/FosteringService";
import "../styles/CompletedDetails.css";

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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-header">Completed Fosterings Details</h1>
      <div className="detail-content">
        {completedFostering.length === 0 ? (
          <p>No completed fosterings at the moment.</p>
        ) : (
          completedFostering.map((fostering) => (
            <div key={fostering.bookingID} className="completed-detail-item">
              <h2>Fostering ID: {fostering.bookingID}</h2>
              <p>
                <strong>Pet Name:</strong> {fostering.pet.petName}
              </p>
              <p>
                <strong>Pet Type:</strong> {fostering.pet.petType}
              </p>
              <p>
                <strong>Owner:</strong> {fostering.owner.firstName}{" "}
                {fostering.owner.lastName}
              </p>
              <p>
                <strong>Kennel:</strong>{" "}
                {fostering.kennel ? fostering.kennel.kennelName : "N/A"}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(fostering.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {new Date(fostering.endDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {fostering.status}
              </p>
              <p>
                <strong>Rate:</strong> ${fostering.rate}
              </p>
              <p>
                <strong>Total:</strong> ${fostering.total}
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

export default CompletedDetails;
