import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  role: 'admin' | 'editor' | 'user' | null;
}

interface AuthContextProps {
  user: User;
  login: (role: User['role']) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: null });

  const login = (role: User['role']) => setUser({ role });
  const logout = () => setUser({ role: null });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
