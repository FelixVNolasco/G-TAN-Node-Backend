const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    postId: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
