const API_URL = 'https://fosterpet.azurewebsites.net/api/volunteers';
const Token = localStorage.getItem("token");
export const fetchActiveVolunteers = async (startTime, endTime) => {
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
        console.log("ActiveVolunteers data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching active volunteers:", error);
        throw error;
    }
}
