import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import { ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';
import { router } from 'expo-router';
import { BackHandler } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const index = () => {
  const [username, setusername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingbar, Setloadingbar] = useState(false)

  const handleRegistration2 = async () => {
    Setloadingbar(true);
  
    try {
      // Check if any field is empty
      if (!username || !firstname || !lastname || !email || !password) {
        throw new Error('Please fill in all fields.');
      }
  
      const response = await axios.post('https://veebankbackend.vercel.app/registration/', {
        'username': `${username}`,
        'password':  `${password}` ,
        'first_name': `${firstname}`  ,
        'last_name': `${lastname}` ,
        'email': `${email}` ,
      });
      console.log('Registration successful');
      console.log('Registration response:', response.status, response.data);

      if (response.status === 201) {
        // Registration successful
        console.log('Registration successful');
        ToastAndroid.showWithGravity(
          'User Registered successfully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
  
        // Save access and refresh tokens to AsyncStorage or another storage mechanism
        // Assuming response.data.access and response.data.refresh exist
  
        Setloadingbar(false);
        router.replace('/Registrationstageone');
  
        // Handle navigation or any other actions for successful registration
      } else if (response.status === 400) {
        // Registration failed due to validation errors (username or email exists)
        if (response.data && response.data.error) {
          // Display the server-provided error message
          ToastAndroid.showWithGravity(
            'Registration failed due to validation errors.',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        } else {
          // Default error message if the server response doesn't provide one
          ToastAndroid.showWithGravity(
            'Registration failed due to validation errors.',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      } else {
        // Handle other error cases
        ToastAndroid.showWithGravity(
          'An error occurred',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    } catch (error) {
      Setloadingbar(false);
      console.error('Error:', error.message);
      ToastAndroid.showWithGravity(
        error.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };
  
  const handleRegistration = async () => {



    Setloadingbar(true);
    axios.post('https://veebankbackend.vercel.app/registration/', {
      'username': `${username}`,
      'password':  `${password}` ,
      'first_name': `${firstname}`  ,
      'last_name': `${lastname}` ,
      'email': `${email}` ,
      } 
      
      )
      .then(response => {
        // Handle the response as needed
        const responseData = response.data;
        // Display success toast
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Transaction completed successfully',
        });
        // You can now use responseData to access the data from the response
        console.log('Transaction Data:', responseData);
        Setloadingbar(false);
        router.replace('/Registrationstageone');
      })
      .catch(error => {
        // Handle errors
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response?.data?.error || 'An error occurred',
        });
      });
      Setloadingbar(false);
  };

  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
    const showToast = () => {
        Toast.show({
        

          type: 'success',
          text1: 'This is some something that has to do with a text area👋'
        });
      }

      

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#EFEFEF'}}>
        <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#EFEFEF'},
            headerShadowVisible: false,
            headerTitle: ''
        }} />

<ScrollView style= {styles.containercenter2}>


<View style={[styles.pad, styles.bgw, styles.mt2]}>

      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.mediumtext}>Join Us for Exciting Opportunities</Text>


<View style={styles.myimput}>

<TextInput
                autoCapitalize="none"
                autoCorrect={false}
        style={styles.input}
        placeholder="Username name"
        onChangeText={(text) => setusername(text)}
        value={username}
      />

      <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
        style={styles.input}
        placeholder="First name"
        onChangeText={(text) => setFirstname(text)}
        value={firstname}
      />
      <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastname(text)}
        value={lastname}
      />
      <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
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
          handleRegistration()
    
      }}
      >



        <Text style={styles.buttonText}>Sign In</Text>

      </TouchableOpacity>

      }
    

    <Text style={styles.mediumtext}>Already Have An Account ? <Link href='Loginpage' style={styles.link}>Login</Link> </Text>

    </View>


<View style={styles.butonthree}>
    
    
    


   
    </View>
</View>





{/* <Button       title='Show toast' onPress={showToast}></Button> */}

</ScrollView>


    </SafeAreaView>
  )
}

export default index