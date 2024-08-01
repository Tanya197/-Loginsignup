// google-auth.js
import { google } from 'googleapis';

const clientId = GOOGLE_CLIENT_ID=868395211569-cj173bvnalunr2mlt9csvfij3dkgag7a.apps.googleusercontent.com;
const scopes = ['https://www.googleapis.com/auth/userinfo.email']; // use an array of scopes

if (!clientId) {
  throw new Error('GOOGLE_CLIENT_ID environment variable is not set');
}

const auth = new google.auth.GoogleAuth();
const client = auth.getClient();

client.setClientId(clientId);
client.setScopes(scopes);

export default client;