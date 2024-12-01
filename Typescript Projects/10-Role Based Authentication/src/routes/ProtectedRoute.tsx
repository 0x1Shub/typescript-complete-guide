import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: Array<'admin' | 'editor' | 'user'>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user.role) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/not-authorized" />;

  return children;
};

export default ProtectedRoute;
