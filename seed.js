require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Workout = require('./models/Workout');
const Progress = require('./models/Progress');
const Meal = require('./models/Meal');
const Activity = require('./models/Activity');
const DietPlan = require('./models/DietPlan');
const Review = require('./models/Review');

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fitness-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB for seeding'))
.catch((err) => console.error('MongoDB connection error:', err));

// Sample data
const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    programType: 'weight-loss'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    programType: 'weight-gain'
  },
  {
    name: 'Mike Johnson',
    email: 'mike@example.com',
    password: 'password123',
    programType: 'weight-balance'
  }
];

const reviews = [
  {
    userId: null, 
    userName: 'John Doe',
    rating: 5,
    title: 'Amazing Weight Loss Program',
    content: 'I lost 10kg in 3 months following the weight loss program. The meal plans and workouts were perfectly tailored to my needs.',
    programType: 'weight-loss',
    likes: 12
  },
  {
    userId: null,
    userName: 'Jane Smith',
    rating: 5,
    title: 'Great for Muscle Gain',
    content: 'The weight gain program helped me build muscle mass effectively. The high-protein meal plans and strength training workouts are excellent.',
    programType: 'weight-gain',
    likes: 8
  },
  {
    userId: null,
    userName: 'Mike Johnson',
    rating: 4,
    title: 'Perfect for Maintenance',
    content: 'The weight balance program has helped me maintain my ideal weight while staying fit and healthy. The variety in workouts keeps it interesting.',
    programType: 'weight-balance',
    likes: 5
  },
  {
    userId: null,
    userName: 'Sarah Williams',
    rating: 5,
    title: 'Best Fitness App Ever',
    content: 'I\'ve tried many fitness apps, but this one stands out. The personalized plans and tracking features are top-notch.',
    programType: 'weight-loss',
    likes: 15
  },
  {
    userId: null,
    userName: 'David Brown',
    rating: 4,
    title: 'Effective Workout Plans',
    content: 'The workout plans are well-structured and progressive. I\'ve seen significant improvements in my strength and endurance.',
    programType: 'weight-gain',
    likes: 7
  }
];

const createWorkouts = (userId) => [
  {
    userId,
    type: 'strength',
    title: 'Upper Body Workout',
    description: 'Focus on chest, shoulders, and triceps',
    duration: 60,
    exercises: [
      { name: 'Bench Press', sets: 3, reps: 10, weight: 60 },
      { name: 'Shoulder Press', sets: 3, reps: 12, weight: 40 },
      { name: 'Tricep Extensions', sets: 3, reps: 15, weight: 20 }
    ],
    date: new Date()
  },
  {
    userId,
    type: 'cardio',
    title: 'HIIT Cardio',
    description: 'High-intensity interval training',
    duration: 30,
    exercises: [
      { name: 'Sprints', duration: 20 },
      { name: 'Jump Rope', duration: 10 },
      { name: 'Burpees', sets: 3, reps: 15 }
    ],
    date: new Date()
  }
];

const createProgress = (userId) => {
  const weight = Math.floor(Math.random() * (90 - 60) + 60);
  const height = Math.floor(Math.random() * (190 - 160) + 160);
  const bmi = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(2));
  
  return {
    userId,
    weight,
    height,
    bmi,
    date: new Date()
  };
};

const createMeals = (userId, programType) => {
  const mealsByProgram = {
    'weight-loss': [
      {
        name: 'Oatmeal with Berries',
        type: 'breakfast',
        calories: 300,
        protein: 10,
        carbs: 45,
        fat: 8
      },
      {
        name: 'Grilled Chicken Salad',
        type: 'lunch',
        calories: 400,
        protein: 35,
        carbs: 20,
        fat: 15
      },
      {
        name: 'Baked Salmon with Vegetables',
        type: 'dinner',
        calories: 450,
        protein: 40,
        carbs: 25,
        fat: 20
      }
    ],
    'weight-gain': [
      {
        name: 'Protein Smoothie Bowl',
        type: 'breakfast',
        calories: 500,
        protein: 30,
        carbs: 60,
        fat: 15
      },
      {
        name: 'Turkey and Avocado Sandwich',
        type: 'lunch',
        calories: 600,
        protein: 40,
        carbs: 50,
        fat: 25
      },
      {
        name: 'Steak with Sweet Potato',
        type: 'dinner',
        calories: 700,
        protein: 45,
        carbs: 55,
        fat: 30
      }
    ],
    'weight-balance': [
      {
        name: 'Greek Yogurt Parfait',
        type: 'breakfast',
        calories: 400,
        protein: 20,
        carbs: 50,
        fat: 12
      },
      {
        name: 'Quinoa Bowl',
        type: 'lunch',
        calories: 500,
        protein: 25,
        carbs: 45,
        fat: 20
      },
      {
        name: 'Grilled Fish with Rice',
        type: 'dinner',
        calories: 550,
        protein: 35,
        carbs: 40,
        fat: 25
      }
    ]
  };

  return mealsByProgram[programType].map(meal => ({
    userId,
    ...meal,
    date: new Date()
  }));
};

