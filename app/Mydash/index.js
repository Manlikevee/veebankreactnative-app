import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router'
import Dashboardhome from '../components/Dashboardpages/Dashboardhome';
import PaymentScreen from '../components/Dashboardpages/PaymentScreen';
import ProfileScreen from '../components/Dashboardpages/ProfileScreen';
import Servicespage from '../components/Dashboardpages/Servicespage'
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { ToastAndroid } from 'react-native';
import Logout from '../components/Logout';
import PrivateRoute from '../components/PrivateRoute';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';





   
const DashboardTabs = () => {
  const Tab = createBottomTabNavigator();
const Stacks = createStackNavigator();
const navigation = useNavigation();
const router = useRouter();


  const [token, setToken] = useState('');
  const [Username, setUsername] = useState();
  useEffect(() => {
    // Function to retrieve the token from AsyncStorage
    const retrieveToken = async () => {
      try {
        const value = await AsyncStorage.getItem('my-access-key');
        if (value !== null) {
          const decodedToken = jwtDecode(value);
          setUsername(decodedToken.username);
          // The value exists in AsyncStorage, set it to the 'token' state variable
          setToken(value);
        } else {
          // The value doesn't exist in AsyncStorage
          console.log('Value not found in AsyncStorage');
        }
      } catch (error) {
        // Handle AsyncStorage errors
        console.error('AsyncStorage error:', error);
      }
    };

    // Call the retrieveToken function when the component mounts
    retrieveToken();
  }, []); // 


  const logout = async  () => {
    await AsyncStorage.removeItem('my-access-key');
    await AsyncStorage.removeItem('my-refresh-key');

    ToastAndroid.showWithGravity(
      'User Logged Out successful',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    navigation.navigate('index');

  }

  return (
    <>
    <Stack.Screen
    options={{
        headerStyle:{backgroundColor: '#f6f5fa'},
        headerShadowVisible: false,
        headerTitle: '',
        headerLeft: () => (
            <ScreenHeaderBtn text={token} Username={Username}  dimension='60%' />
          ),
          headerRight: () => (
            <Logout logoutfunc={logout} dimension='100%' />
          ),
    }} />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#6a9ff7',
        tabBarInactiveTintColor: '#868287',
        tabBarStyle: { display: 'flex' },
        tabBarLabelStyle: { fontSize: 13 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'DashboardHome') {
            iconName = 'home-outline';
          } else if (route.name === 'Payment') {
            iconName = 'wallet';
          } else if (route.name === 'Profile') {
            iconName = 'person-circle-outline';
          }
          else if (route.name === 'Services') {
            iconName = 'apps-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="DashboardHome"
        component={Dashboardhome}
        options={{ tabBarLabel: 'Dashboard', headerShown: false }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ tabBarLabel: 'Payment', headerShown: false }}
      />
            <Tab.Screen
      name='Services'
      component={Servicespage}
      options={{ tabBarLabel: 'Services', headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile', headerShown: false }}
      />

    </Tab.Navigator>
    </>
  );
};



export default DashboardTabs;
