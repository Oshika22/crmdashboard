import React, { useState } from 'react';
import Login from '@react-login-page/page7';

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    try {
      // Your login logic here
      if (username === 'admin' && password === 'password') {
        alert('Login success!');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Login style={{ height: 690 }}>
      <form onSubmit={handleLogin}>
        <Login.Username index={1} />
        <Login.Password index={2} />
        {/* Add any other custom input */}
        <Login.Footer>
          Not a member? <a href="#">Sign up now</a>
        </Login.Footer>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>
    </Login>
  );
};

export default Demo;


// {
//   "username": "emilys",
//   "password": "emilyspass"
// }
