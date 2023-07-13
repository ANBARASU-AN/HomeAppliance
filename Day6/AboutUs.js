import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="about-section">
          <h1>About Us</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="/w3images/team1.jpg" alt="Jane" style={{ width: '100%' }} />
              <div className="container">
                <h2>Anbarasu AN</h2>
                <p className="title">Manager</p>
                <p>Manage the Allsmart Home Appliance service website</p>
                <p>Manage@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/w3images/team2.jpg" alt="Mike" style={{ width: '100%' }} />
              <div className="container">
                <h2>Anbarasu AN</h2>
                <p className="title">Admin</p>
                <p>Manage the Website , Technicians and Customer</p>
                <p>admin@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="/w3images/team3.jpg" alt="John" style={{ width: '100%' }} />
              <div className="container">
                <h2>Anbarasu AN</h2>
                <p className="title">Manager</p>
                <p>Manage the Allsmart Home Appliance service website</p>
                <p>Manager@gmail.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
