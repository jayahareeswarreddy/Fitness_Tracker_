import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/StableAuthContext';
import { FaBullseye, FaCheck, FaArrowRight, FaChartLine } from 'react-icons/fa';

export default function Goals() {
  const { currentUser } = useAuth();
  const [completedActivities, setCompletedActivities] = useState([]);
  const programType = currentUser?.programType || 'balance';

  useEffect(() => {
    
    const savedCompleted = JSON.parse(localStorage.getItem('completedActivities') || '[]');
    setCompletedActivities(savedCompleted);
  }, []);

  const programGoals = {
    'weight-gain': {
      title: 'Weight Gain Goals',
      mainGoal: 'Increase muscle mass and overall weight',
      weeklyTarget: 'Gain 0.5-1 kg per week',
      nutritionGoals: [
        'Consume 300-500 calories above maintenance',
        'Protein intake: 1.6-2.2g per kg of body weight',
        'Include healthy fats in every meal',
        'Eat 5-6 meals per day',
        'Stay hydrated with 3-4 liters of water daily'
      ],
      workoutGoals: [
        'Strength training 4-5 times per week',
        'Focus on compound movements',
        'Progressive overload in all exercises',
        'Rest 48-72 hours between muscle groups',
        'Include 1-2 cardio sessions per week'
      ]
    },
    'weight-loss': {
      title: 'Weight Loss Goals',
      mainGoal: 'Reduce body fat while maintaining muscle',
      weeklyTarget: 'Lose 0.5-1 kg per week',
      nutritionGoals: [
        'Create 300-500 calorie deficit daily',
        'Protein intake: 1.6-2.2g per kg of body weight',
        'Focus on whole, unprocessed foods',
        'Eat 3-4 balanced meals per day',
        'Stay hydrated with 2-3 liters of water daily'
      ],
      workoutGoals: [
        'Strength training 3-4 times per week',
        'Include HIIT workouts 2-3 times per week',
        'Aim for 10,000 steps daily',
        'Focus on form and technique',
        'Include active recovery days'
      ]
    },
    'weight-balance': {
      title: 'Weight Balance Goals',
      mainGoal: 'Maintain current weight while improving fitness',
      weeklyTarget: 'Maintain weight within 1-2 kg range',
      nutritionGoals: [
        'Eat at maintenance calories',
        'Protein intake: 1.2-1.6g per kg of body weight',
        'Balanced macronutrient distribution',
        'Eat 3-4 balanced meals per day',
        'Stay hydrated with 2-3 liters of water daily'
      ],
      workoutGoals: [
        'Strength training 3-4 times per week',
        'Include cardio 2-3 times per week',
        'Focus on overall fitness',
        'Maintain consistent workout schedule',
        'Include flexibility training'
      ]
    }
  };

  const currentGoals = programGoals[programType];

  const getProgressPercentage = (goalType) => {
    const activityPoints = {
      'weight-gain': {
        nutrition: [2, 3, 6, 7], // Activity IDs related to nutrition
        workout: [1, 4, 9] // Activity IDs related to workout
      },
      'weight-loss': {
        nutrition: [2, 3, 6, 7],
        workout: [1, 4, 9]
      },
      'weight-balance': {
        nutrition: [2, 3, 6, 7],
        workout: [1, 4, 9]
      }
    };

    const relevantActivities = activityPoints[programType][goalType];
    const completed = relevantActivities.filter(id => completedActivities.includes(id));
    return Math.round((completed.length / relevantActivities.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{currentGoals.title}</h1>
          <Link 
            to="/activities" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            View Activities <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Goal Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-blue-500 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Main Goal</h2>
            </div>
            <p className="text-gray-300">{currentGoals.mainGoal}</p>
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <p className="text-blue-400 font-medium">Weekly Target: {currentGoals.weeklyTarget}</p>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-green-500 text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Progress Overview</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Nutrition Goals</span>
                  <span className="text-blue-400">{getProgressPercentage('nutrition')}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${getProgressPercentage('nutrition')}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Workout Goals</span>
                  <span className="text-blue-400">{getProgressPercentage('workout')}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${getProgressPercentage('workout')}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Goals */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Nutrition Goals</h2>
            <ul className="space-y-3">
              {currentGoals.nutritionGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workout Goals */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Workout Goals</h2>
            <ul className="space-y-3">
              {currentGoals.workoutGoals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 