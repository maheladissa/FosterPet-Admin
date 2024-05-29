// src/services/AdminOverviewService.js

const API_URL = "https://fosterpet.azurewebsites.net/api/admin/dashboard";
localStorage.setItem("token" , "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhlbGExMDBAZ21haWwuY29tIiwiaWF0IjoxNzE2NDkxMTUwLCJleHAiOjE3MTY2MjA3NTB9.EMAkkdECelU5xkk4EvQu3liK27rxkZFswMWxh6Acp-4");
const Token = localStorage.getItem("token");

export const fetchDashboardData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token,
            },
        });

        if (!response.ok) {
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
