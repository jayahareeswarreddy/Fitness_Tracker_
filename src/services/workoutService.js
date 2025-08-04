import api from './api';

/**
 * Get all workouts for the current user
 * @returns {Promise} Promise object with workouts data
 */
export const getWorkouts = async () => {
  try {
    const response = await api.get('/workouts');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch workouts');
  }
};

/**
 * Get a specific workout by ID
 * @param {string} id - Workout ID
 * @returns {Promise} Promise object with workout data
 */
export const getWorkoutById = async (id) => {
  try {
    const response = await api.get(`/workouts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch workout');
  }
};

/**
 * Create a new workout
 * @param {Object} workoutData - Workout data
 * @returns {Promise} Promise object with created workout data
 */
export const createWorkout = async (workoutData) => {
  try {
    const response = await api.post('/workouts', workoutData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create workout');
  }
};

/**
 * Update an existing workout
 * @param {string} id - Workout ID
 * @param {Object} workoutData - Updated workout data
 * @returns {Promise} Promise object with updated workout data
 */
export const updateWorkout = async (id, workoutData) => {
  try {
    const response = await api.patch(`/workouts/${id}`, workoutData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update workout');
  }
};

/**
 * Delete a workout
 * @param {string} id - Workout ID
 * @returns {Promise} Promise object with deletion result
 */
export const deleteWorkout = async (id) => {
  try {
    const response = await api.delete(`/workouts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete workout');
  }
}; 