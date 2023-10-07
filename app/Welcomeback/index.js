import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import axios from 'axios';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';
import { Loginfunc } from '../Utils/Loginfunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import Ionicons from 'react-native-vector-icons/Ionicons';
import jwtDecode from 'jwt-decode';
import Fingerprint from '../Utils/Fingerprint';
import { ToastAndroid } from 'react-native';
import PrivateRoute from '../components/PrivateRoute';
import { router } from 'expo-router';


const index = () => {
  const routers = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingbar, Setloadingbar] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFingerprintSupported, setIsFingerprintSupported] = useState(false);
  const handleSignIn = async () => {
    Setloadingbar(true)
    if (!email || !password) {
      // Display an alert or error message for missing email or password

      Toast.show({
        

        type: 'error',
        text1: 'Please enter both email and password'
      });
      Setloadingbar(false)
      return; 
    }

    try {

      await Loginfunc(email, password);
      Setloadingbar(false)
    } catch (error) {
      Setloadingbar(false)
    }
  };

  const logout = async  () => {
    await AsyncStorage.removeItem('my-access-key');
    await AsyncStorage.removeItem('my-refresh-key');

    ToastAndroid.showWithGravity(
      'Please Login Again',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    router.replace('/Loginpage');
  }
  
  const handleButtonPress = async () => {
    const value =  await AsyncStorage.getItem('my-access-key');
    const decodedToken = jwtDecode(value);
    setEmail(decodedToken.username);
      };

        


      const PostData = async () => {
        const refreshtoken = await AsyncStorage.getItem('my-refresh-key');
        console.log(refreshtoken)
        try {
          const response = await axios.post('https://veebankbackend.vercel.app/token/refresh/',  {refresh: refreshtoken, });
      
          if (response.status === 200) {

            const { access, refresh } = response.data;
            console.log('Good: Good', response.data);
            // Update tokens in AsyncStorage
            await AsyncStorage.setItem('my-access-key', access);
            await AsyncStorage.setItem('my-refresh-key', refresh);
            ToastAndroid.showWithGravity(
              'User Login successful',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            Setloadingbar(false)
            router.replace('/Mydash');
          } else {
            console.log('Good: Good', response.data);
            const { access, refresh } = response.data;
            await AsyncStorage.setItem('my-access-key', access);
            await AsyncStorage.setItem('my-refresh-key', refresh);
            ToastAndroid.showWithGravity(
              'User Login successful',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            Setloadingbar(false)
            router.replace('/Mydash');
      
          }
        } catch (error) {
          if (error.response.data){
         
            ToastAndroid.showWithGravity(
              'Session Expired',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            Setloadingbar(false)
            logout()
          }
            
          else {
            Setloadingbar(false)
          ToastAndroid.showWithGravity(
            'An Error Occured Try Again Later',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          }
    
        }
      };

  useEffect(() => {
    // Simulate loading completion after a delay (e.g., 3000 milliseconds)
    const loadingTimeout = setTimeout(() => {
      handleButtonPress()


    }, 1);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  const Checktype = async () => {
    const hasSupport = await LocalAuthentication.hasHardwareAsync();
    setIsFingerprintSupported(hasSupport);
  };
  const checkFingerprint = async () => {
    Setloadingbar(true)
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with your fingerprint',
      });

      if (result.success) {
        setIsAuthenticated(true);
   
        console.log('Fingerprint authentication successful');

        PostData();
   
      } else {
        Setloadingbar(false)
        setIsAuthenticated(false);
        Toast.show({
        

          type: 'error',
          text1: 'Fingerprint authentication failed'
        });
      }
    } catch (error) {
      Setloadingbar(false)
      Toast.show({
        

        type: 'error',
        text1: 'Error authenticating with fingerprint'
      });
    }
  };

  const checktoken = async  () => {
   const ususerer =  await AsyncStorage.getItem('my-access-key');
    if (!ususerer) {
      router.replace('/Loginpage');
  
    }
  }

  useEffect(() => {
    checktoken(); // Trigger the fetchData function when the component mounts
  }, []);  

  return (
  
    <SafeAreaView style={{flex:1, backgroundColor: '#EFEFEF'}}>
        <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#EFEFEF'},
            headerShadowVisible: false,
            headerTitle: ''
        }} />

<View style= {styles.containercenter}>
<ImageBackground
        resizeMode="cover" 
         source={require('../../assets/jason.png')}
         style= {styles.bg}
         >
<View style={[styles.pad, styles.bgw]}>
 <View style={{justifyContent:'center', alignItems: 'center'}}>
<Image
        source={require('../../assets/logo21.png')}
        style={{  borderRadius: 20,
          width: 60, 
          height: 60,
          resizeMode: 'contain',}}
      />
      </View>
      <Text style={styles.title} onPress={Checktype}>Welcome Back {email}</Text>
      <Text style={styles.mediumtext}>Enter Your Password To Continue.</Text>
<View style={styles.myimput}>
<TextInput
        style={styles.inputhidden}
        placeholder="Username"
        onChangeText={(text) => setEmail(text)}
        value={email}
        editable={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry // Hide password
      />

</View>


<View style={styles.butonthree}>
    
    

    
    <View  style={{ flexDirection: 'row', width:'100%', alignItems: 'center', justifyContent: 'center', marginBottom: 7, gap: 5  }}>
      
    {loadingbar ?   
    
    <TouchableOpacity
        style={styles.buttonzz}
        onPress={() => {
    
      }}
      >



<ActivityIndicator size="small" color="#d7c49e"   />

      </TouchableOpacity> :
        
        <TouchableOpacity
        style={styles.buttonzz}
        onPress={() => {
          handleSignIn()
    
      }}
      >



        <Text style={styles.buttonText}>Sign In</Text>

      </TouchableOpacity>

      }

<TouchableOpacity
        style={styles.smallbutton}
        onPress={() => {
          checkFingerprint()
    
      }}
      >




      
            <Ionicons name='finger-print-outline' size={33}    style={styles.icn}/>
      


      </TouchableOpacity>

    </View>
  

      <Text style={styles.mediumtext}>Not {email} ? <Text onPress={logout} style={styles.link}>Login</Text> </Text>

    </View>

</View>





{/* <Button       title='Show toast' onPress={showToast}></Button> */}
</ImageBackground>
</View>


    </SafeAreaView>

  )
}

export default index