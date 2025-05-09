import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:5000/api/user/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
    }
    fetchData();
  }, [token]);

  return user ? (
    <div>
      <h2>Welcome, {user.email}</h2>
      <p>Subscription Status: {user.subscriptionStatus}</p>
      <p>Start Date: {new Date(user.subscriptionStartDate).toDateString()}</p>
      <p>End Date: {new Date(user.subscriptionEndDate).toDateString()}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
