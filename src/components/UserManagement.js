import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserManagement.css";

const AdminUserManagement = () => {
  const navigate = useNavigate();

  const users = [
    {
      name: "Nipuni Perera",
      time: "Mon - Sat: 8am - 7pm",
      phone: "123-456-7890",
      id: 1,
    },
    {
      name: "Isuru mal",
      time: "Mon - Sat: 8am - 7pm",
      phone: "123-456-7890",
      id: 2,
    },
    {
      name: "Mahela Dissa",
      time: "Mon - Sat: 8am - 7pm",
      phone: "123-456-7890",
      id: 3,
    },
    {
      name: "Sachin Thara",
      time: "Mon - Sat: 8am - 7pm",
      phone: "123-456-7890",
      id: 4,
    },
  ];

  const [data, setData] = useState(users);

  const handleUserDetails = (item) => {
    navigate("/user-details", {
      state: { name: item.name, time: item.time, phone: item.phone },
    });
  };

  const messageUser = (id) => {
    console.log(`Message user with user ID: ${id}`);
  };

  const handleRemoveUser = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log(`Removed user with user ID: ${id}`);
  };

  return (
    <div className="user_container">
      <div className="user_content">
        {data.map((user) => (
          <div key={user.id} className="user_itemContainer">
            <p className="name">{user.name}</p>
            <p className="detail">{user.time}</p>
            <p className="detail">{user.phone}</p>
            <button
              className="buttonSmallBlue"
              onClick={() => handleUserDetails(user)}
            >
              <span className="buttonTextWhite">Details</span>
            </button>

            <button
              className="buttonSmallBlue"
              onClick={() => messageUser(user.id)}
            >
              <span className="buttonTextWhite">Message</span>
            </button>

            <button
              className="buttonSmallBlue"
              onClick={() => handleRemoveUser(user.id)}
            >
              <span className="buttonTextWhite">Remove</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserManagement;
