import React, { useState } from 'react';
import user_icon from '../Assets/users.png'; // Adjust the import path as needed
import email_icon from '../Assets/email.png'; // Adjust the import path as needed
import password_icon from '../Assets/password.png'; // Adjust the import path as needed
import google_icon from '../Assets/google.png'; // Adjust the import path as needed


const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  const handleGoogleAuth = () => {
    // Implement Google authentication logic here
    console.log('Google auth button clicked!');
  };

 
  return (
    <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Name" />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email-id" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className="forgot-password">
                    Lost Password? <span>Click Here</span>
                </div>
            )}
            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => { setAction("Sign Up") }}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => { setAction("Login") }}
                >
                    Login
               </div>
        <div className="google-auth" onClick={handleGoogleAuth}>
          <img src={google_icon} alt="google icon" />
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
