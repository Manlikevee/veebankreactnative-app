import { View, Text , SafeAreaView, RefreshControl} from 'react-native'
import React, { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router'
import { styles } from '../../styles/styles';

const Othercomponentlayout = ({children, pagetitle}) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f9f9f9'}}>
        <Stack.Screen
        options={{
            headerShown: true,
            headerStyle:{backgroundColor: '#f9f9f9'},
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 16 },
            headerTitle: `${pagetitle}`
        }} />

{children}

        </SafeAreaView>
  )
}

export default Othercomponentlayout