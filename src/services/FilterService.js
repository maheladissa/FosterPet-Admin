const API_URL = "https://fosterpet.azurewebsites.net/api/admin/period-filter";
const Token = localStorage.getItem("token");

export const fetchFilterData = async (startDate, endDate) => {
    try {
        const url = `${API_URL}?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;

        const response = await fetch(url, {
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
        console.log("Filtered data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching filtered data:", error);
        throw error;
    }
};
