import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { ToastAndroid } from 'react-native';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';
import { Loginfunc } from '../Utils/Loginfunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrivateRoute from '../components/PrivateRoute';
import { StateContext } from '../components/StateContext';
import axios from 'axios';



const index = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingbar, Setloadingbar] = useState(false)


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
      try {
        const response = await axios.post('https://veebankbackend.vercel.app/token/', {
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
          ToastAndroid.showWithGravity(
            'User Login successful',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );

          router.replace('/Mydash');
          // Display a success message using Toast
    
    
        } else {
          ToastAndroid.showWithGravity(
            'Login Failed',
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

      Setloadingbar(false)
    } catch (error) {
      console.log(error)
      Setloadingbar(false)
    }
  };




      

  return (

    <SafeAreaView style={{flex:1, backgroundColor: '#f9f9f9'}}>
        <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#f9f9f9'},
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
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.mediumtext}>Sign in to your account</Text>
<View style={styles.myimput}>
<TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
              autoCapitalize="none"
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry // Hide password
      />
</View>


<View style={styles.butonthree}>
    
    
    {loadingbar ?  
     <TouchableOpacity
        style={styles.button}
        onPress={() => {
        
    
      }}
      >



<ActivityIndicator size="small" color="#d7c49e"   />

      </TouchableOpacity> :
        
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignIn()
    
      }}
      >



        <Text style={styles.buttonText}>Sign In</Text>

      </TouchableOpacity>

      }
    

      <Text style={styles.mediumtext}>Dont Have An Account ? <Link href='Register' style={styles.link}>Register</Link> </Text>

    </View>
</View>





{/* <Button       title='Show toast' onPress={showToast}></Button> */}
</ImageBackground>
</View>


    </SafeAreaView>

  )
}

export default index