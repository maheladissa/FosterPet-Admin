import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Overview.css";
import { fetchDashboardData } from "../services/OverviewService";
import useAuth from "../services/useAuth";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

const AdminOverView = () => {
  useAuth();

  const [dashboardData, setDashboardData] = useState({
    activeUsers: 0,
    activeAgents: 0,
    totalKennels: 0,
    totalVolunteers: 0,
    weeklyPayments: 0,
    ongoingFostering: 0,
    completedFostering: 0,
    pendingFostering: 0,
    canceledFostering: 0,
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
          totalKennels: data.totalKennels,
          totalVolunteers: data.totalVolunteers,
          weeklyPayment: data.weeklyPayment,
          pendingFostering: data.pendingFostering,
          canceledFostering: data.canceledFostering,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    getDashboardData();
    console.log(dashboardData);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div className="loading-spinner"></div>;
  }

  const pieData1 = {
    labels: ["Kennels", "Volunteers"],
    datasets: [
      {
        label: "Pie Chart 1",
        data: [dashboardData.totalKennels, dashboardData.totalVolunteers],
        backgroundColor: ["#FF6384", "#36A2EB"], // Hard colors
        borderColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Weekly Data",
        data: dashboardData.weeklyPayment,
        backgroundColor: "#FFCE56", // Hard color
        borderColor: "#FFCE56",
        borderWidth: 1,
      },
    ],
  };

  const pieData2 = {
    labels: ["Ongoing", "Completed", "Pending", "Cancled"],
    datasets: [
      {
        label: "Pie Chart 2",
        data: [
          dashboardData.ongoingFostering,
          dashboardData.completedFostering,
          dashboardData.pendingFostering,
          dashboardData.canceledFostering,
        ],
        backgroundColor: ["#E7E9ED", "#6A2135", "#FB6D03", "#2B4F70"], // Hard colors
        borderColor: ["#E7E9ED", "#6A2135", "#FB6D03", "#2B4F70"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="overview-container">
      <div className="cardsContainer">
        <div className="card">
          <h2 className="cardTitle">Active Agents</h2>
          <p className="cardContent">{dashboardData.activeAgents}</p>
          <Link to="/overview/agent" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Ongoing Fosterings</h2>
          <p className="cardContent">{dashboardData.ongoingFostering}</p>
          <Link to="/overview/ongoing" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Active Users</h2>
          <p className="cardContent">{dashboardData.activeUsers}</p>
          <Link to="/overview/users" className="button">
            View Details
          </Link>
        </div>
        <div className="card">
          <h2 className="cardTitle">Completed</h2>
          <p className="cardContent">{dashboardData.completedFostering}</p>
          <Link to="/overview/completed" className="button">
            View Details
          </Link>
        </div>
      </div>
      <div className="chartsContainer">
        <div className="chart">
          <Pie data={pieData1} />
        </div>
        <div className="chart">
          <Bar data={barData} />
        </div>
        <div className="chart">
          <Pie data={pieData2} />
        </div>
      </div>
    </div>
  );
};

export default AdminOverView;
