import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserManagement.css";
import {fetchAllUsers} from "../services/UserService";

const AdminUserManagement = () => {
  const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const loadUsersData = async () => {
      try {
        const response = await fetchAllUsers();
        console.log("Users:", response);
        const usersData = response; // Ensure this matches your actual response structure
        setUsersData(usersData);
      } catch (error) {
        console.error("Error fetching pending approvals:", error);
      }
    };

    loadUsersData();
  }, []);

  const [data, setData] = useState(usersData);

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
