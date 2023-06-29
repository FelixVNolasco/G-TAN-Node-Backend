const router = require("express").Router();
const Specialty = require("../models/Specialty");

router.get("/", async (req, res) => {
  try {
    const specialties = await Specialty.find();
    res.status(200).json(specialties);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;