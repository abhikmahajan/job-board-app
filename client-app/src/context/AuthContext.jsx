import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get('/api/auth/me');
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password, userType) => {
    try {
      const res = await api.post('/api/auth/login', {
        email,
        password,
        userType
      });
      setUser(res.data.user);
      return res.data.user;
    } catch (err) {
      throw err;
    }
  };

  const signup = async (userData) => {
    try {
      const res = await api.post('/api/auth/signup', userData);
      setUser(res.data.user);
      return res.data.user;
    } catch (err) {
      throw err;
    }
  };

  const logout = async () => {
    try {
      await api.post('/api/auth/logout');
      setUser(null);
    } catch (err) {
      console.error('Error logging out:', err);
      setUser(null);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 