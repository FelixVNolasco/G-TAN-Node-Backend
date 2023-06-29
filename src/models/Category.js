const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Category", CategorySchema);
