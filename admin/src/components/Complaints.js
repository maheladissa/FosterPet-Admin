import React from "react";
import "../styles/Complaints.css";

const AdminComplaints = () => {
  // Sample data for the complaints list
  const complaintsData = [
    {
      id: "1",
      title: "Didn't get hourly pet update",
      customer: "Tom Cruise",
      date: "May 26, 2023, 6:30 PM",
      priority: "HIGH",
    },
    {
      id: "2",
      title: "Account changes",
      customer: "Matt Damon",
      date: "May 26, 2023, 8:00 AM",
      priority: "LOW",
    },
    {
      id: "3",
      title: "Pet update",
      customer: "Robert Downey",
      date: "May 26, 2023, 7:30 PM",
      priority: "HIGH",
    },
  ];

  return (
    <div className="container">
      <div className="content">
        <div>
          {complaintsData.map((item) => (
            <div key={item.id} className="itemContainer">
              <img
                src="https://picsum.photos/400/600?image=1"
                alt="Profile"
                className="profilePic"
              />
              <div className="detailContainer">
                <p className="title">{item.title}</p>
                <p className="subtitle">Updated 1 day ago</p>
              </div>
              <div className="infoContainer">
                <p className="customerName">{item.customer}</p>
                <p className="dateText">{item.date}</p>
                <p
                  className="priority"
                  style={{
                    color:
                      item.priority === "HIGH"
                        ? "#FF0000"
                        : item.priority === "LOW"
                        ? "#008000"
                        : "#FFA500",
                  }}
                >
                  {item.priority}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminComplaints;
