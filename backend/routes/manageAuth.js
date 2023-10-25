const express = require("express");
const loginAuth = require("../controllers/loginAuth");
const registerAuth = require("../controllers/registerAuth");
const router = express.Router();

router.post("/login", loginAuth);
router.post("/register", registerAuth);

module.exports = router;
