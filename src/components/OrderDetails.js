import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const location = useLocation();
  const { name, role, detail } = location.state;

  return (
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
  );
};

export default OrderDetails;
