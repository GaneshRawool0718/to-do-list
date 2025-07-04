import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import SignupForm from './components/SignupForm';
import Homepage from './pages/homepage';
import LoginForm from './components/LoginForm';
import ViewAll from './pages/ViewAll';
import AdminDashboard from './components/AdminDashboard'; // Import your AdminDashboard component


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* Signup page (set as default route) */}
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Login page */}
          <Route path="/login" element={<LoginForm />} />


          {/* Homepage route */}
          <Route path="/home" element={<Homepage />} />

          {/* View all tasks page (should be passed props from Homepage if you want to share state) */}
          <Route path="/tasks" element={<ViewAll />} />

          {/* Admin Dashboard route */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Catch-all: redirect to signup */}
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
