import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';
const index = () => {
 
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
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

<View style= {styles.containercenter}>
<ImageBackground
        resizeMode="cover" 
         source={require('../../assets/mm1.jpg')}
         style= {styles.bg}
         >

<View style={[styles.pad, styles.bgw]}>

      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.mediumtext}>Join Us for Exciting Opportunities</Text>
<View style={styles.myimput}>



      <TextInput
        style={styles.input}
        placeholder="First name"
        onChangeText={(text) => setFirstname(text)}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastname(text)}
        value={lastname}
      />
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
    
    
    
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button press here
        }}
      >



        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.mediumtext}>Already Have An Account ? <Link href='Loginpage' style={styles.link}>Login</Link> </Text>
    </View>
</View>





{/* <Button       title='Show toast' onPress={showToast}></Button> */}
</ImageBackground>
</View>


    </SafeAreaView>
  )
}

export default index