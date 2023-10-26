const Post = require("../models/postSchema");
const viewAllPosts = async (req, res) => {
  try {
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "postedBy",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          content: 1,
          techStack: 1,
          authorName: {
            $concat: ["$user.firstName", " ", "$user.lastName"],
          },
        },
      },
    ]);
    console.log("All Post:", posts);
    return res.status(200).json({ posts });
  } catch (err) {
    console.error("Error fetching Post:", err);
    return res.status(400).json({ error: err.message });
  }
};
module.exports = viewAllPosts;
