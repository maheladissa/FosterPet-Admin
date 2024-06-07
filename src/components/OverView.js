import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Overview.css";
import { fetchDashboardData } from "../services/OverviewService";
import useAuth from "../services/useAuth";

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

  useAuth();

  const [dashboardData, setDashboardData] = useState({
    activeAgents: 0,
    ongoingFostering: 0,
    activeUsers: 0,
    completedFostering: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData({
          activeAgents: data.activeAgents,
          ongoingFostering: data.ongoingFostering,
          activeUsers: data.activeUsers,
          completedFostering: data.completedFostering,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getDashboardData();
  }, []);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  return (
    <div className="container">
      <div className="cardsContainer">
        <div className="card">
          <h2 className="cardTitle">Active Agents</h2>
          <p className="cardContent">{dashboardData.activeAgents}</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Ongoing Fosterings</h2>
          <p className="cardContent">{dashboardData.ongoingFostering}</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Active Users</h2>
          <p className="cardContent">{dashboardData.activeUsers}</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Completed</h2>
          <p className="cardContent">{dashboardData.completedFostering}</p>
          <Link to="/details" className="button">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminOverView;
