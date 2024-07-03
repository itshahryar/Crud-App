// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/create-user" className="dashboard-link">Create User</Link>
        <Link to="/get-all-users" className="dashboard-link">Get All Users</Link>
        <Link to="/get-data-byId" className="dashboard-link">Get User by ID</Link>
        <Link to="/update-byId" className="dashboard-link">Update User by ID</Link>
        <Link to="/delete" className="dashboard-link">Delete User</Link>
        <Link to="/delete-all" className="dashboard-link">Delete All Users</Link>
        <Link to="/get-specific" className="dashboard-link">Get Specific Users</Link>
      </div>
    </div>
  );
};

export default Home;

