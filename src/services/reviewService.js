import api from './api';

/**
 * Get all reviews
 * @returns {Promise} Promise object with reviews data
 */
export const getReviews = async () => {
  try {
    const response = await api.get('/reviews');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch reviews');
  }
};

/**
 * Create a new review
 * @param {Object} reviewData - Review data
 * @returns {Promise} Promise object with created review data
 */
export const createReview = async (reviewData) => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create review');
  }
};

/**
 * Like a review
 * @param {string} id - Review ID
 * @returns {Promise} Promise object with updated review data
 */
export const likeReview = async (id) => {
  try {
    const response = await api.post(`/reviews/${id}/like`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to like review');
  }
}; 