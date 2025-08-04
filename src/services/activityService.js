import api from './api';

/**
 * Get all activities for the current user
 * @returns {Promise} Promise object with activities data
 */
export const getActivities = async () => {
  try {
    const response = await api.get('/activities');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch activities');
  }
};

/**
 * Get a specific activity by ID
 * @param {string} id - Activity ID
 * @returns {Promise} Promise object with activity data
 */
export const getActivityById = async (id) => {
  try {
    const response = await api.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch activity');
  }
};

/**
 * Create a new activity
 * @param {Object} activityData - Activity data
 * @returns {Promise} Promise object with created activity data
 */
export const createActivity = async (activityData) => {
  try {
    const response = await api.post('/activities', activityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create activity');
  }
};

/**
 * Update an existing activity
 * @param {string} id - Activity ID
 * @param {Object} activityData - Updated activity data
 * @returns {Promise} Promise object with updated activity data
 */
export const updateActivity = async (id, activityData) => {
  try {
    const response = await api.patch(`/activities/${id}`, activityData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update activity');
  }
};

/**
 * Delete an activity
 * @param {string} id - Activity ID
 * @returns {Promise} Promise object with deletion result
 */
export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activities/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete activity');
  }
};

/**
 * Mark an activity as completed
 * @param {string} id - Activity ID
 * @returns {Promise} Promise object with updated activity data
 */
export const completeActivity = async (id) => {
  try {
    const response = await api.post(`/activities/${id}/complete`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to complete activity');
  }
}; 