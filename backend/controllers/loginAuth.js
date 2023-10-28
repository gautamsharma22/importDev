const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const loginAuth = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "All feilds are required" });
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ error: "User not found with this email" });
  }
  const { firstName, lastName } = existingUser;
  const hashedPass = existingUser.password;
  bcrypt.compare(password, hashedPass, (err, response) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (response) {
      const fullName = firstName + " " + lastName;
      const { _id } = existingUser;
      const token = jwt.sign({ fullName, email, _id }, process.env.SECRET_KEY);
      return res.status(200).json({
        message: "Logged in succesfully",
        fullName: fullName,
        token: token,
      });
    } else {
      return res.status(401).json({
        error: "Credentials don't match, ",
      });
    }
  });
};
module.exports = loginAuth;
