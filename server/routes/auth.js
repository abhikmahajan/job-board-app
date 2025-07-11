const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// 🔐 Environment Secret Check
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in your environment variables");
}

// ✅ Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: 'User already exists' });


    const newUser = new User({
      name,
      email,
      password,
      userType,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, userType: newUser.userType },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during signup' });
  }
});

// ✅ Login Route
router.post('/login', async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    const user = await User.findOne({ email, userType }); // <- FIXED here

    if (!user)
      return res.status(400).json({ msg: 'Invalid credentials (user not found)' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: 'Invalid credentials (wrong password)' });

    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during login' });
  }
});


module.exports = router;
