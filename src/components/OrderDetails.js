import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/OrderDetails.css";
import {acceptRequest,rejectRequest} from "../services/KennelService";
import async from "async";

const OrderDetails = () => {
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();

  const handleCancel = (id) => {
    console.log(`Cancel request for id: ${id}`);
    try{
      const response = rejectRequest(id);
      console.log("Reject request data:", response);
      navigate("/requests");
    }
    catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const handleAccept = (id) => {
    console.log(`Accept request for id: ${id}`);
    try{
        const response = acceptRequest(id);
        console.log("Accept request data:", response);
        navigate("/requests");
    }
    catch (error) {
        console.error("Error accepting request:", error);
    }
  };

  const handleReturn = () => {
    navigate("/requests");
  };

  return (
    <div className="order-details-container">
      <div className="order-details-card">
        <h2 className="order-details-title">Order Details</h2>
        <div className="details-item">
          <span className="label">Name:</span>
          <span className="value">{item.kennelName}</span>
        </div>
        <div className="details-item">
          <span className="label">Address:</span>
          <span className="value">
            {`${item.kennelAddress.address1}, ${item.kennelAddress.address2}, ${item.kennelAddress.city}, ${item.kennelAddress.zipCode}`}
          </span>
        </div>
        <div className="details-item">
          <span className="label">Owner:</span>
          <span className="value">{item.ownerName}</span>
        </div>
        <div className="details-item">
          <span className="label">Owner Email:</span>
          <span className="value">{item.ownerEmail}</span>
        </div>
        <div className="details-item">
          <span className="label">Owner Phone:</span>
          <span className="value">{item.ownerPhone}</span>
        </div>

        <div className="button-container">
          <button className="button button-return" onClick={handleReturn}>
            Go Back
          </button>
          <button
            className="button button-cancel"
            onClick={() => handleCancel(item.kennelId)}
          >
            Cancel Request
          </button>
          <button
            className="button button-accept"
            onClick={() => handleAccept(item.kennelId)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
