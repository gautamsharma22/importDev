const Post = require("../models/postSchema");
const User = require("../models/userSchema");
const createPost = async (req, res) => {
  const { postedBy, content, techStack, userId} = req.body;
  if (!postedBy || !content || !techStack || !userId) {
    return res
      .status(400)
      .json({ error: "Provide all the fields required for Post." });
  }
  const postedAt = new Date();
  const post1 = new Post({
    postedAt,
    postedBy,
    content,
    techStack,
  });
  try {
    const postInfo = await post1.save();
    const { _id } = postInfo._id;
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $push: { posts: _id } }
    );
    return res.status(201).json({ message: "Post Created Succesfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
module.exports = createPost;
