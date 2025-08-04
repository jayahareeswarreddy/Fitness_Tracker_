import React, { useState } from 'react';

export default function MealPlanner() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const sampleMeals = {
    Monday: {
      breakfast: {
        name: 'Oatmeal with Berries',
        calories: 350,
        protein: 12,
        carbs: 45,
        fat: 8
      },
      lunch: {
        name: 'Grilled Chicken Salad',
        calories: 450,
        protein: 35,
        carbs: 20,
        fat: 15
      },
      dinner: {
        name: 'Salmon with Quinoa',
        calories: 550,
        protein: 40,
        carbs: 35,
        fat: 20
      }
    },
    Tuesday: {
      breakfast: {
        name: 'Greek Yogurt with Granola',
        calories: 300,
        protein: 15,
        carbs: 35,
        fat: 10
      },
      lunch: {
        name: 'Turkey Wrap',
        calories: 400,
        protein: 30,
        carbs: 40,
        fat: 12
      },
      dinner: {
        name: 'Vegetable Stir Fry with Tofu',
        calories: 500,
        protein: 25,
        carbs: 45,
        fat: 18
      }
    },
    Wednesday: {
      breakfast: {
        name: 'Avocado Toast with Eggs',
        calories: 400,
        protein: 18,
        carbs: 30,
        fat: 22
      },
      lunch: {
        name: 'Quinoa Bowl with Vegetables',
        calories: 450,
        protein: 20,
        carbs: 50,
        fat: 15
      },
      dinner: {
        name: 'Grilled Fish with Sweet Potato',
        calories: 500,
        protein: 35,
        carbs: 40,
        fat: 18
      }
    },
    Thursday: {
      breakfast: {
        name: 'Smoothie Bowl',
        calories: 350,
        protein: 15,
        carbs: 40,
        fat: 10
      },
      lunch: {
        name: 'Chicken Caesar Salad',
        calories: 450,
        protein: 35,
        carbs: 25,
        fat: 20
      },
      dinner: {
        name: 'Beef Stir Fry with Brown Rice',
        calories: 550,
        protein: 40,
        carbs: 45,
        fat: 22
      }
    },
    Friday: {
      breakfast: {
        name: 'Protein Pancakes',
        calories: 400,
        protein: 25,
        carbs: 35,
        fat: 12
      },
      lunch: {
        name: 'Tuna Salad Sandwich',
        calories: 450,
        protein: 30,
        carbs: 40,
        fat: 15
      },
      dinner: {
        name: 'Grilled Chicken with Vegetables',
        calories: 500,
        protein: 45,
        carbs: 30,
        fat: 18
      }
    },
    Saturday: {
      breakfast: {
        name: 'Egg and Cheese Sandwich',
        calories: 450,
        protein: 25,
        carbs: 35,
        fat: 20
      },
      lunch: {
        name: 'Pasta with Meatballs',
        calories: 550,
        protein: 30,
        carbs: 60,
        fat: 18
      },
      dinner: {
        name: 'Grilled Steak with Mashed Potatoes',
        calories: 600,
        protein: 50,
        carbs: 45,
        fat: 25
      }
    },
    Sunday: {
      breakfast: {
        name: 'French Toast with Berries',
        calories: 400,
        protein: 15,
        carbs: 45,
        fat: 15
      },
      lunch: {
        name: 'Roast Chicken with Vegetables',
        calories: 500,
        protein: 40,
        carbs: 30,
        fat: 20
      },
      dinner: {
        name: 'Vegetable Lasagna',
        calories: 450,
        protein: 25,
        carbs: 50,
        fat: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Meal Planner</h1>

        {/* Day Selector */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Meal Plan for Selected Day */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['breakfast', 'lunch', 'dinner'].map((mealType) => (
            <div key={mealType} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {mealType}
              </h2>
              
              {sampleMeals[selectedDay]?.[mealType] ? (
                <>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {sampleMeals[selectedDay][mealType].name}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calories:</span>
                      <span className="font-medium">{sampleMeals[selectedDay][mealType].calories} kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Protein:</span>
                      <span className="font-medium">{sampleMeals[selectedDay][mealType].protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carbs:</span>
                      <span className="font-medium">{sampleMeals[selectedDay][mealType].carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fat:</span>
                      <span className="font-medium">{sampleMeals[selectedDay][mealType].fat}g</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No meal planned</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add Meal
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nutrition Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Nutrition Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800">Total Calories</h3>
              <p className="text-2xl font-bold text-blue-600">
                {sampleMeals[selectedDay] ? 
                  Object.values(sampleMeals[selectedDay]).reduce((sum, meal) => sum + meal.calories, 0) : 
                  0} kcal
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-800">Protein</h3>
              <p className="text-2xl font-bold text-green-600">
                {sampleMeals[selectedDay] ? 
                  Object.values(sampleMeals[selectedDay]).reduce((sum, meal) => sum + meal.protein, 0) : 
                  0}g
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-yellow-800">Carbs</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {sampleMeals[selectedDay] ? 
                  Object.values(sampleMeals[selectedDay]).reduce((sum, meal) => sum + meal.carbs, 0) : 
                  0}g
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-red-800">Fat</h3>
              <p className="text-2xl font-bold text-red-600">
                {sampleMeals[selectedDay] ? 
                  Object.values(sampleMeals[selectedDay]).reduce((sum, meal) => sum + meal.fat, 0) : 
                  0}g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 