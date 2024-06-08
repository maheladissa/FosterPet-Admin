import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Order.css";

const AdminOrders = () => {
  const navigate = useNavigate();

  // Initial mock data
  const initialData = [
    {
      id: "1",
      name: "Nipuni Perera",
      role: "Kennel",
      detail: "kotikawaththa",
    },
    {
      id: "2",
      name: "Isuru Malikshara",
      role: "Volunteer",
      detail: "Gampaha",
    },
    {
      id: "3",
      name: "Isuru Malikshara",
      role: "Kennel",
      detail: "Kelaniya",
    },
    {
      id: "4",
      name: "Isuru Malikshara",
      role: "Volunteer",
      detail: "Kiribathgoda",
    },
  ];

  const [data, setData] = useState(initialData);

  // Log details for view and accept
  const handleViewDetails = (item) => {
    //Basically can redirect to the kennel profile
    navigate("/order-details", {
      state: { name: item.name, role: item.role, detail: item.detail },
    });
  };

  return (
    <div className="order_container">
      <div className="order_list">
        {data.map((item) => (
          <div key={item.id}>
            <div className="order_item">
              <img
                src="https://picsum.photos/400/600?image=1"
                alt="Profile"
                className="profilePic"
              />
              <div className="order_detailContainer">
                <div className="name">{item.name}</div>
                <div className="role">{item.role}</div>
                <div className="detail">{item.detail}</div>
              </div>
              <div className="order_buttonContainer">
                <button
                  className="buttonSmall"
                  onClick={() => handleViewDetails(item)}
                >
                  Review Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
