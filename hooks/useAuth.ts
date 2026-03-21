import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock auth check - replace with real auth logic
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      // setUser(userData);
    }
  }, []);

  const login = (email: string, password: string) => {
    // Mock login
    localStorage.setItem('authToken', 'mock-token');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
}