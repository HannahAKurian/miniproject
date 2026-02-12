const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const user = require("../controllers/userController");

router.get("/profile", auth, user.getProfile);
router.put("/profile", auth, user.updateProfile);
router.put("/change-password", auth, user.changePassword);

module.exports = router;
