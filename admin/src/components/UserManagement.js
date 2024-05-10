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

  return (
    <div className="container">
      <div className="content">
        <div>
          {users.map((item) => (
            <div key={item.id} className="itemContainer">
              <p className="name">{item.name}</p>
              <p className="detail">{item.time}</p>
              <p className="detail">{item.phone}</p>
              <button
                className="buttonSmallBlue"
                onClick={() => {
                  /* Handle Click */
                }}
              >
                <span className="buttonTextWhite">Details and Actions</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
