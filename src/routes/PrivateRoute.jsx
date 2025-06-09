// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = useSelector((state) => state.auth.token);
//   return token ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;


// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
