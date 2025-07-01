const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: String,
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Internship', 'Remote'],
    default: 'Full-time'
  },
  salaryRange: {
    type: String,
    default: 'Negotiable'
  },
  skillsRequired: [String],
  description: String,
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Job', jobSchema);
