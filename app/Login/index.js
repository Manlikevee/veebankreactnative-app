import { View, Button, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';

const index = () => {
    const router = useRouter();
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
<View style= {styles.centercontainer}>
<View style={styles.splashimage}>
    
<View
             style= {styles.myloginimg}
      >
 
        <Image
        source={require('../../assets/loginsplash.png')}
        
      />
      </View>
</View>
<View style={styles.pad}>
<Text style={styles.veetitle}>  Bank on-the-go with <Text style={styles.gold}>Vee App</Text> </Text>

<Text style={styles.mediumtext}>Manage your finances anytime, anywhere with our online banking app.</Text>

</View>


<View style={styles.butons}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            router.push('Register')
        }}
      >
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
            router.push('Loginpage')
      
        }}
      >
        <Text style={styles.buttonTexts}>Sign In</Text>
      </TouchableOpacity>
    </View>


{/* <Button       title='Show toast' onPress={showToast}></Button> */}

</View>


    </SafeAreaView>
  )
}

export default index