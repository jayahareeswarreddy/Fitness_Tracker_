const express = require('express');
const Progress = require('../models/Progress');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all progress entries for a user
router.get('/', auth, async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user._id })
      .sort({ date: -1 });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get latest progress entry
router.get('/latest', auth, async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user._id })
      .sort({ date: -1 });
    if (!progress) {
      return res.status(404).json({ message: 'No progress entries found' });
    }
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new progress entry
router.post('/', auth, async (req, res) => {
  try {
    const { weight, height } = req.body;
    const bmi = weight / ((height / 100) * (height / 100));

    const progress = new Progress({
      ...req.body,
      userId: req.user._id,
      bmi: parseFloat(bmi.toFixed(2))
    });

    await progress.save();
    res.status(201).json(progress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update progress goals
router.patch('/goals', auth, async (req, res) => {
  try {
    const latestProgress = await Progress.findOne({ userId: req.user._id })
      .sort({ date: -1 });
    
    if (!latestProgress) {
      return res.status(404).json({ message: 'No progress entries found' });
    }

    latestProgress.goals = {
      ...latestProgress.goals,
      ...req.body
    };

    await latestProgress.save();
    res.json(latestProgress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get progress statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user._id })
      .sort({ date: 1 });

    if (progress.length === 0) {
      return res.status(404).json({ message: 'No progress entries found' });
    }

    const stats = {
      weightChange: progress[progress.length - 1].weight - progress[0].weight,
      bmiChange: progress[progress.length - 1].bmi - progress[0].bmi,
      totalEntries: progress.length,
      startDate: progress[0].date,
      currentWeight: progress[progress.length - 1].weight,
      currentBMI: progress[progress.length - 1].bmi
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 