import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { reviewService } from '../services';
import { FaStar, FaThumbsUp, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

export default function ReviewManager() {
  const { currentUser } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rating: 5,
    title: '',
    content: '',
    programType: currentUser?.programType || 'weight-balance'
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const data = await reviewService.getReviews();
      setReviews(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching reviews:', err);
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

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await reviewService.createReview(formData);
      await fetchReviews();
      resetForm();
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error creating review:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (id) => {
    try {
      await reviewService.likeReview(id);
      await fetchReviews();
    } catch (err) {
      console.error('Error liking review:', err);
    }
  };

  const resetForm = () => {
    setFormData({
      rating: 5,
      title: '',
      content: '',
      programType: currentUser?.programType || 'weight-balance'
    });
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading && reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Reviews</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center px-4 py-2 rounded-lg ${getProgramBgColor()} text-white hover:opacity-90 transition-opacity`}
        >
          {showForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showForm ? 'Cancel' : 'Write a Review'}
        </button>
      </div>

      {error && (
        <div className="bg-red-900 text-white p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg mb-6">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-2xl ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="title">
              Title
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
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="content">
              Review
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
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
              Submit Review
            </button>
          </div>
        </form>
      )}

      {reviews.length === 0 && !showForm ? (
        <div className="text-center py-8 text-gray-400">
          <p>No reviews found. Be the first to write a review!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{review.title}</h3>
                  <p className="text-gray-400 text-sm">
                    By {review.userName} • {formatDate(review.createdAt)}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${
                          star <= review.rating ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleLike(review._id)}
                    className="flex items-center text-gray-400 hover:text-blue-400"
                  >
                    <FaThumbsUp className="mr-1" />
                    <span>{review.likes || 0}</span>
                  </button>
                </div>
              </div>
              <p className="text-white mb-2">{review.content}</p>
              <div className="flex justify-between items-center">
                <span className={`inline-block px-2 py-1 rounded text-xs ${getProgramBgColor()} text-white`}>
                  {review.programType === 'weight-gain'
                    ? 'Weight Gain'
                    : review.programType === 'weight-loss'
                    ? 'Weight Loss'
                    : 'Weight Balance'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 