// src/services/AdminOverviewService.js

const API_URL = "https://fosterpet.azurewebsites.net/api/admin/dashboard";
const Token = localStorage.getItem("token");

export const fetchDashboardData = async () => {
    console.log(Token)
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token,
            },
        });

        if (!response.ok) {
            console.log("Response:", response);
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Dashboard data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        throw error;
    }
};
