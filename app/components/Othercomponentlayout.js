import { View, Text , SafeAreaView, RefreshControl} from 'react-native'
import React, { useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router'
import { styles } from '../../styles/styles';

const Othercomponentlayout = ({children, pagetitle}) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#FAFAFA'}}>
        <Stack.Screen
        options={{
            headerShown: true,
            headerStyle:{backgroundColor: '#FAFAFA'},
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 16 },
            headerTitle: `${pagetitle}`
        }} />

{children}

        </SafeAreaView>
  )
}

export default Othercomponentlayout