import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className='mb-3'>
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input name="email" type="email" className='form-control' placeholder="Email" onChange={handleChange} required />
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input name="password" type="password" className='form-control mb-3' placeholder="Password" onChange={handleChange} required />
      <button type="submit" className='btn btn-primary'>Login</button>
    </form>
  );
}
