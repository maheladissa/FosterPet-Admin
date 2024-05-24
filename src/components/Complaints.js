import React, { useState } from "react";
import "../styles/Complaints.css";

const AdminComplaints = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("ALL");

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
    {
      id: "4",
      title: "Didn't get hourly pet update",
      customer: "Tom Cruise",
      date: "May 26, 2023, 6:30 PM",
      priority: "HIGH",
    },
    {
      id: "5",
      title: "Account changes",
      customer: "Matt Damon",
      date: "May 26, 2023, 8:00 AM",
      priority: "MEDIUM",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setPriorityFilter(event.target.value);
  };

  const filteredComplaints = complaintsData.filter(
    (complaint) =>
      (complaint.priority === priorityFilter || priorityFilter === "ALL") &&
      (complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.customer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="overview_container">
      <div className="searchAndFilter">
        <input
          type="text"
          placeholder="Search by title or customer..."
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <select onChange={handleFilterChange} value={priorityFilter}>
          <option value="ALL">All Priorities</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>
      <div className="overview_content">
        {filteredComplaints.map((item) => (
          <div key={item.id} className="overview_items">
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
  );
};

export default AdminComplaints;
