import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// Mock fetch function (imitates API call)
const mockFetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // You can change this to `null` to simulate unauthenticated user
      resolve({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      });
    }, 1500); // simulate 1.5 second delay
  });
};

// Provider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchUser().then((userData) => {
      setUser(userData);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};