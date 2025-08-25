'use client';
import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import DashNav from '@/components/DashNav/DashNav';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <main>
      <DashNav />
      <h2>Welcome {user.name}</h2>
    </main>
  );
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <main>
      <DashNav />
      <h2>Welcome {user.name}</h2>
    </main>
  );
};

export default Dashboard;
