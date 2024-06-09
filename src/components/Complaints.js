import React, {useEffect, useState} from "react";
import "../styles/Complaints.css";
import { useNavigate } from "react-router-dom";
import { fetchComplaintsData } from "../services/ComplaintService";

const AdminComplaints = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const navigate = useNavigate();
  const [complaintsData, setComplaintsData] = useState([]);

  useEffect(() => {
    const loadComplaintsData = async () => {
      try {
        const response = await fetchComplaintsData();
        console.log("Pending approvals:", response);
        const complaintsData = response; // Ensure this matches your actual response structure
        setComplaintsData(complaintsData);
      } catch (error) {
        console.error("Error fetching pending approvals:", error);
      }
    };

    loadComplaintsData();
  }, []);

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

  const handleClick = (complaint) => {
    navigate(`/complaint/${complaint.id}`, { state: { complaint } });
  };

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
          <div
            key={item.id}
            className="overview_items"
            onClick={() => handleClick(item)}
          >
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
