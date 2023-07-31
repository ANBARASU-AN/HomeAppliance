
// working
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        navigate('/login');
        return;
      }

      const token= localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8082/profile/get"
      ,
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const userId = user ? user.uid : null;
      if (!userId) {
        alert('User ID not found. Please try again later.');
        return;
      }

      await axios.post(`http://127.0.0.1:8080/api/${userId}/uploadImage`, formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedUser = { ...user, profileImagePath: selectedFile.name };
      setUser(updatedUser);

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to upload image. Please try again later.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email');
    navigate('/login');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
            {user.profileImagePath ? (
              <img
                src={`http://localhost:8080/UserImage/${user.profileImagePath}`}
                style={{ width: '200px', height: '200px' }}
                alt="User"
              />
            ) : (
              <p>No profile image available</p>
            )}
            <input type="file" onChange={handleFileChange} />
            <button className="profile-button" id="profile-button" onClick={handleUpload}>Upload Photo</button>
          </div>
          <div className="profile-info">
            <h4>Full Name: {user ? user.firstName : ''}&nbsp;{user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button" id="profile-button">Change Password</button>
            <button className="profile-button" id="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
        <div className="profile-section">
        
        <h2>Settings</h2>
         
          </div>
          <div className="profile-section">
          <h2>
            <Link to="/review">Give Your Review</Link>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

/*
// working
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
        params: { email },
      });
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const userId = user ? user.uid : null;
      if (!userId) {
        alert('User ID not found. Please try again later.');
        return;
      }

      await axios.post(`http://127.0.0.1:8080/api/${userId}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedUser = { ...user, profileImagePath: selectedFile.name };
      setUser(updatedUser);

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to upload image. Please try again later.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email');
    navigate('/login');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
            {user.profileImagePath ? (
              <img
                src={`http://localhost:8080/UserImage/${user.profileImagePath}`}
                style={{ width: '200px', height: '200px' }}
                alt="User"
              />
            ) : (
              <p>No profile image available</p>
            )}
            <input type="file" onChange={handleFileChange} />
            <button className="profile-button" id="profile-button" onClick={handleUpload}>Upload Photo</button>
          </div>
          <div className="profile-info">
            <h4>Full Name: {user ? user.firstName : ''}&nbsp;{user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button" id="profile-button">Change Password</button>
            <button className="profile-button" id="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
        <div className="profile-section">
        
        <h2>Settings</h2>
         
          </div>
          <div className="profile-section">
          <h2>
            <Link to="/review">Give Your Review</Link>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;


*/



/*
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
        params: { email },
      });
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const userId = user ? user.uid : null;
      if (!userId) {
        alert('User ID not found. Please try again later.');
        return;
      }

      await axios.post(`http://127.0.0.1:8080/api/${userId}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedUser = { ...user, profileImagePath: selectedFile.name };
      setUser(updatedUser);

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to upload image. Please try again later.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email');
    navigate('/login');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
            {user.profileImagePath ? (
              <img
                src={`http://localhost:8080/UserImage/${user.profileImagePath}`}
                style={{ width: '200px', height: '200px' }}
                alt="User"
              />
            ) : (
              <p>No profile image available</p>
            )}
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Photo</button>
          </div>
          <div className="profile-info">
            <h4>First Name: {user ? user.firstName : ''}</h4>
            <h4>Last Name: {user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button">Change Password</button>
            <button className="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
        <div className="profile-section">
            <h2>Service History</h2>
          </div>
          <div className="profile-section">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      <Link to="/review">Review</Link>
      <Footer />
    </>
  );
};

export default Profile;

*/



/*


import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null); // For new profile photo
  const navigate = useNavigate();

  // Memoized fetchProfile function using useCallback
  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        // Redirect to login if email is not in local storage
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
        params: { email }, // Send the email as a query parameter
      });
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      // Handle error if necessary
      // Redirect to login if there's an error or unauthorized access
      navigate('/login');
    }
  }, [navigate]);

  // Fetch user details on component mount
  useEffect(() => {
    fetchProfile(); // Call fetchProfile function on mount
  }, [fetchProfile]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const userId = user ? user.uid : null; // Replace 'null' with the actual numeric user ID if available
      if (!userId) {
        alert('User ID not found. Please try again later.');
        return;
      }

      await axios.post(`http://127.0.0.1:8080/api/${userId}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Image uploaded successfully!');
      // Optionally, you can refresh the user's data here after the upload is complete
      fetchProfile(); // Call fetchProfile to refresh the user data
    } catch (error) {
      alert('Failed to upload image.');
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Perform any logout-related tasks here (e.g., clearing session, state, etc.)
    setIsLoggedIn(false); // Update the login status to false
    localStorage.removeItem('email'); // Clear the email from local storage
    navigate('/login'); // Redirect to the login page
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
          <img
              src={
                user && user.profileImagePath
                  ? `http://127.0.0.1:8080/uploads/${user.profileImagePath}`
                  : 'default-profile.png'
              }
              style={{ width: '200px', height: '200px' }}
              alt="User"
            />
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Photo</button>
          </div>
          <div className="profile-info">
            <h4>First Name: {user ? user.firstName : ''}</h4>
            <h4>Last Name: {user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button">Change Password</button>
            <button className="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-section">
            <h2>Service History</h2>
          </div>
          <div className="profile-section">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profile;



*/




/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user details on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const email = localStorage.getItem('email');
        if (!email) {
          // Redirect to login if email is not in local storage
          navigate('/login');
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
          params: { email }, // Send the email as a query parameter
        });
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        // Handle error if necessary
        // Redirect to login if there's an error or unauthorized access
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    // Perform any logout-related tasks here (e.g., clearing session, state, etc.)
    setIsLoggedIn(false); // Update the login status to false
    localStorage.removeItem('email'); // Clear the email from local storage
    navigate('/login'); // Redirect to the login page
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Navbar></Navbar>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
            <img
              src={user ? user.profileImage : ''}
              style={{ width: '200px', height: '200px' }}
              alt="User"
            />
          </div>
          <div className="profile-info">
            <h4>First Name: {user ? user.firstName : ''}</h4>
            <h4>Last Name: {user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button">Change Password</button>
            <button className="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-section">
            <h2>Service History</h2>
          </div>
          <div className="profile-section">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profile;

*/