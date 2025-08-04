import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BMICalculator from '../components/BMICalculator';
import { FaWeightHanging, FaRunning, FaDumbbell } from 'react-icons/fa';

const services = [
  {
    title: "Weight Gain Programs",
    description: "Build muscle mass and gain weight in a healthy way with nutrition guidance and strength routines.",
    icon: <FaWeightHanging className="h-7 w-7 text-blue-400" />,
    link: "/weight-gain",
    bg: "bg-blue-600/30",
    textColor: "text-blue-400",
    hoverColor: "hover:text-blue-300"
  },
  {
    title: "Weight Loss Plans",
    description: "Sustainable strategies for weight loss with proper nutrition, workouts, and lifestyle adjustments.",
    icon: <FaRunning className="h-7 w-7 text-red-400" />,
    link: "/weight-loss",
    bg: "bg-red-600/30",
    textColor: "text-red-400",
    hoverColor: "hover:text-red-300"
  },
  {
    title: "Weight Maintenance",
    description: "Balanced plans to maintain your current weight and improve your strength and endurance.",
    icon: <FaDumbbell className="h-7 w-7 text-green-400" />,
    link: "/weight-balance",
    bg: "bg-green-600/30",
    textColor: "text-green-400",
    hoverColor: "hover:text-green-300"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/home-bg.jpg')`
    }}>
      <Navbar />

      {/* BMI Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Calculate Your BMI</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Your Body Mass Index is a simple calculation using your height and weight. It gives you insight into your body composition and helps determine your fitness goals.
          </p>
          <BMICalculator />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We offer comprehensive fitness solutions tailored to your specific needs and goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${service.bg} rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className={`${service.textColor} ${service.hoverColor} font-medium inline-flex items-center space-x-1`}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm text-gray-400 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">FitTrack</h3>
            <p className="text-sm">Your personal fitness companion for achieving your health and fitness goals.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/weight-gain" className="hover:text-white">Weight Gain</Link></li>
              <li><Link to="/weight-loss" className="hover:text-white">Weight Loss</Link></li>
              <li><Link to="/weight-balance" className="hover:text-white">Weight Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">BMI Calculator</Link></li>
              <li><span className="cursor-not-allowed">Fitness Blog</span></li>
              <li><span className="cursor-not-allowed">Nutrition Guides</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">Have questions or feedback? Reach out to our support team.</p>
            <div className="mt-3">
              <span className="cursor-not-allowed text-blue-400 hover:text-blue-300 text-sm">
                abdullahsiddarapu@gmail.com
              
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} FitTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
