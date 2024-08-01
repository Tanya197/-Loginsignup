import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './Components/LoginSignup/LoginSignup.css'; // Assuming you have a CSS file for styles

const clientId = '868395211569-cj173bvnalunr2mlt9csvfij3dkgag7a.apps.googleusercontent.com';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLogin = (response) => {
    if (response.error) {
      console.error(response.error);
      return;
    }
    setIsLoggedIn(true);
    setUserData(response.profileObj);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({});
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {userData.name}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Lost Password? Click Here!</a>
          <button className="signup">Sign-Up</button>
          <button className="login">Login</button>
          <div className="google-signin">
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
