import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', startDate: '', duration: 'monthly' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register', {
      email: form.email,
      password: form.password,
      subscriptionStartDate: form.startDate,
      subscriptionDuration: form.duration
    });
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-3'>
       <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input name="email" type="email"className='form-control' placeholder="Email" onChange={handleChange} required />
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input name="password" type="password" className='form-control' placeholder="Password" onChange={handleChange} required />
      <label for="exampleInputDate1" className="form-label">Start Date</label>
      <input name="startDate" type="date" className='form-control' onChange={handleChange} required />
      <label for="exampleInputDuration1" className="form-label">Subscription Duration</label>
      <select name="duration" className='form-control mb-3' onChange={handleChange}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
      <button type="submit" className='btn btn-warning mb-3'>Register</button>
    </form>
  );
}