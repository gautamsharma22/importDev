const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postedAt: {
    type: Date,
    default: () => new Date(),
    required: true,
  },
  lastModified: {
    type: Date,
    default: () => new Date(),
    required: true,
  },
  techStack: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
