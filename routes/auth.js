const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const auth = require('../middleware/auth');
const mongoose = require('mongoose');

const router = express.Router();

// In-memory user store for fallback if MongoDB is not available
const users = [];
let userIdCounter = 1;

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, name, programType } = req.body;
    console.log('Received signup request with programType:', programType);

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Check if MongoDB is connected
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      // Use MongoDB
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }

      // Create new user
      const user = new User({
        name: name || email.split('@')[0],
        email,
        password,
        programType: programType || 'weight-balance'
      });

      // Save user (password will be hashed by pre-save middleware)
      await user.save();
      console.log('Created user with programType:', user.programType);

      // Generate auth token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          programType: user.programType
        }
      });
    } else {
      // Use in-memory store
      // Check if user already exists
      const existingUser = users.find(user => user.email === email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = {
        _id: userIdCounter++,
        name: name || email.split('@')[0],
        email,
        password: hashedPassword,
        programType: programType || 'weight-balance',
        createdAt: new Date()
      };

      // Save user
      users.push(user);
      console.log('Created user with programType:', user.programType);

      // Generate auth token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'secret-key-for-testing',
        { expiresIn: '7d' }
      );

      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          programType: user.programType
        }
      });
    }
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: 'Error creating account',
      details: error.message 
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if MongoDB is connected
    const isMongoConnected = mongoose.connection.readyState === 1;

    if (isMongoConnected) {
      // Use MongoDB
      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare password using bcrypt
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          programType: user.programType
        }
      });
    } else {
      // Use in-memory store
      // Find user
      const user = users.find(user => user.email === email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate auth token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || 'secret-key-for-testing',
        { expiresIn: '7d' }
      );

      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          programType: user.programType
        }
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Error during login',
      details: error.message 
    });
  }
});

// Logout route
router.post('/logout', auth, async (req, res) => {
  console.log(req.user)
  try {
    // Remove the current token from user's tokens array
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();
    
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out' });
  }
});

// Logout all devices route
router.post('/logoutAll', auth, async (req, res) => {
  try {
    // Clear all tokens
    req.user.tokens = [];
    await req.user.save();
    
    res.json({ message: 'Logged out from all devices' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out' });
  }
});

// Get current user
router.get('/me', (req, res) => {
  // This would normally use the auth middleware
  // For testing, we'll just return a mock user
  res.json({
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    programType: 'weight-balance'
  });
});

module.exports = router; 