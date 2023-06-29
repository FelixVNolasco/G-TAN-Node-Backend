const mongoose = require("mongoose");

const ScientistSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    urlImage: { type: String, unique: true },
    grade: { type: Array, required: true },
    project: { type: Array, required: true },
    specialty: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scientist", ScientistSchema);
