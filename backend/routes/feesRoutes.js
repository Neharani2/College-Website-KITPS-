const express = require("express");
const Fees = require("../models/Fees");

const router = express.Router();

// ✅ POST - Add Fees Record
router.post("/", async (req, res) => {
  try {
    const fees = new Fees(req.body);
    await fees.save();
    res.status(201).json({ message: "Fees record submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving fees record" });
  }
});

// ✅ GET - All Fees Records
router.get("/", async (req, res) => {
  try {
    const feesData = await Fees.find();
    res.json(feesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch fees records" });
  }
});

module.exports = router;
