import React from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './DeleteAllUsers.css';

const DeleteAllUsers = () => {
  const handleDeleteAllUsers = async () => {
    try {
      const response = await axios.delete('http://localhost:8000/api/deleteAll');
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error deleting all users:', error);
      toast.error('Error deleting all users');
    }
  };

  return (
    <div>
      <h2>Delete All Users</h2>
      <button onClick={handleDeleteAllUsers}>Delete All Users</button>
    </div>
  );
};

export default DeleteAllUsers;