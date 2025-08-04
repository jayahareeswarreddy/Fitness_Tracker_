import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/StableAuthContext';
import { progressService } from '../services';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaChartLine } from 'react-icons/fa';

export default function ProgressManager() {
  const { currentUser } = useAuth();
  const [progressEntries, setProgressEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    bodyFat: '',
    muscleMass: '',
    notes: ''
  });

  useEffect(() => {
    fetchProgressEntries();
  }, []);

  const fetchProgressEntries = async () => {
    try {
      setLoading(true);
      const data = await progressService.getProgressEntries();
      setProgressEntries(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching progress entries:', err);
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
      if (editingEntry) {
        await progressService.updateProgress(editingEntry._id, formData);
      } else {
        await progressService.createProgress(formData);
      }
      await fetchProgressEntries();
      resetForm();
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error saving progress entry:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setFormData({
      weight: entry.weight,
      height: entry.height,
      bodyFat: entry.bodyFat || '',
      muscleMass: entry.muscleMass || '',
      notes: entry.notes || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this progress entry?')) {
      try {
        setLoading(true);
        await progressService.deleteProgress(id);
        await fetchProgressEntries();
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error deleting progress entry:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      weight: '',
      height: '',
      bodyFat: '',
      muscleMass: '',
      notes: ''
    });
    setEditingEntry(null);
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

  if (loading && progressEntries.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Progress Tracker</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center px-4 py-2 rounded-lg ${getProgramBgColor()} text-white hover:opacity-90 transition-opacity`}
        >
          {showForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showForm ? 'Cancel' : 'Add Progress'}
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
              <label className="block text-gray-300 mb-2" htmlFor="weight">
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="height">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="bodyFat">
                Body Fat % (optional)
              </label>
              <input
                type="number"
                id="bodyFat"
                name="bodyFat"
                value={formData.bodyFat}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="muscleMass">
                Muscle Mass % (optional)
              </label>
              <input
                type="number"
                id="muscleMass"
                name="muscleMass"
                value={formData.muscleMass}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="notes">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
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
              {editingEntry ? 'Update Progress' : 'Add Progress'}
            </button>
          </div>
        </form>
      )}

      {progressEntries.length === 0 && !showForm ? (
        <div className="text-center py-8 text-gray-400">
          <p>No progress entries found. Add your first progress entry to get started!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead className={`${getProgramBgColor()} text-white`}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Height</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">BMI</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Body Fat</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Muscle Mass</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {progressEntries.map((entry) => (
                <tr key={entry._id} className="hover:bg-gray-600">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {formatDate(entry.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {entry.weight} kg
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {entry.height} cm
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {entry.bmi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {entry.bodyFat ? `${entry.bodyFat}%` : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {entry.muscleMass ? `${entry.muscleMass}%` : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(entry)}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(entry._id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 