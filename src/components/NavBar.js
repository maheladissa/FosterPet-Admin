import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/overview" end activeClassName="active">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" activeClassName="active">
            Kennel requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/complaints" activeClassName="active">
            Complaints
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-management">User Management</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
