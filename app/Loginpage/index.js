import { View, Button, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';

const SlideTransition = ({ children }) => {
  const router = useRouter();
  const [slideAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (router.isTransitioning) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: false,
      }).start();
    } else {
      slideAnimation.setValue(0);
    }
  }, [router.isTransitioning]);

  const slideLeft = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // Adjust the distance you want to slide
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ translateX: slideLeft }],
      }}
    >
      {children}
    </Animated.View>
  );
};


const index = () => {
  const router = useRouter();
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
    <SlideTransition>
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

      <Text style={styles.title}>Welcome Back!</Text>
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
    
    
    
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push('Dashboard')
    
      }}
      >



        <Text style={styles.buttonText}>Sign In</Text>

      </TouchableOpacity>

      <Text style={styles.mediumtext}>Dont Have An Account ? <Link href='Register' style={styles.link}>Register</Link> </Text>

    </View>
</View>





{/* <Button       title='Show toast' onPress={showToast}></Button> */}
</ImageBackground>
</View>


    </SafeAreaView>
    </SlideTransition>
  )
}

export default index