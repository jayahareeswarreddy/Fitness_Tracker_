import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { FaCheck, FaTimes, FaArrowRight, FaDumbbell, FaRunning, FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Activities() {
  const { currentUser } = useAuth();
  const [activities, setActivities] = useState([]);
  const [completedActivities, setCompletedActivities] = useState([]);

  useEffect(() => {
    // Load completed activities from localStorage
    const savedCompleted = JSON.parse(localStorage.getItem('completedActivities') || '[]');
    setCompletedActivities(savedCompleted);

    // Set activities based on program type
    const programActivities = {
      'weight-gain': [
        { id: 1, title: 'Strength Training', points: 10, description: 'Complete a full body workout focusing on compound movements', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 2, title: 'Protein-Rich Meal', points: 5, description: 'Consume a meal with at least 30g of protein', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 3, title: 'Calorie Surplus', points: 5, description: 'Maintain a 300-500 calorie surplus for the day', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 4, title: 'Rest Day', points: 3, description: 'Take a proper rest day with adequate sleep', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 5, title: 'Progress Photo', points: 2, description: 'Take a progress photo to track muscle growth', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 6, title: 'Meal Prep', points: 5, description: 'Prepare high-calorie meals for the week', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 7, title: 'Supplement Intake', points: 2, description: 'Take your prescribed supplements', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 8, title: 'Weight Check', points: 3, description: 'Record your weekly weight', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 9, title: 'Stretching Session', points: 3, description: 'Complete a 15-minute stretching routine', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> },
        { id: 10, title: 'Progress Review', points: 5, description: 'Review your weekly progress and adjust goals', icon: <FaDumbbell className="h-6 w-6 text-blue-500" /> }
      ],
      'weight-loss': [
        { id: 1, title: 'Cardio Session', points: 10, description: 'Complete 30 minutes of cardio exercise', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 2, title: 'Healthy Meal', points: 5, description: 'Prepare and eat a balanced, low-calorie meal', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 3, title: 'Water Intake', points: 3, description: 'Drink 2 liters of water', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 4, title: 'Step Goal', points: 5, description: 'Achieve 10,000 steps', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 5, title: 'Progress Photo', points: 2, description: 'Take a progress photo to track weight loss', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 6, title: 'Meal Prep', points: 5, description: 'Prepare healthy meals for the week', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 7, title: 'No Junk Food', points: 5, description: 'Avoid processed and junk food for the day', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 8, title: 'Weight Check', points: 3, description: 'Record your weekly weight', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 9, title: 'Stretching Session', points: 3, description: 'Complete a 15-minute stretching routine', icon: <FaRunning className="h-6 w-6 text-green-500" /> },
        { id: 10, title: 'Progress Review', points: 5, description: 'Review your weekly progress and adjust goals', icon: <FaRunning className="h-6 w-6 text-green-500" /> }
      ],
      'weight-balance': [
        { id: 1, title: 'Balanced Workout', points: 10, description: 'Complete a balanced workout session', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 2, title: 'Healthy Meal', points: 5, description: 'Prepare and eat a balanced meal', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 3, title: 'Water Intake', points: 3, description: 'Drink 2 liters of water', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 4, title: 'Step Goal', points: 5, description: 'Achieve 8,000 steps', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 5, title: 'Progress Photo', points: 2, description: 'Take a progress photo to track maintenance', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 6, title: 'Meal Prep', points: 5, description: 'Prepare balanced meals for the week', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 7, title: 'Mindful Eating', points: 5, description: 'Practice mindful eating for all meals', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 8, title: 'Weight Check', points: 3, description: 'Record your weekly weight', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 9, title: 'Stretching Session', points: 3, description: 'Complete a 15-minute stretching routine', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> },
        { id: 10, title: 'Progress Review', points: 5, description: 'Review your weekly progress and adjust goals', icon: <FaBalanceScale className="h-6 w-6 text-purple-500" /> }
      ]
    };

    setActivities(programActivities[currentUser?.programType] || []);
  }, [currentUser?.programType]);

  const toggleActivity = (activityId) => {
    const newCompleted = completedActivities.includes(activityId)
      ? completedActivities.filter(id => id !== activityId)
      : [...completedActivities, activityId];
    
    setCompletedActivities(newCompleted);
    localStorage.setItem('completedActivities', JSON.stringify(newCompleted));
  };

  const getTotalPoints = () => {
    return activities.reduce((total, activity) => {
      return completedActivities.includes(activity.id) ? total + activity.points : total;
    }, 0);
  };

  const getProgramColor = () => {
    switch (currentUser?.programType) {
      case 'weight-gain':
        return 'text-blue-500';
      case 'weight-loss':
        return 'text-green-500';
      case 'weight-balance':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Daily Activities</h1>
            <p className={`text-lg ${getProgramColor()} mt-2`}>
              {currentUser?.programType === 'weight-gain' ? 'Weight Gain Program' :
               currentUser?.programType === 'weight-loss' ? 'Weight Loss Program' :
               'Weight Balance Program'}
            </p>
          </div>
          <Link 
            to="/goals" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            View Goals <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Progress Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">Total Points</p>
              <p className="text-2xl font-bold">{getTotalPoints()}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">Activities Completed</p>
              <p className="text-2xl font-bold">{completedActivities.length}/{activities.length}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">Completion Rate</p>
              <p className="text-2xl font-bold">
                {Math.round((completedActivities.length / activities.length) * 100)}%
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map(activity => (
            <div key={activity.id} className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getProgramColor().replace('text', 'bg').replace('-500', '-900')}`}>
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-gray-400 mb-4">{activity.description}</p>
                    <span className={`${getProgramColor()} font-medium`}>{activity.points} points</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleActivity(activity.id)}
                  className={`p-2 rounded-full ${
                    completedActivities.includes(activity.id)
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {completedActivities.includes(activity.id) ? (
                    <FaCheck className="text-white" />
                  ) : (
                    <FaTimes className="text-white" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 