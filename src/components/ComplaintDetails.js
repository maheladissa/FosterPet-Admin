import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/Complaintdetails.css";

const ComplaintDetail = () => {
  const location = useLocation();
  const { complaint } = location.state;

  return (
    <div className="container">
      <div className="header">
        {complaint.title}{" "}
        <div
          className={`detail-item priority priority-${complaint.priority.toLowerCase()}`}
        >
          {complaint.priority}
        </div>
      </div>

      <div className="detail-item">
        <span>Customer: </span>
        {complaint.customer}
      </div>
      <div className="detail-item">
        <span>Date: </span>
        {complaint.date}
      </div>

      <div className="buttons">
        <button className="button discard">Discard</button>
        <button className="button contact">Contact</button>
      </div>
    </div>
  );
};

export default ComplaintDetail;
