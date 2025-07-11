const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/authMiddleware');

// Send Message
router.post('/', auth, async (req, res) => {
  try {
    const { jobId, receiverId, message } = req.body;

    const newMessage = new Message({
      job: jobId,
      sender: req.user._id,
      receiver: receiverId,
      message
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get Messages between 2 users for a job
router.get('/:jobId/:userId', auth, async (req, res) => {
  try {
    const { jobId, userId } = req.params;

    const messages = await Message.find({
      job: jobId,
      $or: [
        { sender: req.user._id, receiver: userId },
        { sender: userId, receiver: req.user._id }
      ]
    }).sort({ sentAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get All Chats for a User
router.get('/user', auth, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.user._id }, { receiver: req.user._id }]
    })
    .populate('job')
    .populate('receiver', 'name')
    .populate('sender', 'name')
    .sort({ sentAt: -1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
