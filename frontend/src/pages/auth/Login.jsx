import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../styles/auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await api.post("/auth/login", { email, password });

    if (res.data.role === "admin") {
      navigate("/admin");
    } else if (res.data.role === "owner") {
      navigate("/owner");
    } else {
      navigate("/customer");
}
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome to Grab'N'Go</h2>
        <p className="auth-subtitle">Sign in to continue</p>

        <input
          className="auth-input"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" onClick={login}>
          Sign In
        </button>

        <div className="auth-footer">
          Don’t have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}
