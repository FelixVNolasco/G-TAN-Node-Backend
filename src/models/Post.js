const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: Array },
    spentLecture: { type: String },
    categories: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
