import axios from 'axios';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a reusable Axios GET function with a Bearer token
const Fingerprint = async (urlPath) => {
  try {
    // Get the Bearer token from AsyncStorage
    const refreshtoken = await AsyncStorage.getItem('my-refresh-key');

    if (!refreshtoken) {
      // Handle the case where the token is missing (e.g., user not authenticated)
      ToastAndroid.showWithGravity(
        'Authentication token is missing',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      throw new Error('Authentication token is missing');
    }

    // Construct the full URL by appending the URL path to your API base URL
    const apiUrl = 'https://veebankbackend.vercel.app' + urlPath;

    // Send a GET request with the Bearer token in the headers
    const response = await axios.post(apiUrl, {
        refresh: refreshtoken, // Include the token as a parameter
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

export default Fingerprint;
