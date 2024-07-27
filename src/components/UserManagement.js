import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserManagement.css";
import { fetchAllUsers } from "../services/UserService";

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

  // const [data, setData] = useState(usersData);

  const handleUserDetails = (userData) => {
    navigate(`/user-details/${userData.userId}`, { state: { userData } });
  };

  // const messageUser = (id) => {
  //   console.log(`Message user with user ID: ${id}`);
  // };

  // const handleRemoveUser = (id) => {
  //   setData(data.filter((item) => item.userId !== id));
  //   console.log(`Removed user with user ID: ${id}`);
  // };

  return (
    <div className="user_container">
      <div className="user_content">
        {usersData.map((user) => (
          <div
            key={user.userId}
            className="user_itemContainer"
            onClick={() => handleUserDetails(user)}
          >
            <p className="name">
              {user.firstName}
              {user.lastName}
            </p>
            <p className="detail">{user.email}</p>
            <p className="detail">{user.phoneNumber}</p>
            {/* 

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
              onClick={() => handleRemoveUser(user.userId)}
            >
              <span className="buttonTextWhite">Remove</span>
            </button>
            */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserManagement;
