import React from 'react';
import './Profile.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import  Profile1 from "./Images/Profile1.jpg"
const Profile = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-image">
          <img src={Profile1} style={{ width: '200px', height: '200px' }} alt="User" />
        </div>
        <div className="profile-info">
          <h2>First Name</h2>
          <h2>Last Name</h2>
          <p>Age: 25</p>
          <p>Gender: Male</p>
          <p>Email: example@example.com</p>
          <p>Phone: 1234567890</p>
          <button className="profile-button">Change Password</button>
          <button className="profile-button">Log Out</button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h2>Service History</h2>
          {/* Service history content */}
        </div>
        <div className="profile-section">
          <h2>Settings</h2>
          {/* Settings content */}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Profile;
