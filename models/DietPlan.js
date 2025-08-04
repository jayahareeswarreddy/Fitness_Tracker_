const mongoose = require('mongoose');

const dietPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['weight-loss', 'weight-gain', 'weight-balance'],
    required: true
  },
  dailyCalorieTarget: {
    type: Number,
    required: true
  },
  macroSplit: {
    protein: {
      type: Number,
      required: true // percentage
    },
    carbs: {
      type: Number,
      required: true // percentage
    },
    fat: {
      type: Number,
      required: true // percentage
    }
  },
  meals: [{
    type: {
      type: String,
      enum: ['breakfast', 'lunch', 'dinner', 'snack'],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  }],
  restrictions: [String],
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: Date
}, {
  timestamps: true
});

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

module.exports = DietPlan; 