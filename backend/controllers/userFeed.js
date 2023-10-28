const mongoose = require("mongoose");
const Post = require("../models/postSchema");
const userFeed = async (req, res) => {
  const { userId } = req.body;
  const userObId = new mongoose.Types.ObjectId(userId);
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
        $addFields: {
          isLiked: {
            $in: [userObId, "$likedBy"],
          },
        },
      },
      {
        $project: {
          _id: 1,
          content: 1,
          techStack: 1,
          authorName: {
            $concat: ["$user.firstName", " ", "$user.lastName"],
          },
          isLiked: 1,
        },
      },
    ]);
    return res.status(200).json({ posts });
  } catch (err) {
    console.error("Error fetching Post:", err);
    return res.status(400).json({ error: err.message });
  }
};
module.exports = userFeed;
