import axios from 'axios';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router'
// Define a reusable Axios GET function with a Bearer token

const logout = async () => {
  const router = useRouter();
  await AsyncStorage.removeItem('my-access-key');
  await AsyncStorage.removeItem('my-refresh-key');

  ToastAndroid.showWithGravity(
    'Session Expired',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
  router.push('Login')
  // navigation.navigate('index');
};



const AxiosGet = async (urlPath) => {
  try {
    // Get the Bearer token from AsyncStorage
    const token = await AsyncStorage.getItem('my-access-key');

    if (!token) {
      // Handle the case where the token is missing (e.g., user not authenticated)
      ToastAndroid.showWithGravity(
        'Authentication token is missing',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      router.push('Login')
      throw new Error('Authentication token is missing');
    }

    // Construct the full URL by appending the URL path to your API base URL
    const apiUrl = 'https://veebankbackend.vercel.app' + urlPath;

    // Send a GET request with the Bearer token in the headers
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the Bearer token in the headers
      },
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    ToastAndroid.showWithGravity(
      'An Error Occurred',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    throw error;
  }
};

export default AxiosGet;
