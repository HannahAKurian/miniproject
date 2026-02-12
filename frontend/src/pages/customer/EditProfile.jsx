import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [form, setForm] = useState({ fullname: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/user/profile").then(res => setForm(res.data));
  }, []);

  const update = async () => {
    await api.put("/user/profile", form);
    alert("Profile updated");
    navigate("/profile");
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>

      <input
        placeholder="Full Name"
        value={form.fullname}
        onChange={e => setForm({ ...form, fullname: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <button onClick={update}>Save</button>
    </div>
  );
}
