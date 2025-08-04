const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  bmi: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Calculate BMI before saving
progressSchema.pre('save', function(next) {
  if (this.weight && this.height) {
    // Calculate BMI: weight(kg) / (height(m))²
    this.bmi = parseFloat((this.weight / Math.pow(this.height / 100, 2)).toFixed(2));
  }
  next();
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress; 