import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { name, role, detail } = location.state;

  // Remove an item from the list
  const handleCancel = (id) => {
    console.log(`cancel request for id: ${id}`);
  };

  const handleAccept = (id) => {
    console.log(`Accept request for id: ${id}`);
  };

  return (
    <div className="container">
      <div className="order_details_container">
        <div className="details_item">
          <div className="label">Name:</div>
          <div className="value">{name}</div>
        </div>
        <div className="details_item">
          <div className="label">Role:</div>
          <div className="value">{role}</div>
        </div>
        <div className="details_item">
          <div className="label">Detail:</div>
          <div className="value">{detail}</div>
        </div>
      </div>

      <div className="button-container">
        <button className="buttonSmall" onClick={() => handleCancel()}>
          Cancel Request
        </button>
        <button className="buttonSmallBlue" onClick={() => handleAccept()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
