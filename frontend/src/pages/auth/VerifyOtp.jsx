import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../../styles/auth.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const email = params.get("email");

  const verify = async () => {
    await api.post("/auth/verify-otp", { email, otp });
    alert("OTP verified");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Verify OTP</h2>
        <p className="auth-subtitle">
          Enter the OTP sent to <b>{email}</b>
        </p>

        <input
          className="auth-input"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="auth-button" onClick={verify}>
          Verify
        </button>
      </div>
    </div>
  );
}
