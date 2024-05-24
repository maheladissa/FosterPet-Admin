import React from "react";
import { Link } from "react-router-dom";
import "../styles/Overview.css";

const AdminOverView = () => {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="container">
      <div className="cardsContainer">
        <div className="card">
          <h2 className="cardTitle">Active Agents</h2>
          <p className="cardContent">60</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Ongoing Fosterings</h2>
          <p className="cardContent">16</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Active Users</h2>
          <p className="cardContent">43</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Completed</h2>
          <p className="cardContent">64</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminOverView;
