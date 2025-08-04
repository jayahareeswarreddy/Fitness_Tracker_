import api from './api';

/**
 * Get all progress entries for the current user
 * @returns {Promise} Promise object with progress data
 */
export const getProgressEntries = async () => {
  try {
    const response = await api.get('/progress');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch progress entries');
  }
};

/**
 * Get the latest progress entry for the current user
 * @returns {Promise} Promise object with latest progress data
 */
export const getLatestProgress = async () => {
  try {
    const response = await api.get('/progress/latest');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch latest progress');
  }
};

/**
 * Get a specific progress entry by ID
 * @param {string} id - Progress entry ID
 * @returns {Promise} Promise object with progress data
 */
export const getProgressById = async (id) => {
  try {
    const response = await api.get(`/progress/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch progress entry');
  }
};

/**
 * Create a new progress entry
 * @param {Object} progressData - Progress data
 * @returns {Promise} Promise object with created progress data
 */
export const createProgress = async (progressData) => {
  try {
    const response = await api.post('/progress', progressData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create progress entry');
  }
};

/**
 * Update an existing progress entry
 * @param {string} id - Progress entry ID
 * @param {Object} progressData - Updated progress data
 * @returns {Promise} Promise object with updated progress data
 */
export const updateProgress = async (id, progressData) => {
  try {
    const response = await api.patch(`/progress/${id}`, progressData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update progress entry');
  }
};

/**
 * Delete a progress entry
 * @param {string} id - Progress entry ID
 * @returns {Promise} Promise object with deletion result
 */
export const deleteProgress = async (id) => {
  try {
    const response = await api.delete(`/progress/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete progress entry');
  }
}; 