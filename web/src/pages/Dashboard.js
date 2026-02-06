import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/user/me?userId=${userId}`);
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">
          <div className="spinner"></div>
          Loading your profile...
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {user && (
          <div className="profile-section">
            <h2>👤 Profile Information</h2>
            <div className="profile-item">
              <span className="profile-label">ID:</span>
              <span className="profile-value">{user.id}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">First Name:</span>
              <span className="profile-value">{user.firstName}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Last Name:</span>
              <span className="profile-value">{user.lastName}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Username:</span>
              <span className="profile-value">{user.username}</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email:</span>
              <span className="profile-value">{user.email}</span>
            </div>
          </div>
        )}

        <div className="profile-section">
          <h2>✅ Account Status</h2>
          <div className="profile-item">
            <span className="profile-label">Status:</span>
            <span className="profile-value" style={{ color: '#27ae60' }}>Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
