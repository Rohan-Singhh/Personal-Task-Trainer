import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('taskTracker_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication - in a real app, this would validate against a backend
    if (username && password) {
      const userData = {
        id: 1,
        username: username,
        name: username.charAt(0).toUpperCase() + username.slice(1),
        loginTime: new Date().toISOString()
      };
      
      setUser(userData);
      localStorage.setItem('taskTracker_user', JSON.stringify(userData));
      return { success: true };
    }
    
    return { success: false, error: 'Please enter both username and password' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('taskTracker_user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}