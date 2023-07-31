

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
      const response = await axios.post('http://localhost:8082/api/v1/auth/authenticate', {email, password });
      const token= response.data.token;
      localStorage.setItem("token",token);
      console.log(token);
      setMessage(response.data.message);
      setIsLoggedIn(true);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
<>
      <body>
        <center>
          <h1>Allsmart Home Appliance Service Center</h1>
          <div className="login-container">
            <h2>Customer Login & Admin</h2>
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
              <button onClick={() => navigate('/adminlogin')}>Go to Admin</button>
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



/*
// working
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
      setMessage("Login Successfully");
      localStorage.setItem('email', email); // Store the user's email in local storage
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
            <h2>Customer Login & Admin</h2>
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
              <button onClick={() => navigate('/adminlogin')}>Go to Admin</button>
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

*/



/*
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
      setMessage("Login Successfully");
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
            <h2>Customer Login & Admin</h2>
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
              <button onClick={() => navigate('/adminlogin')}>Go to Admin</button>
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
*/