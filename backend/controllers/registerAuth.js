const User = require("../models/userSchema");
async function createUser(newInfo, res) {
  try {
    await newInfo.save();
    return res.status(201).json({ message: "User Created Succesfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
const registerAuth = async (req, res) => {
  const { firstName, lastName, email, contact, password } = req.body;
  if (!firstName || !lastName || !email || !contact || !password) {
    return res.status(400).json({ error: "All feilds are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({
      error: "User Already Exists, ",
    });
  }
  const newInfo = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    contact: contact,
    password: password,
  });
  createUser(newInfo, res);
};
module.exports = registerAuth;
