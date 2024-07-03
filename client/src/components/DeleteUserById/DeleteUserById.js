// DeleteUserById.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './DeleteUserById.css'; // Import the CSS file

const DeleteUserById = () => {
  const [userId, setUserId] = useState('');

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/deleteById/${userId}`);
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user');
    }
  };

  return (
    <div className="container">
      <h2>Delete User Data by ID</h2>
      <form>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleDeleteUser}>Delete User</button>
      </form>
    </div>
  );
};

export default DeleteUserById;