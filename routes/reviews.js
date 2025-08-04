const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const auth = require('../middleware/auth');

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Create a new review
router.post('/', auth, async (req, res) => {
  try {
    const review = new Review({
      userId: req.user._id,
      userName: req.user.name,
      rating: req.body.rating,
      title: req.body.title,
      content: req.body.content,
      programType: req.body.programType
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: 'Error creating review' });
  }
});

// Like a review
router.post('/:id/like', auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.likes += 1;
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error liking review' });
  }
});

module.exports = router; 