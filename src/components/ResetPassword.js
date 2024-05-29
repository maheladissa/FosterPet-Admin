import React, { useState } from "react";
import "../styles/ResetPassword.css";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleReset = () => {
    setEmailError("");

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
      setEmailError("Email is required.");
      return;
    } else if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Call the reset password function
  };

  const handleResend = () => {
    // Call resend email function
  };

  return (
    <div className="container">
      <h1 className="title">Reset Password</h1>
      <input
        className="input"
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {emailError && <p className="error">{emailError}</p>}

      <button className="button" onClick={handleReset}>
        Send reset link
      </button>

      <p>
        Didn't get the Email?{" "}
        <span className="resend" onClick={handleResend}>
          Resend
        </span>
      </p>
    </div>
  );
};

export default ResetPasswordScreen;
