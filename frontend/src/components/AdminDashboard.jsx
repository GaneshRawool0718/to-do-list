import React, { useState } from 'react';
import '../App.css';

// AdminDashboard component
// This component displays the admin dashboard with user management features
const AdminDashboard = () => {
  const admin = {
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  };

  const allUsers = [
    { name: 'Ganesh', email: 'user1@example.com' },
    { name: 'Virat', email: 'user2@example.com' },
    { name: 'Rajat', email: 'user3@example.com' },
  ];

    // State to manage active view and search query
    // This will toggle between admin profile and user list views
    
  const [activeView, setActiveView] = useState('users'); // 'admin' or 'users'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Filter users by search input
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      {/* Header */}
      <h1 className="admin-heading">🛠️ Admin Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => setActiveView('admin')}>Admin Profile</button>
        <button onClick={() => setActiveView('users')}>View All Users</button>
      </div>

      {/* Admin Profile View */}
      {activeView === 'admin' && (
        <div className="admin-info">
          <h2>👤 Admin Profile</h2>
          <p><strong>Name:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      )}

      {/* Users List View */}
      {activeView === 'users' && (
        <div className="user-table-wrapper">
          <h2>👥 All Users</h2>

          {/* Search Input */}
          <input
            type="text"
            className="search-input"
            placeholder="Search users by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Users Table */}
          {filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            <table className="user-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => setSelectedUser(user)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Selected User Profile View */}
          {selectedUser && (
            <div className="user-profile-card">
              <h3>👤 User Profile</h3>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <button
                className="btn-delete"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
