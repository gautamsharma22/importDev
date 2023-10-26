const express = require("express");
const createPost = require("../controllers/createPost");
const viewAllPosts = require("../controllers/viewAllPosts");
const viewUserPosts = require("../controllers/viewUserPosts");
const router = express.Router();
router.get("/", viewAllPosts);
router.get("/:userId", viewUserPosts);
router.post("/create", createPost);
module.exports = router;
