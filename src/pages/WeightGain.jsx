import React from 'react';
import { Link } from 'react-router-dom';

export default function WeightGain() {
  const weeklyPlan = {
    monday: {
      meals: {
        breakfast: {
          name: 'Protein-Rich Breakfast Bowl',
          calories: 650,
          protein: 40,
          carbs: 70,
          fat: 25,
          description: 'Oatmeal with protein powder, banana, peanut butter, and almonds'
        },
        lunch: {
          name: 'Chicken Rice Bowl',
          calories: 800,
          protein: 50,
          carbs: 90,
          fat: 25,
          description: 'Grilled chicken breast with brown rice, avocado, and vegetables'
        },
        dinner: {
          name: 'Steak and Potatoes',
          calories: 900,
          protein: 60,
          carbs: 70,
          fat: 35,
          description: 'Grilled steak with sweet potatoes and roasted vegetables'
        }
      },
      workout: {
        name: 'Compound Strength Training',
        duration: '60 minutes',
        caloriesBurn: '400-500',
        exercises: [
          'Barbell Squats (4 sets of 8)',
          'Deadlifts (4 sets of 8)',
          'Bench Press (4 sets of 8)',
          'Bent-over Rows (4 sets of 10)',
          'Overhead Press (3 sets of 10)'
        ]
      }
    },
    tuesday: {
      meals: {
        breakfast: {
          name: 'Mass Gainer Smoothie',
          calories: 700,
          protein: 45,
          carbs: 85,
          fat: 20,
          description: 'Blend of banana, oats, protein powder, milk, and peanut butter'
        },
        lunch: {
          name: 'Pasta with Meatballs',
          calories: 850,
          protein: 45,
          carbs: 100,
          fat: 30,
          description: 'Whole grain pasta with beef meatballs and marinara sauce'
        },
        dinner: {
          name: 'Salmon Rice Bowl',
          calories: 750,
          protein: 45,
          carbs: 80,
          fat: 30,
          description: 'Grilled salmon with brown rice, vegetables, and teriyaki sauce'
        }
      },
      workout: {
        name: 'Hypertrophy Workout',
        duration: '50 minutes',
        caloriesBurn: '350-450',
        exercises: [
          'Dumbbell Lunges (4 sets of 12)',
          'Incline Dumbbell Press (4 sets of 12)',
          'Lat Pulldowns (4 sets of 12)',
          'Bicep Curls (3 sets of 15)',
          'Tricep Extensions (3 sets of 15)'
        ]
      }
    },
    wednesday: {
      meals: {
        breakfast: {
          name: 'Protein Pancakes',
          calories: 680,
          protein: 40,
          carbs: 75,
          fat: 25,
          description: 'Protein powder pancakes with maple syrup and nuts'
        },
        lunch: {
          name: 'Beef and Rice Bowl',
          calories: 820,
          protein: 55,
          carbs: 85,
          fat: 30,
          description: 'Ground beef with brown rice and vegetables'
        },
        dinner: {
          name: 'Chicken Alfredo Pasta',
          calories: 880,
          protein: 50,
          carbs: 90,
          fat: 35,
          description: 'Whole grain pasta with chicken and alfredo sauce'
        }
      },
      workout: {
        name: 'Power Training',
        duration: '45 minutes',
        caloriesBurn: '300-400',
        exercises: [
          'Power Cleans (5 sets of 5)',
          'Box Jumps (4 sets of 6)',
          'Medicine Ball Throws (4 sets of 8)',
          'Push Press (4 sets of 6)',
          'Weighted Pull-ups (3 sets of 8)'
        ]
      }
    },
    thursday: {
      meals: {
        breakfast: {
          name: 'Breakfast Burrito',
          calories: 720,
          protein: 45,
          carbs: 80,
          fat: 28,
          description: 'Whole wheat tortilla with eggs, cheese, and avocado'
        },
        lunch: {
          name: 'Turkey Sandwich',
          calories: 780,
          protein: 50,
          carbs: 85,
          fat: 32,
          description: 'Whole grain bread with turkey, cheese, and vegetables'
        },
        dinner: {
          name: 'Pork Chops with Rice',
          calories: 850,
          protein: 55,
          carbs: 75,
          fat: 35,
          description: 'Grilled pork chops with brown rice and vegetables'
        }
      },
      workout: {
        name: 'Upper Body Focus',
        duration: '55 minutes',
        caloriesBurn: '350-450',
        exercises: [
          'Bench Press (4 sets of 8)',
          'Pull-ups (4 sets of 8)',
          'Shoulder Press (4 sets of 10)',
          'Bicep Curls (3 sets of 12)',
          'Tricep Dips (3 sets of 12)'
        ]
      }
    },
    friday: {
      meals: {
        breakfast: {
          name: 'Protein Oatmeal',
          calories: 670,
          protein: 42,
          carbs: 78,
          fat: 24,
          description: 'Oatmeal with protein powder, nuts, and dried fruits'
        },
        lunch: {
          name: 'Beef Stir Fry',
          calories: 830,
          protein: 52,
          carbs: 88,
          fat: 30,
          description: 'Beef with vegetables and brown rice'
        },
        dinner: {
          name: 'Grilled Chicken Pasta',
          calories: 860,
          protein: 48,
          carbs: 92,
          fat: 32,
          description: 'Whole grain pasta with grilled chicken and vegetables'
        }
      },
      workout: {
        name: 'Lower Body Focus',
        duration: '50 minutes',
        caloriesBurn: '400-500',
        exercises: [
          'Squats (4 sets of 8)',
          'Romanian Deadlifts (4 sets of 8)',
          'Lunges (4 sets of 10)',
          'Calf Raises (4 sets of 15)',
          'Leg Press (3 sets of 12)'
        ]
      }
    },
    saturday: {
      meals: {
        breakfast: {
          name: 'Breakfast Scramble',
          calories: 690,
          protein: 45,
          carbs: 72,
          fat: 26,
          description: 'Eggs with cheese, vegetables, and whole grain toast'
        },
        lunch: {
          name: 'Chicken Quesadilla',
          calories: 810,
          protein: 48,
          carbs: 82,
          fat: 34,
          description: 'Whole wheat tortilla with chicken, cheese, and vegetables'
        },
        dinner: {
          name: 'Beef Steak with Potatoes',
          calories: 890,
          protein: 58,
          carbs: 78,
          fat: 38,
          description: 'Grilled steak with roasted potatoes and vegetables'
        }
      },
      workout: {
        name: 'Full Body Workout',
        duration: '60 minutes',
        caloriesBurn: '450-550',
        exercises: [
          'Deadlifts (4 sets of 6)',
          'Bench Press (4 sets of 8)',
          'Squats (4 sets of 8)',
          'Pull-ups (4 sets of 8)',
          'Overhead Press (3 sets of 10)'
        ]
      }
    },
    sunday: {
      meals: {
        breakfast: {
          name: 'Protein Waffles',
          calories: 680,
          protein: 42,
          carbs: 76,
          fat: 24,
          description: 'Protein powder waffles with syrup and nuts'
        },
        lunch: {
          name: 'Salmon Bowl',
          calories: 790,
          protein: 46,
          carbs: 82,
          fat: 32,
          description: 'Grilled salmon with brown rice and vegetables'
        },
        dinner: {
          name: 'Chicken and Rice',
          calories: 840,
          protein: 52,
          carbs: 85,
          fat: 30,
          description: 'Grilled chicken with brown rice and vegetables'
        }
      },
      workout: {
        name: 'Active Recovery',
        duration: '30 minutes',
        caloriesBurn: '200-250',
        exercises: [
          'Light cardio (15 minutes)',
          'Stretching (10 minutes)',
          'Foam rolling (5 minutes)'
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/images/weight-gain-bg.jpg")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Weight Gain Program</h1>
        
        {/* Weekly Plan */}
        <div className="space-y-8">
          {Object.entries(weeklyPlan).map(([day, plan]) => (
            <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white px-4 py-2">
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