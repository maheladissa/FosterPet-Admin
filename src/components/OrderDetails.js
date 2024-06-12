import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { item } = location.state;

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
          <div className="value">{item.kennelName}</div>
        </div>
        <div className="details_item">
          <div className="label">Address:</div>
          <div className="value">
            {`${item.kennelAddress.address1} ${item.kennelAddress.address2} ${item.kennelAddress.city}, ${item.kennelAddress.zipCode}`}
          </div>
        </div>
        <div className="details_item">
          <div className="label">Owner:</div>
          <div className="value">{item.ownerName}</div>
        </div>
        <div className="details_item">
          <div className="label">Owner Email:</div>
          <div className="value">{item.ownerEmail}</div>
        </div>
        <div className="details_item">
          <div className="label">Owner Phone:</div>
          <div className="value">{item.ownerPhone}</div>
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
