import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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


