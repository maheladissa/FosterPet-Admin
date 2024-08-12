const API_URL = "https://fosterpet.azurewebsites.net/api/user";
const Token = localStorage.getItem("token");

export const fetchAllUsers = async () => {
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
        //console.log("PendingApprovals data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        throw error;
    }

};

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/delete?id=${userId}`, {
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
        console.log("Deleted user data:", data);
        return data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

export const fetchActiveUsers = async (startTime, endTime) => {
    try {
        const response = await fetch(API_URL + `/time-period?startDate=${startTime}&endDate=${endTime}`, {
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
}
