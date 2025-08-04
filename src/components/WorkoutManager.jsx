import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { workoutService } from '../services';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export default function WorkoutManager() {
  const { currentUser } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    duration: '',
    description: '',
    exercises: []
  });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      setLoading(true);
      const data = await workoutService.getWorkouts();
      setWorkouts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching workouts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editingWorkout) {
        await workoutService.updateWorkout(editingWorkout._id, formData);
      } else {
        await workoutService.createWorkout(formData);
      }
      await fetchWorkouts();
      resetForm();
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error saving workout:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
    setFormData({
      title: workout.name,
      type: workout.type,
      duration: workout.duration,
      description: workout.notes || '',
      exercises: workout.exercises || []
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this workout?')) {
      try {
        setLoading(true);
        await workoutService.deleteWorkout(id);
        await fetchWorkouts();
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error deleting workout:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      type: '',
      duration: '',
      description: '',
      exercises: []
    });
    setEditingWorkout(null);
    setShowForm(false);
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

  if (loading && workouts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Workout Manager</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center px-4 py-2 rounded-lg ${getProgramBgColor()} text-white hover:opacity-90 transition-opacity`}
        >
          {showForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showForm ? 'Cancel' : 'Add Workout'}
        </button>
      </div>

      {error && (
        <div className="bg-red-900 text-white p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="title">
                Workout Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="type">
                Workout Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Type</option>
                <option value="strength">Strength Training</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="duration">
                Duration (minutes)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`px-6 py-2 rounded-lg ${getProgramBgColor()} text-white hover:opacity-90 transition-opacity flex items-center`}
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              ) : (
                <FaCheck className="mr-2" />
              )}
              {editingWorkout ? 'Update Workout' : 'Add Workout'}
            </button>
          </div>
        </form>
      )}

      {workouts.length === 0 && !showForm ? (
        <div className="text-center py-8 text-gray-400">
          <p>No workouts found. Add your first workout to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <div key={workout._id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{workout.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(workout)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(workout._id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="mb-2">
                <span className={`inline-block px-2 py-1 rounded text-xs ${getProgramBgColor()} text-white`}>
                  {workout.type}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white">{workout.duration} min</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Calories</p>
                  <p className="text-white">{workout.calories} kcal</p>
                </div>
              </div>
              {workout.notes && (
                <div>
                  <p className="text-gray-400 text-sm">Notes</p>
                  <p className="text-white text-sm">{workout.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 