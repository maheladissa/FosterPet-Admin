import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Complaintdetails.css";

const ComplaintDetail = () => {
  const location = useLocation();
  const { complaint } = location.state;

  const discardComplaint = () => {

  }

  const contactUser = () => {

  }

  return (
    <div className="container">
      <div className="header">
        {complaint.message}{" "}
        <span
          className="priority"
          style={{
            color:
              complaint.status === "PENDING"
                ? "#FF0000"
                : complaint.status === "COMPLETED"
                ? "#008000"
                : "#FFA500",
          }}
        >
          {complaint.status}
        </span>
      </div>
      <div className="detail-item">
        <span>Kennel: </span>
        {complaint.kennelName}
      </div>

      <div className="detail-item">
        <span>Customer: </span>
        {complaint.userName}
      </div>
      <div className="detail-item">
        <span>Date: </span>
        {complaint.createdAt}
      </div>

      <div className="buttons">
        <button className="button discard" onClick={discardComplaint}>Discard</button>
        <button className="button contact" onClick={contactUser}>Contact</button>
      </div>
    </div>
  );
};

export default ComplaintDetail;
