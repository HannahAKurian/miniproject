import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [oldPassword, setOld] = useState("");
  const [newPassword, setNew] = useState("");
  const navigate = useNavigate();

  const change = async () => {
    await api.put("/user/change-password", {
      oldPassword,
      newPassword,
    });
    alert("Password changed");
    navigate("/profile");
  };

  return (
    <div className="container">
      <h2>Change Password</h2>

      <input
        type="password"
        placeholder="Old Password"
        onChange={e => setOld(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        onChange={e => setNew(e.target.value)}
      />

      <button onClick={change}>Update Password</button>
    </div>
  );
}
