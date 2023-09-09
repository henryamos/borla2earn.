/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


// eslint-disable-next-line react/prop-types
const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the formData to your backend API for authentication
      const response = await axios.post('/api/signin', formData);

      // Assuming the backend responds with a success status and user data
      // Redirect to the dashboard after successful sign-in
      if (response.status === 200) {
        // eslint-disable-next-line react/prop-types
        history.push('/dashboard');
      } else {
        // Handle authentication errors (e.g., invalid credentials)
        console.error('Authentication failed.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  
  );
};

export default Login;
