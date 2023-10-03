import { View, Button, Text, TouchableOpacity, SafeAreaView,RefreshControl, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles, shadowStyles } from '../../styles/styles';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import Dashboardcard from '../components/Dashboardcard';
import Transfer from '../components/Transfer';
import Latesttransaction from '../components/Latesttransaction';
import Services from '../components/Services';
import Splashadvert from '../components/Splashadvert';
import Bottombar from '../components/Bottombar';
import Financeoptions from '../components/Financeoptions';

const index = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    const router = useRouter();
    const showToast = () => {
        Toast.show({
        

          type: 'success',
          text1: 'This is some something that has to do with a text area👋'
        });
      }


      

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f6f5fa'}}>
        <Stack.Screen
        options={{

            headerStyle:{backgroundColor: '#f6f5fa'},
            headerShadowVisible: false,
            headerTitle: '',
            headerLeft: () => (
                <ScreenHeaderBtn  dimension='60%' />
              ),
              headerRight: () => (
                <ScreenHeaderBtn  dimension='100%' />
              ),
        }} />

<ScrollView
    showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
<View style={styles.mydashboard}>

<View style={styles.dashboardhead}>
<Dashboardcard/>
</View>

<View style={styles.dashboardwhitehead}>
<Transfer/>
</View>

<View style={styles.dashboardwhitehead}>
<Latesttransaction/>
</View>
<View style={styles.dashboardwhitehead}>
<Services/>
</View>

<View style={styles.dashboardsplash}>
<Splashadvert/>
</View>

<View style={styles.dashboardwhitehead}>
<Financeoptions/>
</View>
        </View>
      </ScrollView>
<View style={styles.dashboardsplash}>
  <Bottombar/>
</View>


    </SafeAreaView>
  )
}

export default index