// Import React and necessary hooks from 'react' library
import React, { useState } from 'react';
// Import axios for making HTTP requests
import axios from 'axios';
// Import toast from 'react-hot-toast' for showing notifications
import { toast } from 'react-hot-toast';

// Define the CreateUser functional component
const CreateUser = () => {
  // Initialize formData state with default values for each field
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  // handleChange function to update formData state when input values change
  const handleChange = (e) => {
    // Update the corresponding field in formData based on the input's name attribute
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Send a POST request to create a new user with the data from formData
      const response = await axios.post('/api/create', formData);
      // Show a success toast notification if the request is successful
      toast.success('User created successfully!');
    } catch (error) {
      // Show an error toast notification if the request fails
      toast.error('Error creating user');
    }
  };

  return (
    // Render the form with input fields and a submit button
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
// formData is a state object that holds the values of the form inputs.
// It is initialized with empty strings for each field (fname, lname, email, password).
// const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     password: ''
//   });
  
