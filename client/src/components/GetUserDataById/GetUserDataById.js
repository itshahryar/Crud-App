// UserDataById.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './GetUserDataById.css'; // Import the CSS file

const UserDataById = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getDataById/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Error fetching user data');
    }
  };

  const handleFetchUser = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="container">
      <h2>Fetch User Data by ID</h2>
      <form onSubmit={handleFetchUser}>
        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={handleInputChange}
        />
        <button type="submit">Fetch User</button>
      </form>
      {userData && (
        <div className="user-data">
          <p>User ID: {userData._id}</p>
          <p>Name: {userData.fname} {userData.lname}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDataById;
