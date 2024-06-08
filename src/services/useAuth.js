import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isTokenValid = () => {
    const token = localStorage.getItem("token");
    const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");

    if (!token || !tokenExpiresAt) {
        return false;
    }

    const now = new Date();
    const expiryDate = new Date(tokenExpiresAt);

    return now < expiryDate;
};


const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isTokenValid()) {
            navigate("/login");
        }
    }, [navigate]);
};

export default useAuth;
