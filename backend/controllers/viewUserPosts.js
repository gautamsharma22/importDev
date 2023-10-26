const Post = require("../models/postSchema");
const viewUserPosts = async (req, res) => {
    const { userId } = req.params;
  try {
    const posts = await Post.find({ postedBy: userId });
    return res.status(200).json({ posts });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
module.exports = viewUserPosts;
