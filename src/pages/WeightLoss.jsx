import React from 'react';
import { Link } from 'react-router-dom';

export default function WeightLoss() {
  const weeklyPlan = {
    monday: {
      meals: {
        breakfast: {
          name: 'Oatmeal with Berries',
          calories: 300,
          protein: 10,
          carbs: 45,
          fat: 8,
          description: 'Steel-cut oats topped with mixed berries and a drizzle of honey'
        },
        lunch: {
          name: 'Grilled Chicken Salad',
          calories: 350,
          protein: 35,
          carbs: 15,
          fat: 12,
          description: 'Mixed greens with grilled chicken, cherry tomatoes, and balsamic vinaigrette'
        },
        dinner: {
          name: 'Baked Salmon',
          calories: 400,
          protein: 40,
          carbs: 0,
          fat: 22,
          description: 'Herb-crusted salmon with steamed broccoli'
        }
      },
      workout: {
        name: 'Morning Cardio',
        duration: '30 minutes',
        caloriesBurn: '300-400',
        exercises: [
          'Brisk walking (5 min warm-up)',
          'High-intensity intervals (20 min)',
          'Cool-down walk (5 min)'
        ]
      }
    },
    tuesday: {
      meals: {
        breakfast: {
          name: 'Egg White Omelet',
          calories: 250,
          protein: 20,
          carbs: 5,
          fat: 12,
          description: 'Egg whites with spinach, mushrooms, and low-fat cheese'
        },
        lunch: {
          name: 'Quinoa Buddha Bowl',
          calories: 400,
          protein: 15,
          carbs: 45,
          fat: 15,
          description: 'Quinoa with roasted vegetables and chickpeas'
        },
        dinner: {
          name: 'Turkey Stir-Fry',
          calories: 350,
          protein: 35,
          carbs: 25,
          fat: 10,
          description: 'Lean turkey with mixed vegetables and brown rice'
        }
      },
      workout: {
        name: 'Full Body Circuit',
        duration: '45 minutes',
        caloriesBurn: '400-500',
        exercises: [
          'Bodyweight squats (3 sets of 15)',
          'Push-ups (3 sets of 10)',
          'Lunges (3 sets of 12 each leg)',
          'Mountain climbers (3 sets of 30 seconds)',
          'Plank hold (3 sets of 45 seconds)'
        ]
      }
    },
    wednesday: {
      meals: {
        breakfast: {
          name: 'Greek Yogurt Parfait',
          calories: 280,
          protein: 25,
          carbs: 30,
          fat: 8,
          description: 'Greek yogurt with granola and fresh fruits'
        },
        lunch: {
          name: 'Tuna Salad Wrap',
          calories: 380,
          protein: 30,
          carbs: 35,
          fat: 15,
          description: 'Whole wheat wrap with tuna, lettuce, and light mayo'
        },
        dinner: {
          name: 'Vegetable Stir-Fry',
          calories: 320,
          protein: 15,
          carbs: 40,
          fat: 12,
          description: 'Mixed vegetables with tofu and brown rice'
        }
      },
      workout: {
        name: 'HIIT Workout',
        duration: '25 minutes',
        caloriesBurn: '300-350',
        exercises: [
          'Jumping jacks (30 seconds)',
          'Burpees (30 seconds)',
          'High knees (30 seconds)',
          'Rest (30 seconds)',
          'Repeat 5 times'
        ]
      }
    },
    thursday: {
      meals: {
        breakfast: {
          name: 'Smoothie Bowl',
          calories: 290,
          protein: 20,
          carbs: 35,
          fat: 10,
          description: 'Blended fruits with protein powder and chia seeds'
        },
        lunch: {
          name: 'Grilled Fish Tacos',
          calories: 360,
          protein: 25,
          carbs: 30,
          fat: 15,
          description: 'Whole wheat tortillas with grilled fish and slaw'
        },
        dinner: {
          name: 'Chicken and Vegetable Soup',
          calories: 340,
          protein: 30,
          carbs: 25,
          fat: 12,
          description: 'Homemade soup with lean chicken and vegetables'
        }
      },
      workout: {
        name: 'Yoga and Stretching',
        duration: '40 minutes',
        caloriesBurn: '200-250',
        exercises: [
          'Sun salutations (10 minutes)',
          'Standing poses (15 minutes)',
          'Floor poses (10 minutes)',
          'Meditation (5 minutes)'
        ]
      }
    },
    friday: {
      meals: {
        breakfast: {
          name: 'Avocado Toast',
          calories: 310,
          protein: 15,
          carbs: 30,
          fat: 18,
          description: 'Whole grain toast with avocado and poached egg'
        },
        lunch: {
          name: 'Mediterranean Salad',
          calories: 370,
          protein: 20,
          carbs: 25,
          fat: 20,
          description: 'Mixed greens with feta, olives, and grilled chicken'
        },
        dinner: {
          name: 'Shrimp and Vegetable Skewers',
          calories: 330,
          protein: 35,
          carbs: 20,
          fat: 12,
          description: 'Grilled shrimp with mixed vegetables'
        }
      },
      workout: {
        name: 'Cardio and Core',
        duration: '35 minutes',
        caloriesBurn: '350-400',
        exercises: [
          'Running (15 minutes)',
          'Plank variations (10 minutes)',
          'Russian twists (3 sets of 15)',
          'Leg raises (3 sets of 12)'
        ]
      }
    },
    saturday: {
      meals: {
        breakfast: {
          name: 'Protein Pancakes',
          calories: 320,
          protein: 25,
          carbs: 35,
          fat: 10,
          description: 'Protein powder pancakes with fresh berries'
        },
        lunch: {
          name: 'Grilled Chicken Wrap',
          calories: 380,
          protein: 35,
          carbs: 30,
          fat: 15,
          description: 'Whole wheat wrap with grilled chicken and vegetables'
        },
        dinner: {
          name: 'Baked Cod',
          calories: 350,
          protein: 40,
          carbs: 15,
          fat: 12,
          description: 'Baked cod with roasted vegetables'
        }
      },
      workout: {
        name: 'Full Body Workout',
        duration: '45 minutes',
        caloriesBurn: '400-450',
        exercises: [
          'Squats (3 sets of 15)',
          'Push-ups (3 sets of 12)',
          'Lunges (3 sets of 12 each leg)',
          'Plank (3 sets of 1 minute)',
          'Burpees (3 sets of 10)'
        ]
      }
    },
    sunday: {
      meals: {
        breakfast: {
          name: 'Vegetable Omelet',
          calories: 280,
          protein: 20,
          carbs: 15,
          fat: 18,
          description: 'Egg whites with mixed vegetables'
        },
        lunch: {
          name: 'Grilled Salmon Salad',
          calories: 360,
          protein: 30,
          carbs: 20,
          fat: 20,
          description: 'Mixed greens with grilled salmon and vinaigrette'
        },
        dinner: {
          name: 'Turkey Meatballs',
          calories: 340,
          protein: 35,
          carbs: 25,
          fat: 15,
          description: 'Turkey meatballs with marinara sauce and zucchini noodles'
        }
      },
      workout: {
        name: 'Active Recovery',
        duration: '30 minutes',
        caloriesBurn: '200-250',
        exercises: [
          'Light walking (15 minutes)',
          'Stretching (10 minutes)',
          'Foam rolling (5 minutes)'
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/images/weight-loss-bg.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Weight Loss Program</h1>
        
        {/* Weekly Plan */}
        <div className="space-y-8">
          {Object.entries(weeklyPlan).map(([day, plan]) => (
            <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-2">
                <h2 className="text-xl font-semibold capitalize">{day}</h2>
              </div>
              <div className="p-6">
                {/* Meals */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Meal Plan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(plan.meals).map(([mealType, meal]) => (
                      <div key={mealType} className="border rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 capitalize">{mealType}</h4>
                        <p className="text-sm text-gray-600 mt-1">{meal.description}</p>
                        <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                          <div className="text-center">
                            <div className="font-medium text-gray-900">{meal.calories}</div>
                            <div className="text-gray-600">Calories</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-gray-900">{meal.protein}g</div>
                            <div className="text-gray-600">Protein</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-gray-900">{meal.carbs}g</div>
                            <div className="text-gray-600">Carbs</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-gray-900">{meal.fat}g</div>
                            <div className="text-gray-600">Fat</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workout */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Workout Plan</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">{plan.workout.name}</h4>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-600">Duration: {plan.workout.duration}</span>
                      <span className="text-gray-600">Calories Burn: {plan.workout.caloriesBurn}</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-900 mb-2">Exercises:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {plan.workout.exercises.map((exercise, index) => (
                          <li key={index}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 