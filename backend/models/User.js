const pool = require("../config/db");

exports.createUser = (data) => {
  const { fullname, email, password, role, otp, otp_expiry } = data;
  return pool.query(
    `INSERT INTO users(fullname,email,password,role,otp,otp_expiry)
     VALUES($1,$2,$3,$4,$5,$6)`,
    [fullname, email, password, role, otp, otp_expiry]
  );
};

exports.findByEmail = (email) => {
  return pool.query("SELECT * FROM users WHERE email=$1", [email]);
};

exports.verifyUser = (email) => {
  return pool.query(
    "UPDATE users SET is_verified=true, otp=NULL WHERE email=$1",
    [email]
  );
};
exports.findById = (id) => {
  return pool.query(
    "SELECT id, fullname, email, role FROM users WHERE id=$1",
    [id]
  );
};

exports.updateProfile = (id, fullname, email) => {
  return pool.query(
    "UPDATE users SET fullname=$1, email=$2 WHERE id=$3",
    [fullname, email, id]
  );
};

exports.updatePassword = (id, password) => {
  return pool.query(
    "UPDATE users SET password=$1 WHERE id=$2",
    [password, id]
  );
};
