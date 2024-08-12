const API_URL = "https://fosterpet.azurewebsites.net/api/booking";
const Token = localStorage.getItem("token");

export const fetchOngoingFosterings = async () => {
    try {
        const response = await fetch(API_URL + "/status?status=ONGOING", {
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
        //console.log("OngoingFosterings data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching ongoing fosterings data:", error);
        throw error;
    }

}

export const fetchCompletedFosterings = async () => {
    try {
        const response = await fetch(API_URL + "/status?status=COMPLETED", {
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
        //console.log("OngoingFosterings data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching ongoing fosterings data:", error);
        throw error;
    }

}
