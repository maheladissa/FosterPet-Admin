import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { userData } = location.state;

  const messageUser = (id) => {
    console.log(`Message user with user ID: ${id}`);
  };

  const handleRemoveUser = (id) => {
    console.log(`Removed user with user ID: ${id}`);
  };

  return (
    <div className="order_details_container">
      <div className="details_item">
        <div className="label">Name:</div>
        <div className="value">
          {userData.firstName}
          {userData.lastName}
        </div>
      </div>
      <div className="details_item">
        <div className="label">Email:</div>
        <div className="value">{userData.email}</div>
      </div>
      <div className="details_item">
        <div className="label">Phone:</div>
        <div className="value">{userData.phoneNumber}</div>
      </div>
      <button
        className="buttonSmallBlue"
        onClick={() => messageUser(userData.userId)}
      >
        <span className="buttonTextWhite">Message</span>
      </button>

      <button
        className="buttonSmallBlue"
        onClick={() => handleRemoveUser(userData.userId)}
      >
        <span className="buttonTextWhite">Remove</span>
      </button>
    </div>
  );
};

export default OrderDetails;
