import React from "react";
import "../styles/Order.css";
const AdminOrders = () => {
  // Mock data
  const data = [
    { id: "1", name: "Nipuni Perera", role: "Kennel", detail: "Test data" },
    {
      id: "2",
      name: "Isuru Malikshara",
      role: "Volunteer",
      detail: "Test data",
    },
    {
      id: "3",
      name: "Isuru Malikshara",
      role: "Volunteer",
      detail: "Test data",
    },
    {
      id: "4",
      name: "Isuru Malikshara",
      role: "Volunteer",
      detail: "Test data",
    },
  ];

  return (
    <div className="container">
      <div className="content">
        <ul>
          {data.map((item) => (
            <li key={item.id} className="itemContainer">
              <img
                src="https://picsum.photos/400/600?image=1"
                alt="Profile"
                className="profilePic"
              />
              <div className="detailContainer">
                <div className="name">{item.name}</div>
                <div className="role">{item.role}</div>
                <div className="detail">{item.detail}</div>
              </div>
              <div className="buttonContainer">
                <button className="buttonSmall">View Details</button>
                <button className="buttonSmall">Cancel Request</button>
                <button className="buttonSmallBlue">Accept</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminOrders;
