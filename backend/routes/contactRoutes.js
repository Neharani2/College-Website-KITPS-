const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// ✅ POST - Contact Form
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving contact form" });
  }
});

// ✅ GET - All Contact Messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch contact messages" });
  }
});

module.exports = router;
