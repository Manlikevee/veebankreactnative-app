// PrivateRoute.js
import React from 'react';
import { useAuth } from './StateContext';
import { useNavigation } from '@react-navigation/native';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigation.navigate('Login'); 
    return null; // or <Redirect to="/login" /> if using React Router
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
