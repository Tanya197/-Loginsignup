// src/App.js
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from './google.jsx'; 
import LoginSignup from './Components/LoginSignup/LoginSignup';
import './App.css';

const clientId = '868395211569-cj173bvnalunr2mlt9csvfij3dkgag7a.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <header className="App-header">
          <h1>LOGIN - SIGNUP App</h1>
        </header>
        <LoginSignup />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;



