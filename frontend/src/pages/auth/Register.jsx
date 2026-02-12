import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../styles/auth.css";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "customer",
  });

  const navigate = useNavigate();

  const submit = async () => {
    await api.post("/auth/register", form);
    navigate("/verify-otp?email=" + form.email);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">
          Join us and get started 🚀
        </p>

        <input
          className="auth-input"
          placeholder="Full name"
          value={form.fullname}
          onChange={(e) =>
            setForm({ ...form, fullname: e.target.value })
          }
        />

        <input
          className="auth-input"
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          className="auth-input"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="customer">Customer</option>
          <option value="owner">Owner</option>
        </select>

        <button className="auth-button" onClick={submit}>
          Register
        </button>

        <div className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
}
