import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';
import { Loginfunc } from '../Utils/Loginfunc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';





const index = () => {
  const router = useRouter();
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

      await Loginfunc(email, password);
      Setloadingbar(false)
    } catch (error) {
      Setloadingbar(false)
    }
  };


  const checktoken = async  () => {
    console.log('rannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
    const ususerer =  await AsyncStorage.getItem('my-access-key');
     if (ususerer) {

       router.push('Mydash')
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

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.mediumtext}>Sign in to your account</Text>
<View style={styles.myimput}>
<TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        
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
    
    
    {loadingbar ?   <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSignIn()
    
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