/*

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import store from './Pages/redux/store';
import LoginPage from './LoginPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Profile from './Pages/Profile';
import AdminLogin from "./Pages/AdminLogin.js";
import AdminHome from "./Pages/AdminHome.js";
import AdminContactUs from "./Pages/AdminContactUs.js";
import Warranty from './Pages/services/Warranty';
import Updates from './Pages/Updates';
import Review from './Pages/Review';
import CustomerReviews from './Pages/CustomerReviews';
import RegisterPage from './RegisterPage';

const App = () => {
  return (
    <>
    <body>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/admincontactus" element={<AdminContactUs />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/review" element={<Review />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/customerreviews" element={<CustomerReviews />} />
        </Routes>
      </Router>
    </Provider>
    </body>
    </>
  );
};

export default App;
*/


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css";
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Profile from './Pages/Profile';
import AdminLogin from "./Pages/AdminLogin.js"; // Assuming the correct file path for AdminLogin.js
import AdminHome from "./Pages/AdminHome.js";
import AdminContactUs from "./Pages/AdminContactUs.js";
import Warranty from './Pages/services/Warranty';
import Updates from './Pages/Updates';
import Review from './Pages/Review';
import CustomerReviews from './Pages/CustomerReviews';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <body>
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/adminlogin"
          element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={<Profile setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/admincontactus" element={<AdminContactUs />} />
        <Route path="/warranty" element={<Warranty/>}/>
        <Route path="/updates" element={<Updates/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/customerreviews" element={<CustomerReviews/>}/>
      </Routes>
    </Router>
    </body>
    </>
  );
};

export default App;

