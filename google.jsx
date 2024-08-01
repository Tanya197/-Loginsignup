import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = 868395211569-cj173bvnalunr2mlt9csvfij3dkgag7a.apps.googleusercontent.com; // replace with your client ID

function App() {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // handle login success
  };

  const handleGoogleLoginFailure = (error) => {
    console.log('Google login failed:', error);
    // handle login failure
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="google">
        <h2>Login with Google</h2>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;