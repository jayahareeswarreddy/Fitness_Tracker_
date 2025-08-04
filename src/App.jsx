// App.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/StableAuthContext';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MealPlanner from './pages/MealPlanner';
import WeightGain from './pages/WeightGain';
import WeightLoss from './pages/WeightLoss';
import WeightBalance from './pages/WeightBalance';
import Goals from './pages/Goals';
import Activities from './pages/Activities';
import NotFound from './pages/NotFound';
import WorkoutManager from './components/WorkoutManager';
import ProgressManager from './components/ProgressManager';
import ReviewManager from './components/ReviewManager';

// Spinner shown during auth initialization
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-xl font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Error message component
function ErrorMessage({ message }) {
  return (
    <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>{message}</p>
    </div>
  );
}

// Handles protected and public routes
function AppRoutes() {
  const { isAuthenticated, isInitialized, isLoading, error } = useAuth();

  if (!isInitialized) return <LoadingSpinner />;

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/meal-planner" element={isAuthenticated ? <MealPlanner /> : <Navigate to="/login" />} />
        <Route path="/weight-gain" element={isAuthenticated ? <WeightGain /> : <Navigate to="/login" />} />
        <Route path="/weight-loss" element={isAuthenticated ? <WeightLoss /> : <Navigate to="/login" />} />
        <Route path="/weight-balance" element={isAuthenticated ? <WeightBalance /> : <Navigate to="/login" />} />
        <Route path="/goals" element={isAuthenticated ? <Goals /> : <Navigate to="/login" />} />
        <Route path="/activities" element={isAuthenticated ? <Activities /> : <Navigate to="/login" />} />
        <Route path="/workouts" element={isAuthenticated ? <WorkoutManager /> : <Navigate to="/login" />} />
        <Route path="/progress" element={isAuthenticated ? <ProgressManager /> : <Navigate to="/login" />} />
        <Route path="/reviews" element={isAuthenticated ? <ReviewManager /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// Root App component
export default function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}
