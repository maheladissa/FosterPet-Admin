import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();

  const handleCancel = (id) => {
    console.log(`Cancel request for id: ${id}`);
  };

  const handleAccept = (id) => {
    console.log(`Accept request for id: ${id}`);
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
            onClick={() => handleCancel(item.id)}
          >
            Cancel Request
          </button>
          <button
            className="button button-accept"
            onClick={() => handleAccept(item.id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
