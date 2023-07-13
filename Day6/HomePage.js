import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className='home'>
      <Navbar />
      <h1>Welcome to the Home Page</h1>
      <Footer />
    </div>
  );
};

export default HomePage;


