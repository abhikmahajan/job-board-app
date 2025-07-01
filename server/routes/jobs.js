const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// @POST /api/jobs – create a job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (err) {
    res.status(500).json({ error: 'Error posting job' });
  }
});

// @GET /api/jobs – get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

module.exports = router;
