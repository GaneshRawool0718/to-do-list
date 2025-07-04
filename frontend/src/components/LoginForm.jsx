import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// LoginForm component
// This component handles user login functionality
const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const ADMIN_EMAIL = 'admin@example.com';
  const navigate = useNavigate();

  // Function to handle input changes
  // This updates the formData state with the input values
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Function to handle form submission
  // This will be called when the user submits the login form
  const handleSubmit = (e) => {
    e.preventDefault();
    const role = formData.email === ADMIN_EMAIL ? 'admin' : 'user';
    if (onLogin) {
      onLogin({ ...formData, role });
    }
    // After login, navigate to admin dashboard or homepage
    if (formData.email === ADMIN_EMAIL) {
      navigate('/admin');
    } else {
      navigate('/home');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
