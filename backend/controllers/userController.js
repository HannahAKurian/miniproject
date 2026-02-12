const bcrypt = require("bcrypt");
const User = require("../models/User");

// GET PROFILE
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.rows[0]);
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  const { fullname, email } = req.body;
  await User.updateProfile(req.user.id, fullname, email);
  res.json({ message: "Profile updated" });
};

// CHANGE PASSWORD
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user.id);
  const match = await bcrypt.compare(oldPassword, user.rows[0].password);

  if (!match) {
    return res.status(400).json({ message: "Old password incorrect" });
  }

  const hashed = await bcrypt.hash(newPassword, 10);
  await User.updatePassword(req.user.id, hashed);

  res.json({ message: "Password changed successfully" });
};
