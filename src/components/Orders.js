import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Order.css";
import { fetchPendingApprovals } from "../services/ApprovalService";

const AdminOrders = () => {
  const navigate = useNavigate();

  const [pendingApprovals, setPendingApprovals] = useState([]);

  useEffect(() => {
    const loadPendingApprovals = async () => {
      try {
        const response = await fetchPendingApprovals();
        console.log("Pending approvals:", response);
        const pendingApprovals = response; // Ensure this matches your actual response structure
        setPendingApprovals(pendingApprovals);
      } catch (error) {
        console.error("Error fetching pending approvals:", error);
      }
    };

    loadPendingApprovals();
  }, []);

  // Remove an item from the list
  const handleCancel = (id) => {
    setPendingApprovals(
      pendingApprovals.filter((item) => item.kennelId !== id)
    );
  };

  // Log details for view and accept
  const handleViewDetails = (item) => {
    navigate("/order-details", {
      state: {
        name: item.kennelName,
        role: item.ownerName,
        detail: `${item.kennelAddress.address1} ${item.kennelAddress.address2} ${item.kennelAddress.city}, ${item.kennelAddress.zipCode}`,
      },
    });
  };

  return (
    <div className="order_container">
      <div className="order_list">
        {pendingApprovals.length === 0 ? (
          <div>No pending approvals</div>
        ) : (
          pendingApprovals.map((item) => (
            <div key={item.kennelId}>
              <div className="order_item">
                <img
                  src={
                    item.images && item.images[0]
                      ? item.images[0]
                      : "https://picsum.photos/400/600?image=1"
                  }
                  alt="Profile"
                  className="profilePic"
                />
                <div className="order_detailContainer">
                  <div className="name">{item.kennelName}</div>
                  <div className="role">{item.ownerName}</div>
                  <div className="detail">
                    {`${item.kennelAddress.address1} ${item.kennelAddress.address2} ${item.kennelAddress.city}, ${item.kennelAddress.zipCode}`}
                  </div>
                </div>
                <div className="order_buttonContainer">
                  <button
                    className="buttonSmall"
                    onClick={() => handleViewDetails(item)}
                  >
                    Review Now
                  </button>
                  <button
                    className="buttonSmall"
                    onClick={() => handleCancel(item.kennelId)}
                  >
                    Cancel Request
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
