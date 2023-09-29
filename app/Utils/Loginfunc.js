import axios from 'axios';
import { Stack, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

// Replace with your authentication API endpoint
const API_URL = 'https://veebankbackend.vercel.app/token/';
const router = useRouter();

export const Loginfunc = async (email, password) => {
  try {
    const response = await axios.post(API_URL, {
      username: email,
      password: password,
    }, {
      timeout: 30000, // Set a timeout of 30 seconds (30,000 milliseconds)
    });

    if (response.status === 200) {
      // Handle successful login here, e.g., store user data in state or AsyncStorage
      console.log('Login successful', response.data);

      // Store tokens in AsyncStorage
      await AsyncStorage.setItem('my-access-key', response.data.access);
      await AsyncStorage.setItem('my-refresh-key', response.data.refresh);
          router.push('Mydash');
      // Display a success message using Toast
      ToastAndroid.showWithGravity(
        'User Login successful',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );

      router.push('Mydash');
    } else {
      ToastAndroid.showWithGravity(
        'Check Your Login Details',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  } catch (error) {
    // Handle login error here, including timeout error
    if (axios.isCancel(error)) {
      ToastAndroid.showWithGravity(
        'User Login Failed',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      ToastAndroid.showWithGravity(
        'User Login Failed',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }
};
