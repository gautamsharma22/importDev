const Posts = require("../models/postSchema");
const likePost = async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const updatedPost = await Posts.findOneAndUpdate(
      { _id: postId },
      { $push: { likedBy: userId } }
    );
    res.status(201).json({ message: "Liked the Post" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const unlikePost = async (req, res) => {
    const { postId, userId } = req.body;
    try {
      const updatedPost = await Posts.findOneAndUpdate(
        { _id: postId },
        { $pull: { likedBy: userId } }
      );
      res.status(201).json({ message: "Unliked the Post" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
module.exports = { likePost, unlikePost };
