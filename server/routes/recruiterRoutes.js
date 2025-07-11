const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const Application = require('../models/Application');
const auth = require('../middleware/authMiddleware');

// Get all jobs by this recruiter with applications
router.get('/dashboard', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user._id }).lean();

    const jobsWithApps = await Promise.all(
      jobs.map(async (job) => {
        const applications = await Application.find({ job: job._id })
          .populate('jobSeeker', 'name email');
        return { ...job, applications };
      })
    );

    res.json(jobsWithApps);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Edit a job
router.put('/job/:id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ error: 'Unauthorized' });

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a job
router.delete('/job/:id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) return res.status(404).json({ error: 'Job not found' });
    if (job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ error: 'Unauthorized' });

    await job.deleteOne();
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
