const express = require('express');
const mongoose = require('mongoose');

// Create the Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travel-submissions', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Submission = mongoose.model('Submission', {
  name: String,
  email: String,
  destination: String,
  travelers: Number,
  budget: Number,
});

// Endpoint to receive and store form data
app.post('/api/submissions', async (req, res) => {
  try {
    const { name, email, destination, travelers, budget } = req.body;

    // Create a new submission document
    const submission = new Submission({
      name,
      email,
      destination,
      travelers,
      budget,
    });

    // Save the submission to the database
    await submission.save();

    res.json({ message: 'Form data saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving form data.' });
  }
});

// Endpoint to retrieve existing form submissions
app.get('/api/submissions', async (req, res) => {
  try {
    // Retrieve all submissions from the database
    const submissions = await Submission.find();

    res.json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving form submissions.' });
  }
});
