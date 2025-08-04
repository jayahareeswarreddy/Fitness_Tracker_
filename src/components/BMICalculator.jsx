import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) return;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let category = '';
    let recommendation = '';
    let healthRisk = '';
    let weightPlan = 'balance';
    

    if (bmi < 18.5) {
      category = 'Underweight';
      recommendation = 'Focus on nutrient-dense foods and strength training to gain healthy weight.';
      healthRisk = 'Increased risk for various health issues including nutrient deficiencies.';
      weightPlan = 'gain';
    } else if (bmi < 25) {
      category = 'Normal weight';
      recommendation = 'Maintain your current healthy lifestyle with balanced nutrition and regular exercise.';
      healthRisk = 'Lowest risk for weight-related health problems.';
      weightPlan = 'balance';
    } else if (bmi < 30) {
      category = 'Overweight';
      recommendation = 'Focus on moderate calorie deficit through diet and increased physical activity.';
      healthRisk = 'Increased risk for heart disease, high blood pressure, and type 2 diabetes.';
      weightPlan = 'loss';
    } else {
      category = 'Obese';
      recommendation = 'Consult with a healthcare provider for a personalized weight management plan.';
      healthRisk = 'High risk for serious health conditions including heart disease, diabetes, and certain cancers.';
      weightPlan = 'loss';
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, recommendation, healthRisk, weightPlan });
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setResult(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">BMI Calculator</h3>
      <p className="text-gray-400 mb-6">Calculate your Body Mass Index (BMI) to determine if your weight is in a healthy range.</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-300">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-300">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500"
          />
        </div>

        <div className="flex space-x-4">
          <button onClick={calculateBMI} className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium">
            Calculate
          </button>
          <button onClick={resetCalculator} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md font-medium">
            Reset
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h4 className="text-lg font-medium mb-4">Your Results</h4>

          <div className="bg-gray-700 rounded-lg p-5 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Your BMI:</span>
              <span className="text-2xl font-bold">{result.bmi}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Category:</span>
              <span
                className={`font-medium ${
                  result.weightPlan === 'gain'
                    ? 'text-blue-400'
                    : result.weightPlan === 'loss'
                      ? 'text-red-400'
                      : 'text-green-400'
                }`}
              >
                {result.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-white mb-1">Health Risk:</h5>
              <p className="text-gray-300 text-sm">{result.healthRisk}</p>
            </div>

            <div>
              <h5 className="font-medium text-white mb-1">Recommendation:</h5>
              <p className="text-gray-300 text-sm">{result.recommendation}</p>
            </div>

            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Suggested Program:</h5>
              <div>
                {result.weightPlan === 'gain' && (
                  <Link to="/weight-gain" className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium">
                    View Weight Gain Program
                  </Link>
                )}
                {result.weightPlan === 'loss' && (
                  <Link to="/weight-loss" className="block w-full text-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-medium">
                    View Weight Loss Program
                  </Link>
                )}
                {result.weightPlan === 'balance' && (
                  <Link to="/weight-balance" className="block w-full text-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md font-medium">
                    View Weight Maintenance Program
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 