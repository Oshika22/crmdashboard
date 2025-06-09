// // src/pages/LoginPage.jsx
// import React from 'react';
// import Demo from '../components/LoginComp';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { error, loading } = useSelector((state) => state.auth);

//   const handleLogin = async ({ username, password }) => {
//     const result = await dispatch(loginUser({ username, password }));
//     if (loginUser.fulfilled.match(result)) {
//       navigate('/dashboard');
//     }
//   };

//   return (
//     <div>
//       <Demo onLogin={handleLogin} errorMessage={error} loading={loading} />
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import FallingSquares from '../components/fallingSquares';
const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="relative bg-blue-600 bg-opacity-60 h-screen flex items-center justify-center overflow-hidden">
      <FallingSquares />
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }} className='flex flex-col gap-4 p-6  h-[400px] w-[300px] rounded shadow-lg border border-gray-300 bg-white bg-opacity-20'>
        <h2 className='text-3xl font-bold text-center mb-4 text-white'>Login</h2>
        <input
          type="text"
          placeholder="Username"
          className='p-2 border text-center text-blue-600 border-gray-300 bg-white bg-opacity-20 rounded hover:bg-opacity-25 focus:outline-none focus:bg-indigo-50  placeholder-white'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className='p-2 border text-center text-blue-600 border-gray-300 bg-white bg-opacity-20 rounded hover:bg-opacity-25 focus:outline-none focus:bg-indigo-50  placeholder-white'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200'>
          {loading ? 'Logging in...' : 'submit'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
