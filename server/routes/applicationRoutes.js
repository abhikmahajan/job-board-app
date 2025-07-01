const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Job = require('../models/Job');
const auth = require('../middleware/authMiddleware');

// Apply to a job (jobseeker only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'jobseeker') {
      return res.status(403).json({ msg: 'Only job seekers can apply' });
    }

    const { jobId } = req.body;

    const existing = await Application.findOne({ job: jobId, applicant: req.user._id });
    if (existing) {
      return res.status(400).json({ msg: 'Already applied to this job' });
    }

    const application = new Application({
      job: jobId,
      applicant: req.user._id
    });

    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Recruiter: View applications to their jobs
router.get('/recruiter', auth, async (req, res) => {
  try {
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({ msg: 'Only recruiters can view this' });
    }

    const jobs = await Job.find({ recruiter: req.user._id }).select('_id');
    const jobIds = jobs.map(job => job._id);

    const applications = await Application.find({ job: { $in: jobIds } })
      .populate('job')
      .populate('applicant', '-password');

    res.json(applications);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Jobseeker: View own applications
router.get('/user', auth, async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user._id })
      .populate('job');

    res.json(applications);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
