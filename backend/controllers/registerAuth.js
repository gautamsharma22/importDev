const registerAuth = (req, res) => {
  console.log(req.body);
  res.send("Register Route Working");
};
module.exports = registerAuth;
