import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

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
    <div className="form-container">
      <h1 className="title">Register</h1>
      {error && <p className="error">{error}</p>}
      <input
        className="input"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      {firstNameError && <p className="error">{firstNameError}</p>}
      <input
        className="input"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      {lastNameError && <p className="error">{lastNameError}</p>}
      <input
        className="input"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {emailError && <p className="error">{emailError}</p>}
      <input
        className="input"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      {passwordError && <p className="error">{passwordError}</p>}
      <input
        className="input"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        type="password"
      />
      {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
      <button className="button" onClick={handleRegister}>
        Register
      </button>
      <p className="login-text">
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterScreen;
