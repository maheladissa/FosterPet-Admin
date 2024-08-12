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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-header">Ongoing Fostering Details</h1>
      <div className="detail-content">
        {ongoingFostering.length === 0 ? (
          <p>No ongoing fosterings at the moment.</p>
        ) : (
          ongoingFostering.map((fostering) => (
            <div key={fostering.bookingID} className="fostering-details">
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
                <strong>Volunteer:</strong> {fostering.volunteer.volunteerName}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(fostering.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {new Date(fostering.endDate).toLocaleDateString()}
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

export default OngoingFosterings;
