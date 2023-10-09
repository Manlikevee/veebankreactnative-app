import { View, Button, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';

import { styles } from '../../styles/styles';

const index = () => {
    const router = useRouter();

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#EFEFEF'}}>
        <Stack.Screen
        options={{
            headerShown: true,
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
        style={{  borderRadius: 20,
          width: '100%', 
          height: 260,
          resizeMode: 'contain',}}
      />
      </View>
</View>
<View style={styles.pad}>
<Text style={styles.veetitle}>   <Text style={styles.gold}>Coming Soon</Text> </Text>



</View>







</View>


    </SafeAreaView>
  )
}

export default index