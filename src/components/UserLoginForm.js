import React, { useState } from 'react';
import axios from 'axios';

function UserLoginForm({ handleCreateUser }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      if (response.data.username) {
        // Login successful, perform necessary actions (e.g., redirect)
        console.log('Login successful');
      } else {
        // Handle login failure (invalid credentials)
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle any other errors (e.g., network issues)
      setError('An error occurred during login');
      console.error(error);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      if (response.data.username) {
        // Account creation successful
        console.log('Account created successfully');
        // Call the provided function to handle user creation
        handleCreateUser(formData); // Pass user data to the handleCreateUser function
      } else {
        // Handle account creation failure (e.g., username already exists)
        setError('Account creation failed');
      }
    } catch (error) {
      // Handle any other errors (e.g., network issues)
      setError('An error occurred during account creation');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h2>Login or Create an Account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Your login form fields */}
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleCreateAccount}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default UserLoginForm;
