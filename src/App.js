import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Orders from "./components/Orders";
import Complaints from "./components/Complaints";
import Overview from "./components/OverView";
import UserManagement from "./components/UserManagement";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import OrderDetails from "./components/OrderDetails";
import UserDetails from "./components/UserDetails";
import ComplaintDetail from "./components/ComplaintDetails";
import AgentDetails from "./components/AgentDetails";
import OngoingFosterings from "./components/OngoingFosterings";
import ActiveUsers from "./components/ActiveUsers";
import CompletedDetails from "./components/CompletedDetails";

function App() {
  const location = useLocation();

  const hideHeaderPaths = ["/login", "/register", "/reset"];
  return (
    <div className="App">
      <header className="App-header">
        {!hideHeaderPaths.includes(location.pathname) && <Navbar />}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/requests" element={<Orders />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/complaint/:id" element={<ComplaintDetail />} />
          <Route path="/overview/agent" element={<AgentDetails />} />
          <Route path="/overview/ongoing" element={<OngoingFosterings />} />
          <Route path="/overview/users" element={<ActiveUsers />} />
          <Route path="/overview/completed" element={<CompletedDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
