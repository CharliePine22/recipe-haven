'use client';

import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const currentUser =
    typeof window !== 'undefined' && localStorage.getItem('user');
  useEffect(() => {
    if (currentUser) setUser(JSON.parse(currentUser));
    else setUser('');
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
