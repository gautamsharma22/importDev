const jwt = require("jsonwebtoken");
const verifyJWT = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ error: "Invalid Token Provided" });
    }
    token = token.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = verifyJWT;
