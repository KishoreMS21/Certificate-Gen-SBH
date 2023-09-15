import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import Certificate from '../Certificate/Certificate';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login or sign-up logic here (e.g., API requests, validation)
    if (isLogin) {
      console.log("Clicked")
      return (
            <Certificate />
      );
    } else {
      // Open the default email client with a new email to your address
      window.location.href = 'mailto:kishorebobby7914@gmail.com?subject=Sign%20Up%20Request&body=Please%20attach%20the%20necessary%20documents%20here.';
    }
  };

  const toggleForm = () => {
    // Toggle between login and sign-up forms
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="form-input"
          />
        </div>
        <Link to="/certificates">
  <button type="submit" className="login-button">
    {isLogin ? 'Login' : 'Sign Up'}
  </button>
</Link>

      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default Login;
