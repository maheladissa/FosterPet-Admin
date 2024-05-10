import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
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
      <div className="content">
        <div className="cardsContainer">
          <div className="card">
            <h2 className="cardTitle">Active Agents</h2>
            <p className="cardContent">60</p>
          </div>
          <div className="card">
            <h2 className="cardTitle">Ongoing Fosterings</h2>
            <p className="cardContent">16</p>
          </div>
          <div className="card">
            <h2 className="cardTitle">Active Users</h2>
            <p className="cardContent">43</p>
          </div>
          <div className="card">
            <h2 className="cardTitle">Completed</h2>
            <p className="cardContent">64</p>
          </div>
        </div>

        <Link to="/details" className="button">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AdminOverView;
