import api from './api';

/**
 * Get all meals for the current user
 * @returns {Promise} Promise object with meals data
 */
export const getMeals = async () => {
  try {
    const response = await api.get('/meals');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch meals');
  }
};

/**
 * Get a specific meal by ID
 * @param {string} id - Meal ID
 * @returns {Promise} Promise object with meal data
 */
export const getMealById = async (id) => {
  try {
    const response = await api.get(`/meals/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch meal');
  }
};

/**
 * Create a new meal
 * @param {Object} mealData - Meal data
 * @returns {Promise} Promise object with created meal data
 */
export const createMeal = async (mealData) => {
  try {
    const response = await api.post('/meals', mealData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create meal');
  }
};

/**
 * Update an existing meal
 * @param {string} id - Meal ID
 * @param {Object} mealData - Updated meal data
 * @returns {Promise} Promise object with updated meal data
 */
export const updateMeal = async (id, mealData) => {
  try {
    const response = await api.patch(`/meals/${id}`, mealData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update meal');
  }
};

/**
 * Delete a meal
 * @param {string} id - Meal ID
 * @returns {Promise} Promise object with deletion result
 */
export const deleteMeal = async (id) => {
  try {
    const response = await api.delete(`/meals/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete meal');
  }
};

/**
 * Get diet plans based on program type
 * @param {string} programType - Program type (weight-loss, weight-gain, weight-balance)
 * @returns {Promise} Promise object with diet plans data
 */
export const getDietPlans = async (programType) => {
  try {
    const response = await api.get(`/diet-plans?programType=${programType}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch diet plans');
  }
}; 