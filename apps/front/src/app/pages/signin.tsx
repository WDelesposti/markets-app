import React, { useState } from 'react';
import Home from './home';
import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000';

const AuthScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      const apiUrl = `${API_URL}/login`;
      const postData = {
        email: username,
        password: password,
      };
      axios
        .post(apiUrl, postData)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <Home navigation={navigation} />
      ) : (
        <div>
          <h2>Login</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthScreen;
