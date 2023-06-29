const router = require("express").Router();
const Comment = require("../models/Comment");

const {
  // verifyToken,
  verifyTokenAndAuthorization,
  // verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

//CREATE COMMENT
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE COMMENT
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE COMMENT
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET COMMENT
router.get("/find/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL COMMENTS
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
