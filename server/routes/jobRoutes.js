const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const authMiddleware = require('../middleware/authMiddleware');

// Create Job (only recruiter)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, company, location, jobType, salaryRange, skillsRequired, description } = req.body;

    if (req.user.userType !== 'recruiter') {
      return res.status(403).json({ msg: 'Only recruiters can post jobs' });
    }

    const job = new Job({
      title,
      company,
      location,
      jobType,
      salaryRange,
      skillsRequired,
      description,
      recruiter: req.user.id
    });

    await job.save();
    res.status(201).json(job); 
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get All Jobs (with optional search/filter/sort)
router.get('/', async (req, res) => {
  try {
    const { keyword, location, jobType, sortBy } = req.query;

    const filter = {};

    if (keyword) {
      filter.title = { $regex: keyword, $options: 'i' };
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (jobType) {
      filter.jobType = jobType;
    }

    let query = Job.find(filter);

    if (sortBy === 'latest') {
      query = query.sort({ createdAt: -1 });
    } else if (sortBy === 'salary') {
      query = query.sort({ salaryRange: 1 });
    }

    const jobs = await query.exec();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get jobs posted by the current recruiter
router.get('/my-jobs', authMiddleware, async (req, res) => {
  try {
    if (req.user.userType !== 'recruiter') {
      return res.status(403).json({ msg: 'Only recruiters can view their posted jobs' });
    }
    const jobs = await Job.find({ recruiter: req.user.id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
