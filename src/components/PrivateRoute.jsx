import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/StableAuthContext';

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();

  // Show nothing while still initializing auth
  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
} 