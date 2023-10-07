import { View, Text } from 'react-native'
import React, {  useContext, useState, useEffect } from 'react';
import { StateContext } from './StateContext';
import { Stack, useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Nonprivateroute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(StateContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('Loginpage');
    return null; // or <Redirect to="/login" /> if using React Router
  }

  return <Component {...rest} />;
};

export default Nonprivateroute;
