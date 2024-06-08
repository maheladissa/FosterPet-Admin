const API_URL = "https://fosterpet.azurewebsites.net/api";
const Token = localStorage.getItem("token");

export const fetchPendingApprovals = async () => {
    try {
        const response = await fetch(API_URL+"/kennel/pending", {
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
        //console.log("PendingApprovals data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        throw error;
    }
};
