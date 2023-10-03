import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

const getUser = async () => {
  const refreshtoken = await AsyncStorage.getItem('my-refresh-key');
  const accesstoken = await AsyncStorage.getItem('my-access-key');
  return { accesstoken, refreshtoken };
};

const logout = async () => {
  const navigation = useNavigation();
  await AsyncStorage.removeItem('my-access-key');
  await AsyncStorage.removeItem('my-refresh-key');

  ToastAndroid.showWithGravity(
    'Session Expired',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
  );
  navigation.navigate('index');
};

const baseURL = 'https://veebankbackend.vercel.app';

const AxiosInstance = axios.create({
  baseURL: baseURL,
});

AxiosInstance.interceptors.request.use(async (req) => {
  const user = await getUser(); // Await for getUser() to get the user object

  if (user && user.accesstoken) {
    const decodedAccessToken = jwtDecode(user.accesstoken);
    const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${user.accesstoken}`;
    } else {
      let retryCount = 0;
      while (retryCount < 2) {
        try {
          const response = await axios.post(`${baseURL}/api/token/refresh/`, {
            refresh: user.refreshtoken,
          });

          const { access, refresh } = response.data;
          user.accesstoken = access;
          user.refreshtoken = refresh;
          await AsyncStorage.setItem('my-access-key', access); // Update access token in AsyncStorage
          await AsyncStorage.setItem('my-refresh-key', refresh); // Update refresh token in AsyncStorage
          req.headers.Authorization = `Bearer ${access}`;
          break;
        } catch (error) {
          console.error('Failed to refresh access token:', error);
          retryCount++;
          if (retryCount >= 2) {
            if (
              error.response &&
              error.response.data &&
              error.response.data.detail === 'Token is blacklisted'
            ) {
              // Token is blacklisted, log the user out
              logout();
            } else {
              throw error;
            }
          }
        }
      }
    }
  }

  return req;
});

export default AxiosInstance;
