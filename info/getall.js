// Import necessary modules from 'react' and 'axios'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import toast from 'react-hot-toast' for showing notifications
import { toast } from 'react-hot-toast';

// Define the GetAllUsers functional component
const GetAllUsers = () => {
  // Initialize users state to hold the list of users
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch users when the component mounts
  useEffect(() => {
    // Define an async function to fetch users from the API
    const fetchUsers = async () => {
      try {
        // Send a GET request to the API endpoint to fetch all users
        const response = await axios.get('/api/getAll');
        // Update the users state with the fetched data
        setUsers(response.data);
      } catch (error) {
        // Show an error toast notification if the request fails
        toast.error('Error fetching users');
      }
    };

    // Call the fetchUsers function
    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <h2>All Users</h2>
      {/* Map over the users state to display each user's details */}
      {users.map(user => (
        <div key={user._id}>
          <p>{user.fname} {user.lname}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default GetAllUsers;

// The useState hook is used to manage state in a functional component.
// Here, useState is used to store and manage the list of users fetched from the API.

// useEffect is used to perform side effects in functional components.
// It takes a function and a dependency array as arguments.
// The function inside useEffect is executed after the initial render.
// fetchUsers is an asynchronous function that fetches users from the API using axios.get.
// setUsers(response.data) updates the users state with the fetched data.
// The empty dependency array [] ensures that this effect runs only once, after the initial render.