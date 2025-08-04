const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['strength', 'cardio', 'flexibility']
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  duration: {
    type: Number, // in minutes
    required: true
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    sets: Number,
    reps: Number,
    weight: Number, // in kg
    duration: Number // in minutes (for cardio)
  }],
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 