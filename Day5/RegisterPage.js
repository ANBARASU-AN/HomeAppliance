import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        firstName,
        lastName,
        gender,
        age,
        email,
        password,
        phone,
        state,
      });
      setMessage(response.data);
      setShowAlert(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <>
      <center>
        <h1>Allsmart Home Appliance Service Center</h1>
        <div className="register-container">
          <h2>Customer Register</h2>
          <form onSubmit={handleRegister}>
          <label>
          First Name:&nbsp;&nbsp;
          <input
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
     
        <label>
          Last Name:&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      
        <label>
          Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            value={gender}
            required
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
       
        <label>
          Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
       
        <label>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
       
        <label>
          Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
       
        <label>
          Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="tel"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
       
        <label>
          State:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          />
        </label>

        <div className="login-links">
        <button type="submit">Register</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
          </form>
        </div>
        {message && <p class="message" type="message" >{message}</p>}
          
      </center>
    </>
  );
};

export default RegisterPage;
