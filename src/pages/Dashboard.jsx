import React, { useEffect } from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { FaDumbbell, FaAppleAlt, FaChartLine, FaCalendarAlt, FaBullseye } from 'react-icons/fa';
import UserProgramInfo from '../components/UserProgramInfo';

export default function Dashboard() {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log('Current User Program Type:', currentUser?.programType);
  }, [currentUser]);

  const getProgramSpecificData = () => {
    const programType = currentUser?.programType;
    console.log('Getting program data for type:', programType);

    if (!programType) {
      return {
        title: 'No Program Selected',
        description: 'Please select a program to get started',
        stats: {
          dailyCalories: 'N/A',
          proteinIntake: 'N/A',
          workoutFrequency: 'N/A',
          restDays: 'N/A'
        },
        keyFocus: [
          'Select a program type to get started',
          'Choose between weight loss, gain, or balance',
          'Follow the program guidelines',
          'Track your progress regularly'
        ]
      };
    }

    switch (programType) {
      case 'weight-gain':
        return {
          title: 'Weight Gain Program',
          description: 'Focus on building muscle mass and increasing calorie intake',
          stats: {
            dailyCalories: '2500-3000',
            proteinIntake: '1.6-2.2g per kg',
            workoutFrequency: '4-5 times per week',
            restDays: '2-3 days per week'
          },
          keyFocus: [
            'Strength training with progressive overload',
            'High protein diet with healthy fats',
            'Adequate rest and recovery',
            'Consistent meal timing'
          ]
        };
      case 'weight-loss':
        return {
          title: 'Weight Loss Program',
          description: 'Focus on fat loss while maintaining muscle mass',
          stats: {
            dailyCalories: '1500-2000',
            proteinIntake: '1.2-1.6g per kg',
            workoutFrequency: '5-6 times per week',
            restDays: '1-2 days per week'
          },
          keyFocus: [
            'Cardio and HIIT workouts',
            'Calorie deficit with balanced nutrition',
            'Regular activity throughout the day',
            'Portion control and mindful eating'
          ]
        };
      case 'weight-balance':
        return {
          title: 'Weight Balance Program',
          description: 'Maintain current weight while improving overall fitness',
          stats: {
            dailyCalories: '2000-2500',
            proteinIntake: '1.0-1.4g per kg',
            workoutFrequency: '3-4 times per week',
            restDays: '3-4 days per week'
          },
          keyFocus: [
            'Balanced workout routine',
            'Maintenance calorie intake',
            'Regular physical activity',
            'Stress management and sleep'
          ]
        };
      default:
        console.warn('Unknown program type:', programType);
        return {
          title: 'No Program Selected',
          description: 'Please select a program to get started',
          stats: {
            dailyCalories: 'N/A',
            proteinIntake: 'N/A',
            workoutFrequency: 'N/A',
            restDays: 'N/A'
          },
          keyFocus: [
            'Select a program type to get started',
            'Choose between weight loss, gain, or balance',
            'Follow the program guidelines',
            'Track your progress regularly'
          ]
        };
    }
  };

  const programData = getProgramSpecificData();
  console.log('Program Data:', programData);

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

  const getProgramBgColor = () => {
    switch (currentUser?.programType) {
      case 'weight-gain':
        return 'bg-blue-900';
      case 'weight-loss':
        return 'bg-green-900';
      case 'weight-balance':
        return 'bg-purple-900';
      default:
        return 'bg-gray-900';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UserProgramInfo />
        
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{programData.title}</h1>
          <p className="text-gray-300 mb-8">{programData.description}</p>

          {/* Program Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center">
                <FaAppleAlt className={`text-2xl mr-3 ${getProgramColor()}`} />
                <div>
                  <p className={`text-sm ${getProgramColor()}`}>Daily Calories</p>
                  <p className="text-xl font-bold text-white">{programData.stats.dailyCalories}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center">
                <FaDumbbell className={`text-2xl mr-3 ${getProgramColor()}`} />
                <div>
                  <p className={`text-sm ${getProgramColor()}`}>Protein Intake</p>
                  <p className="text-xl font-bold text-white">{programData.stats.proteinIntake}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center">
                <FaCalendarAlt className={`text-2xl mr-3 ${getProgramColor()}`} />
                <div>
                  <p className={`text-sm ${getProgramColor()}`}>Workout Frequency</p>
                  <p className="text-xl font-bold text-white">{programData.stats.workoutFrequency}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center">
                <FaChartLine className={`text-2xl mr-3 ${getProgramColor()}`} />
                <div>
                  <p className={`text-sm ${getProgramColor()}`}>Rest Days</p>
                  <p className="text-xl font-bold text-white">{programData.stats.restDays}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaBullseye className={`mr-2 ${getProgramColor()}`} />
              Key Focus Areas
            </h2>
            <div className="bg-gray-700 p-6 rounded-lg">
              <ul className="space-y-3">
                {programData.keyFocus.map((focus, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`${getProgramColor()} mr-2`}>•</span>
                    <span className="text-gray-300">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 