const createActivities = (userId) => [
  {
    userId,
    name: 'Morning Run',
    type: 'cardio',
    duration: 30,
    caloriesBurned: 300,
    description: '5km run at moderate pace',
    completed: true
  },
  {
    userId,
    name: 'Yoga Session',
    type: 'flexibility',
    duration: 45,
    caloriesBurned: 150,
    description: 'Morning yoga for flexibility',
    completed: true
  },
  {
    userId,
    name: 'Weight Training',
    type: 'strength',
    duration: 60,
    caloriesBurned: 400,
    description: 'Full body workout',
    completed: false
  }
];

const createDietPlan = (userId, programType) => {
  const plansByType = {
    'weight-loss': {
      dailyCalorieTarget: 1800,
      macroSplit: { protein: 40, carbs: 30, fat: 30 }
    },
    'weight-gain': {
      dailyCalorieTarget: 3000,
      macroSplit: { protein: 30, carbs: 50, fat: 20 }
    },
    'weight-balance': {
      dailyCalorieTarget: 2200,
      macroSplit: { protein: 35, carbs: 40, fat: 25 }
    }
  };

  const plan = plansByType[programType];
  return {
    userId,
    name: `${programType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Plan`,
    type: programType,
    dailyCalorieTarget: plan.dailyCalorieTarget,
    macroSplit: plan.macroSplit,
    meals: createMeals(userId, programType),
    restrictions: [],
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  };
};

// Seed function
async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Workout.deleteMany({});
    await Progress.deleteMany({});
    await Meal.deleteMany({});
    await Activity.deleteMany({});
    await DietPlan.deleteMany({});
    await Review.deleteMany({});

    console.log('Cleared existing data');

    // Create users
    const createdUsers = [];
    for (const userData of sampleUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 8);
      const user = await User.create({
        ...userData,
        password: hashedPassword
      });
      createdUsers.push(user);
      console.log(`Created user: ${user.email}`);

      // Create workouts for each user
      const workouts = createWorkouts(user._id);
      await Workout.insertMany(workouts);
      console.log(`Created workouts for: ${user.email}`);

      // Create progress entries for each user
      const progress = createProgress(user._id);
      await Progress.create(progress);
      console.log(`Created progress for: ${user.email}`);

      // Create meals for each user
      const meals = createMeals(user._id, user.programType);
      await Meal.insertMany(meals);
      console.log(`Created meals for: ${user.email}`);

      // Create activities for each user
      const activities = createActivities(user._id);
      await Activity.insertMany(activities);
      console.log(`Created activities for: ${user.email}`);

      // Create diet plan for each user
      const dietPlan = createDietPlan(user._id, user.programType);
      await DietPlan.create(dietPlan);
      console.log(`Created diet plan for: ${user.email}`);

      // Create reviews and associate with user
      const createdReviews = await Promise.all(reviews.map(async (review, index) => {
        const userIndex = index % createdUsers.length;
        review.userId = createdUsers[userIndex]._id;
        return new Review(review).save();
      }));
      console.log(`Created reviews for: ${user.email}`);
    }

    console.log('Database seeding completed!');
    console.log('\nYou can now log in with any of these accounts:');
    sampleUsers.forEach(user => {
      console.log(`Email: ${user.email}, Password: ${user.password}`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

// Run the seed function
seedDatabase(); 