import { View, Text } from 'react-native'
import React, {  useContext, useState, useEffect } from 'react';
import { StateContext } from './StateContext';
import { Stack, useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PrivateRoute = () => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const getToken = async () => {
      try {
        // Retrieve the token from AsyncStorage
        const storedToken = await AsyncStorage.getItem('my-access-key');

        // Update the state with the token value
        setToken(storedToken);
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    getToken();
  }, []); // The empty dependency array ensures this effect runs once, like componentDidMount

  // Check if the token exists and redirect accordingly
  if (token) {
    router.push('Mydash');
  }

  return (
    <View>

    </View>
  )
}

export default PrivateRoute