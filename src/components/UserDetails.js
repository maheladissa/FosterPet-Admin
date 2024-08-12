import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/UserDetails.css";
import { useNavigate } from "react-router-dom";
import { deleteUser} from "../services/UserService";

const UserDetails = () => {
  const location = useLocation();
  const { userData } = location.state;
  const navigate = useNavigate();

  const messageUser = (id) => {
    console.log(`Message user with user ID: ${id}`);
  };

  const handleRemoveUser = (id) => {
    deleteUser(id).then(r => {console.log(`Removed user: ${r}`);});

  };

  const goToUsers = (id) => {
    navigate("/user-management");
  };

  return (
    <div className="user-details-container">
      <div className="user-details-card">
        <h2 className="user-details-title">User Details</h2>
        <div className="details-item">
          <span className="label">Name:</span>
          <span className="value">
            {userData.firstName} {userData.lastName}
          </span>
        </div>
        <div className="details-item">
          <span className="label">Email:</span>
          <span className="value">{userData.email}</span>
        </div>
        <div className="details-item">
          <span className="label">Phone:</span>
          <span className="value">{userData.phoneNumber}</span>
        </div>
        <div className="details-item">
          <span className="label">Address:</span>
          <span className="value">{userData.address}</span>
        </div>
        <div className="details-item">
          <span className="label">User Id:</span>
          <span className="value">{userData.userId}</span>
        </div>
        <div className="button-container">
          <button className="button button-back" onClick={() => goToUsers()}>
            Back
          </button>
          <button
            className="button button-message"
            onClick={() => messageUser(userData.userId)}
          >
            Message
          </button>
          <button
            className="button button-remove"
            onClick={() => handleRemoveUser(userData.userId)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
