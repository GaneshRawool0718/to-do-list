import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// SignupForm component
// This component handles user signup functionality
const SignupForm = ({ onSignup }) => {
  // State to manage form data
  // This will hold the user's name, email, and password
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  // Hook to programmatically navigate to different routes
  // This will be used to redirect the user after signup
  const navigate = useNavigate();

  // Function to handle input changes
  // This updates the formData state with the input values
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Function to handle form submission
  // This will be called when the user submits the signup form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignup) {
      onSignup({ ...formData, role: 'user' });
    }
    // After signup, navigate to login page
    navigate('/login');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
