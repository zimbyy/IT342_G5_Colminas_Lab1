import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('userId'));

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  const handleLoginSuccess = (userId, username) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
