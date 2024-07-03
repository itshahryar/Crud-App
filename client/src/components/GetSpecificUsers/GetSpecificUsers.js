// GetSpecificUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './GetSpecificUsers.css'; // Import the CSS file

const GetSpecificUsers = () => {
  const [specificUsers, setSpecificUsers] = useState([]);

  useEffect(() => {
    const fetchSpecificUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getSpecificData');
        setSpecificUsers(response.data);
      } catch (error) {
        console.error('Error fetching specific users:', error);
        toast.error('Error fetching specific users');
      }
    };

    fetchSpecificUsers();
  }, []);

  return (
    <div className="container">
      <h2>Specific Users Based on Criteria</h2>
      {specificUsers.length > 0 ? (
        specificUsers.map(user => (
          <div key={user._id} className="user-card">
            <p>{user.fname} {user.lname}</p>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>No specific users found</p>
      )}
    </div>
  );
};

export default GetSpecificUsers;
