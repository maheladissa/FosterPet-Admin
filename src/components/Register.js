import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
// import AuthenticationService from '../services/AuthenticationService';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validation and registration logic
    setConfirmPasswordError("");
    setPasswordError("");
    setEmailError("");
    setLastNameError("");
    setFirstNameError("");
    setError("");
  };

  return (
    <div className="login-container">
      <div className="login-well">
        <form>
          <hgroup>
            <h1>Register</h1>
          </hgroup>

          {error && <div className="error">{error}</div>}

          <div>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {firstNameError && <div className="error">{firstNameError}</div>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {lastNameError && <div className="error">{lastNameError}</div>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            {confirmPasswordError && (
              <div className="error">{confirmPasswordError}</div>
            )}
          </div>

          <button className="button" onClick={handleRegister}>
            Register
          </button>
          <p className="login-text">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
      <div className="login-illustration"></div>
    </div>
  );
};

export default RegisterScreen;
