import React from "react";
import "../styles/UserManagement.css"; // Assuming you have CSS in a separate file

const AdminUserManagement = () => {
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

  const handleUserDetails = (id) => {
    // You might want to handle more logic here, such as opening a modal with user details
    console.log(`Details for user ID: ${id}`);
  };

  const messageUser = (id) => {
    console.log(`Message user with user ID: ${id}`);
  };

  const handleRemoveUser = (id) => {
    console.log(`Remove user with user ID: ${id}`);
  };

  return (
    <div className="user_container">
      <div className="user_content">
        {users.map((user) => (
          <div key={user.id} className="user_itemContainer">
            <p className="name">{user.name}</p>
            <p className="detail">{user.time}</p>
            <p className="detail">{user.phone}</p>
            <button
              className="buttonSmallBlue"
              onClick={() => handleUserDetails(user.id)}
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
