import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './CreateUser.css';

const CreateUser = () => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log the form data before sending the request
      console.log('Submitting form data:', formData);
      
      // Send POST request to create a new user
      const response = await axios.post('http://localhost:8000/api/create', formData);
      
      // Log the response from the server
      console.log('Response from server:', response);
      
      // Show success toast notification
      toast.success('User created successfully!');
    } catch (error) {
      // Log the error if the request fails
      console.error('Error creating user:', error);
      
      // Show error toast notification
      toast.error('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fname" placeholder="First Name" onChange={handleChange} />
      <input name="lname" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} type="password" />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;