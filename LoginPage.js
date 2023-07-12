import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/login', { email, password });
      setMessage(response.data.message);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate('/'); // Redirect to home page after 3 seconds
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      setMessage("Invalid Email or Password");
    }
  };

  return (
    <>
      <body>
        <center>
          <h1>Allsmart Home Appliance Service Center</h1>
          <div className="login-container">
            <h2>Customer Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Login</button>
              <br />
            </form>

            <div className="login-links">
              <button onClick={() => navigate('/')}>Go to Home</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => navigate('/register')}>Go to Register</button>
            </div>
            <br />
          </div>
          {message && <p className="message" type="message">{message}</p>}
        </center>
      </body>
    </>
  );
};

export default LoginPage;
