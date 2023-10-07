import { View, Button, Text, TouchableOpacity, SafeAreaView,RefreshControl, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator, Pressable  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import ScreenHeaderBtn from '../ScreenHeaderBtn';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../../styles/styles';
import Mydashboardlayout from './Mydashboardlayout'
const ProfileScreen = () => {
  return (

            <Mydashboardlayout>
              <ScrollView>
      <SafeAreaView style={{padding: 16, gap:20}}>
      <View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebg}>

        </View>
        <View style={{
padding: 10,
borderRadius: 5,
alignItems:'center',
justifyContent:'center',
width:'100%',
marginTop: -70
}}>
 
  <View style={{backgroundColor:'#E6F0FD',  borderRadius: 90, width:120, height: 120, alignItems:'center', justifyContent:'center'}}>
<Image 
source={require('../../../assets/user.png')}
        style={{ 
       
          width:100, height: 100,
          padding:5,
          resizeMode: 'contain',}} ></Image>
  </View>
</View>
<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Account Name</Text>
<Text style={styles.mywordings}>Odah Victor Ebube</Text>
</View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Account Number</Text>
<Text style={styles.mywordings}>0774369899</Text>
</View>


      </View>

      <View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebgsmall}>
<Text style={{color:'white'}}>Account Information Information</Text>
        </View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Account Name</Text>
<Text style={styles.mywordings}>Odah Victor Ebube</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Account Number</Text>
<Text style={styles.mywordings}>0774369899</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Bank</Text>
<Text style={styles.mywordings}>Vee Bank</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Bank Code</Text>
<Text style={styles.mywordings}>003992</Text>
</View>

      </View>

      <View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebgsmall}>
<Text style={{color:'white'}}>Personal Information</Text>
        </View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Full Name</Text>
<Text style={styles.mywordings}>Odah Victor Ebube</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Email</Text>
<Text style={styles.mywordings}>Odahviktor@gmail.com</Text>
</View>


      </View>

      <View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebgsmall}>
<Text style={{color:'white'}}>Developer Information</Text>
        </View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Account Name</Text>
<Text style={styles.mywordings}>Odah Victor Ebube</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Phone Number</Text>
<Text style={styles.mywordings}>07013753576</Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Email</Text>
<Text style={styles.mywordings}>OdahViktor@gmail.com</Text>
</View>


      </View>
      <TouchableOpacity style={{width:'100%', padding:20, borderRadius:5, backgroundColor:'#FF4F4F'}}>
 <Text style={{color:'#FFE5E5', textAlign:'center'}}>Deactivate Account</Text> 
</TouchableOpacity>
      </SafeAreaView>
      </ScrollView>
              </Mydashboardlayout>


  )
}

export default ProfileScreen

