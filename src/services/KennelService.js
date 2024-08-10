const API_URL = "https://fosterpet.azurewebsites.net/api/kennel/";
const Token = localStorage.getItem("token");

export const fetchPendingApprovals = async () => {
    try {
        const response = await fetch(API_URL+"pending", {
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

export const acceptRequest = async (id) => {
    try {
        const response = await fetch(`${API_URL}approve?kennelId=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token,
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Accept request data:", data);
        return data;
    } catch (error) {
        console.error("Error accepting request:", error);
        throw error;
    }
}

export const rejectRequest = async (id) => {
    try {
        const response = await fetch(`${API_URL}reject?kennelId=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": Token,
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Reject request data:", data);
        return data;
    } catch (error) {
        console.error("Error rejecting request:", error);
        throw error;
    }
}
