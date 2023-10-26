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
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  techStack: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
