require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const auth = require('./routes/auth');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const recruiterRoutes = require('./routes/recruiterRoutes');
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());  

// Routes
app.use('/api/auth', auth);
app.use('/api/jobs', jobRoutes); 
app.use('/api/applications', applicationRoutes);
app.use('/api/recruiter', recruiterRoutes); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

  app.get('/',(req,res) =>
res.send("Server is live!")
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
 