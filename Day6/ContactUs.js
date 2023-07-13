import React from 'react';
import "./ContactUs.css";
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
    <Navbar></Navbar>
    
    <div className="container">
        <h1>Contact Us</h1>
      <form action="action_page.php">
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your First Name.." />

        <label >Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last Name.." />

        <label >Email Address</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address.." />

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
    <Footer></Footer>
    </>
  );
}

export default ContactUs;
