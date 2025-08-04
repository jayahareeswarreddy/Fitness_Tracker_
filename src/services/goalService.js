import api from './api';

/**
 * Get all goals for the current user
 * @returns {Promise} Promise object with goals data
 */
export const getGoals = async () => {
  try {
    const response = await api.get('/goals');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch goals');
  }
};

/**
 * Get a specific goal by ID
 * @param {string} id - Goal ID
 * @returns {Promise} Promise object with goal data
 */
export const getGoalById = async (id) => {
  try {
    const response = await api.get(`/goals/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch goal');
  }
};

/**
 * Create a new goal
 * @param {Object} goalData - Goal data
 * @returns {Promise} Promise object with created goal data
 */
export const createGoal = async (goalData) => {
  try {
    const response = await api.post('/goals', goalData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create goal');
  }
};

/**
 * Update an existing goal
 * @param {string} id - Goal ID
 * @param {Object} goalData - Updated goal data
 * @returns {Promise} Promise object with updated goal data
 */
export const updateGoal = async (id, goalData) => {
  try {
    const response = await api.patch(`/goals/${id}`, goalData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update goal');
  }
};

/**
 * Delete a goal
 * @param {string} id - Goal ID
 * @returns {Promise} Promise object with deletion result
 */
export const deleteGoal = async (id) => {
  try {
    const response = await api.delete(`/goals/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete goal');
  }
};

/**
 * Mark a goal as completed
 * @param {string} id - Goal ID
 * @returns {Promise} Promise object with updated goal data
 */
export const completeGoal = async (id) => {
  try {
    const response = await api.post(`/goals/${id}/complete`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to complete goal');
  }
}; 