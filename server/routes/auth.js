const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// 🔐 Environment Secret Check
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in your environment variables");
}

// ✅ Signup Route
router.post('/signup', async (req, res) => {
  const { firstName,lastName, email, phone, password, userType } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: 'User already exists' });


    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      userType,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, userType: newUser.userType },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Set HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(201).json({
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
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

    // Set HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(200).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        userType: user.userType,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error during login' });
  }
});

// ✅ Get current user
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// ✅ Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
  }).json({ msg: 'Logged out successfully' });
});

module.exports = router;
