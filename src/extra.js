// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact  -> save a contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' });
    }

    const contact = new Contact({ name, phone, email, message });
    await contact.save();

    res.status(201).json({ message: 'Contact saved successfully', contactId: contact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// (Optional) GET /api/contact -> list contacts (use protection in production)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

