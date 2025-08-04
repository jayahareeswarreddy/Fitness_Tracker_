import React from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { Link } from 'react-router-dom';

export default function UserProgramInfo() {
  const { currentUser } = useAuth();

  const getProgramDetails = () => {
    switch (currentUser?.programType) {
      case 'weight-gain':
        return {
          title: 'Weight Gain Program',
          description: 'Focused on building muscle mass and increasing calorie intake',
          link: '/weight-gain'
        };
      case 'weight-loss':
        return {
          title: 'Weight Loss Program',
          description: 'Focused on reducing body fat and maintaining muscle mass',
          link: '/weight-loss'
        };
      case 'weight-balance':
        return {
          title: 'Weight Balance Program',
          description: 'Focused on maintaining current weight and improving overall fitness',
          link: '/weight-balance'
        };
      default:
        return {
          title: 'No Program Selected',
          description: 'Please select a program to get started',
          link: '/dashboard'
        };
    }
  };

  const program = getProgramDetails();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Current Program</h2>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{program.title}</h3>
        <p className="text-gray-700 mb-4">{program.description}</p>
        <Link 
          to={program.link}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          View Program Details
        </Link>
      </div>
    </div>
  );
} 