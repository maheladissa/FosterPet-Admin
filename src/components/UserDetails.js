import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { name, time, phone } = location.state;

  return (
    <div className="order_details_container">
      <div className="details_item">
        <div className="label">Name:</div>
        <div className="value">{name}</div>
      </div>
      <div className="details_item">
        <div className="label">Time:</div>
        <div className="value">{time}</div>
      </div>
      <div className="details_item">
        <div className="label">Phone:</div>
        <div className="value">{phone}</div>
      </div>
    </div>
  );
};

export default OrderDetails;
