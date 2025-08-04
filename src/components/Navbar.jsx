import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/StableAuthContext';
import { FaBars, FaTimes, FaUser, FaDumbbell, FaChartLine, FaTasks, FaBullseye, FaChartBar, FaStar } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaDumbbell className="mr-2" /> },
    { to: '/dashboard', label: 'Dashboard', icon: <FaChartLine className="mr-2" /> },
    { to: '/activities', label: 'Activities', icon: <FaTasks className="mr-2" /> },
    { to: '/goals', label: 'Goals', icon: <FaBullseye className="mr-2" /> },
    { to: '/workouts', label: 'Workouts', icon: <FaDumbbell className="mr-2" /> },
    { to: '/progress', label: 'Progress', icon: <FaChartBar className="mr-2" /> },
    { to: '/reviews', label: 'Reviews', icon: <FaStar className="mr-2" /> },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <FaDumbbell className="h-8 w-8 mr-2 text-blue-500" />
            <Link to="/" className="text-xl font-bold">
              FitTrack
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-10">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={label}
                to={to}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>

          {/* User Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            {currentUser ? (
              <>
                <div className="flex items-center space-x-2">
                  <FaUser className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300 text-sm">{currentUser.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ to, label, icon }) => (
              <Link
                key={label}
                to={to}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700 px-5 flex items-center justify-between">
            {currentUser ? (
              <>
                <div className="flex items-center">
                  <FaUser className="h-6 w-6 text-gray-300" />
                  <div className="ml-3">
                    <div className="text-base font-medium">{currentUser.name}</div>
                    <div className="text-sm font-medium text-gray-400">{currentUser.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
