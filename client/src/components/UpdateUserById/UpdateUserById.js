// UpdateUserById.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './UpdateUserById.css'; // Import the CSS file

const UpdateUserById = () => {
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/updateById/${userId}`, formData);
      toast.success('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  return (
    <div className="container">
      <h2>Update User Data by ID</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserById;
