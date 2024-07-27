import React, { useState } from "react";
import "../styles/Login.css";
import AuthenticationService from "../services/AuthenticationService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError("");
    setPasswordError("");
    setError("");

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      setLoading(false);
      setEmailError("Email is required.");
      return;
    } else if (!regex.test(email)) {
      setLoading(false);
      setEmailError("Please enter a valid email address.");
      return;
    } else if (!password) {
      setLoading(false);
      setPasswordError("Password is required.");
      return;
    }

    try {
      const userData = await AuthenticationService.login(email, password);
      const token = `Bearer ${userData.token}`;
      const createdAt = new Date().toISOString();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

      localStorage.setItem("token", token);
      localStorage.setItem("tokenCreatedAt", createdAt);
      localStorage.setItem("tokenExpiresAt", expiresAt);
      localStorage.setItem("userId", userData.userId);

      await new Promise((resolve) => setTimeout(resolve, 100));

      navigate("/overview");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError("Invalid Email Address or Password");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-well">
        <form onSubmit={handleLogin}>
          <hgroup>
            <h1>Welcome back!</h1>
            <h2>Log in to your account.</h2>
          </hgroup>

          {error && <div className="error">{error}</div>}

          <div>
            <input
              type="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="login-email">Email</label>
            {emailError && <div className="error">{emailError}</div>}
          </div>

          <div>
            <input
              type="password"
              id="login-pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="login-pwd">Password</label>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>

          <a href="#" id="forgot-pwd" onClick={() => navigate("/reset")}>
            Forgot Password?
          </a>

          <button
            type="submit"
            className={`button ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            <span className="button--text">Log In</span>
            <div className="button--loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/register")}>
            Sign Up
          </a>
          .
        </p>
      </div>
      <div className="login-illustration"></div>
    </div>
  );
};

export default LoginComponent;
