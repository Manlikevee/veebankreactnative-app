import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, 
  ActivityIndicator, TouchableOpacity  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import { Link } from 'expo-router';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



const index = () => {
  
const [isloading, setisloading] = useState(true);

const route = useRouter();
// Transactionhistory  Welcomeback  Login
  const handleButtonPress = async () => {
const vee =  await AsyncStorage.getItem('my-access-key');
{vee ? router.push('Welcomeback') : router.push('Login') }
         setisloading(!isloading); 
  };
  
  useEffect(() => {
    // Simulate loading completion after a delay (e.g., 3000 milliseconds)
    const loadingTimeout = setTimeout(() => {
      handleButtonPress()

    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

    const router = useRouter();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
        <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#fff'},
            headerShadowVisible: false,
            headerTitle: ''
        }} />
        <View style= {styles.splashscreen}>
      <View
             style= {styles.myviewstwo}
      >
 
        <Image
        source={require('../assets/Group39812.png')}
        style={styles.image}
      />
      </View>
      
      <View style= {styles.flexcolumn} >
      <Image
        source={require('../assets/logo2.png')}
        style={styles.image}
      />
{isloading? (<ActivityIndicator size="large" color="#d7c49e"  style={styles.loader} />) : 
(
<TouchableOpacity onPress={handleButtonPress}       style={styles.splashbutton}  >
     <Text style={styles.splashbuttontext}>Proceed</Text>
</TouchableOpacity>
)}




        </View>

        <View
        style= {styles.myviews}
        >
           
        <Image
        source={require('../assets/Group39813.png')}
        style={styles.image}
      />
        </View>
        </View>

    </SafeAreaView>
  )
}

export default index