import React from 'react';
import { Link } from 'react-router-dom';

export default function WeightBalance() {
  const weeklyPlan = {
    monday: {
      meals: {
        breakfast: {
          name: 'Balanced Breakfast Bowl',
          calories: 450,
          protein: 25,
          carbs: 55,
          fat: 18,
          description: 'Greek yogurt with granola, mixed berries, and honey'
        },
        lunch: {
          name: 'Mediterranean Salad',
          calories: 500,
          protein: 30,
          carbs: 45,
          fat: 25,
          description: 'Mixed greens with grilled chicken, olives, feta, and olive oil'
        },
        dinner: {
          name: 'Grilled Salmon',
          calories: 550,
          protein: 35,
          carbs: 40,
          fat: 28,
          description: 'Grilled salmon with quinoa and roasted vegetables'
        }
      },
      workout: {
        name: 'Full Body Strength',
        duration: '45 minutes',
        caloriesBurn: '300-350',
        exercises: [
          'Squats (3 sets of 12)',
          'Push-ups (3 sets of 12)',
          'Rows (3 sets of 12)',
          'Lunges (3 sets of 10 each leg)',
          'Plank (3 sets of 45 seconds)'
        ]
      }
    },
    tuesday: {
      meals: {
        breakfast: {
          name: 'Avocado Toast',
          calories: 420,
          protein: 20,
          carbs: 50,
          fat: 20,
          description: 'Whole grain toast with avocado, eggs, and tomatoes'
        },
        lunch: {
          name: 'Turkey Wrap',
          calories: 480,
          protein: 28,
          carbs: 48,
          fat: 22,
          description: 'Whole wheat wrap with turkey, vegetables, and hummus'
        },
        dinner: {
          name: 'Chicken Stir Fry',
          calories: 520,
          protein: 32,
          carbs: 45,
          fat: 25,
          description: 'Chicken with mixed vegetables and brown rice'
        }
      },
      workout: {
        name: 'Cardio and Core',
        duration: '40 minutes',
        caloriesBurn: '350-400',
        exercises: [
          'Running (20 minutes)',
          'Mountain climbers (3 sets of 30 seconds)',
          'Russian twists (3 sets of 15)',
          'Leg raises (3 sets of 12)',
          'Bicycle crunches (3 sets of 20)'
        ]
      }
    },
    wednesday: {
      meals: {
        breakfast: {
          name: 'Smoothie Bowl',
          calories: 430,
          protein: 22,
          carbs: 52,
          fat: 18,
          description: 'Blended fruits with protein powder and granola'
        },
        lunch: {
          name: 'Quinoa Bowl',
          calories: 490,
          protein: 25,
          carbs: 55,
          fat: 20,
          description: 'Quinoa with roasted vegetables and chickpeas'
        },
        dinner: {
          name: 'Baked Cod',
          calories: 510,
          protein: 30,
          carbs: 42,
          fat: 24,
          description: 'Baked cod with sweet potatoes and green beans'
        }
      },
      workout: {
        name: 'Yoga Flow',
        duration: '50 minutes',
        caloriesBurn: '250-300',
        exercises: [
          'Sun salutations (10 minutes)',
          'Warrior poses (15 minutes)',
          'Balance poses (10 minutes)',
          'Core work (10 minutes)',
          'Meditation (5 minutes)'
        ]
      }
    },
    thursday: {
      meals: {
        breakfast: {
          name: 'Oatmeal Bowl',
          calories: 440,
          protein: 20,
          carbs: 58,
          fat: 16,
          description: 'Steel-cut oats with nuts, seeds, and fruit'
        },
        lunch: {
          name: 'Tuna Salad',
          calories: 470,
          protein: 32,
          carbs: 40,
          fat: 22,
          description: 'Mixed greens with tuna, vegetables, and olive oil'
        },
        dinner: {
          name: 'Vegetable Pasta',
          calories: 530,
          protein: 25,
          carbs: 60,
          fat: 20,
          description: 'Whole grain pasta with vegetables and olive oil'
        }
      },
      workout: {
        name: 'Upper Body Focus',
        duration: '45 minutes',
        caloriesBurn: '300-350',
        exercises: [
          'Push-ups (3 sets of 12)',
          'Pull-ups (3 sets of 8)',
          'Shoulder press (3 sets of 12)',
          'Bicep curls (3 sets of 12)',
          'Tricep dips (3 sets of 12)'
        ]
      }
    },
    friday: {
      meals: {
        breakfast: {
          name: 'Protein Pancakes',
          calories: 460,
          protein: 25,
          carbs: 55,
          fat: 18,
          description: 'Protein powder pancakes with fruit and syrup'
        },
        lunch: {
          name: 'Chicken Salad',
          calories: 480,
          protein: 35,
          carbs: 42,
          fat: 24,
          description: 'Mixed greens with grilled chicken and vinaigrette'
        },
        dinner: {
          name: 'Beef and Vegetables',
          calories: 540,
          protein: 38,
          carbs: 45,
          fat: 26,
          description: 'Lean beef with roasted vegetables and brown rice'
        }
      },
      workout: {
        name: 'Lower Body Focus',
        duration: '45 minutes',
        caloriesBurn: '350-400',
        exercises: [
          'Squats (3 sets of 12)',
          'Lunges (3 sets of 10 each leg)',
          'Step-ups (3 sets of 12)',
          'Calf raises (3 sets of 15)',
          'Glute bridges (3 sets of 12)'
        ]
      }
    },
    saturday: {
      meals: {
        breakfast: {
          name: 'Breakfast Burrito',
          calories: 450,
          protein: 22,
          carbs: 52,
          fat: 20,
          description: 'Whole wheat tortilla with eggs, vegetables, and cheese'
        },
        lunch: {
          name: 'Salmon Bowl',
          calories: 490,
          protein: 30,
          carbs: 48,
          fat: 22,
          description: 'Brown rice with salmon and vegetables'
        },
        dinner: {
          name: 'Turkey Meatballs',
          calories: 520,
          protein: 32,
          carbs: 50,
          fat: 24,
          description: 'Turkey meatballs with whole wheat pasta and marinara'
        }
      },
      workout: {
        name: 'Full Body Circuit',
        duration: '50 minutes',
        caloriesBurn: '400-450',
        exercises: [
          'Circuit 1: Squats, Push-ups, Rows (3 rounds)',
          'Circuit 2: Lunges, Shoulder Press, Plank (3 rounds)',
          'Circuit 3: Step-ups, Bicep Curls, Russian Twists (3 rounds)'
        ]
      }
    },
    sunday: {
      meals: {
        breakfast: {
          name: 'Breakfast Scramble',
          calories: 430,
          protein: 25,
          carbs: 45,
          fat: 20,
          description: 'Eggs with vegetables and whole grain toast'
        },
        lunch: {
          name: 'Grilled Chicken Wrap',
          calories: 470,
          protein: 30,
          carbs: 48,
          fat: 22,
          description: 'Whole wheat wrap with chicken and vegetables'
        },
        dinner: {
          name: 'Vegetable Stir Fry',
          calories: 510,
          protein: 25,
          carbs: 55,
          fat: 20,
          description: 'Mixed vegetables with tofu and brown rice'
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
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/images/weight-balance-bg.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Weight Balance Program</h1>
        
        {/* Weekly Plan */}
        <div className="space-y-8">
          {Object.entries(weeklyPlan).map(([day, plan]) => (
            <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-4 py-2">
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