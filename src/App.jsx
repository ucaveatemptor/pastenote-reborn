import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Mock login/register handlers
  const handleLogin = (credentials) => {
    console.log('Logging in with', credentials);
    // Здесь будет запрос к API
    setUser({ name: 'Алекс', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=A' });
    setIsLoggedIn(true);
  };

  const handleRegister = (details) => {
    console.log('Registering with', details);
    // Здесь будет запрос к API
    setUser({ name: details.name, avatar: `https://placehold.co/40x40/E2E8F0/4A5568?text=${details.name.charAt(0)}` });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const handleUserUpdate = (newUserData) => {
      setUser(prevUser => ({...prevUser, ...newUserData}));
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      {isLoggedIn ? (
        <Dashboard user={user} onUserUpdate={handleUserUpdate} onLogout={handleLogout} />
      ) : (
        <LandingPage onLogin={handleLogin} onRegister={handleRegister} />
      )}
    </div>
  );
}