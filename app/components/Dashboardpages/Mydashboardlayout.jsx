import { View, Button, Text, TouchableOpacity, SafeAreaView,RefreshControl, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import ScreenHeaderBtn from '../ScreenHeaderBtn';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles, shadowStyles } from '../../../styles/styles';


const Mydashboardlayout = ({children}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f6f5fa'}}>


{children}

        </SafeAreaView>
  )
}

export default Mydashboardlayout