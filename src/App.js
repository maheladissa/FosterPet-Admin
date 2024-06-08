import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/requests" element={<Orders />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/complaint/:id" element={<ComplaintDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
