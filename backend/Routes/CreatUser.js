const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createuser', async (req, res) => {
  try {
    const { name, location, email, password } = req.body;

    const newUser = await User.create({
      name,
      location,
      email,
      password,
    });

    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.json({ success: false, message: error.message });
  }
});

module.exports = router;
