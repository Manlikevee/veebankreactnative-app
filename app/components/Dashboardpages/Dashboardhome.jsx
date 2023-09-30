import { View,BackHandler, Button, Text, TouchableOpacity, SafeAreaView,RefreshControl, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles, shadowStyles } from '../../../styles/styles';
import ScreenHeaderBtn from '../ScreenHeaderBtn';
import Dashboardcard from '../Dashboardcard';
import Transfer from '../Transfer';
import Latesttransaction from '../Latesttransaction';
import Services from '../Services';
import Splashadvert from '../Splashadvert';
import Bottombar from '../Bottombar';
import Financeoptions from '../Financeoptions';
import AxiosGet from '../../Utils/AxiosGet';
import { useIsFocused } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';


const Dashboardhome = () => {
  const isFocused = useIsFocused();

    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState([]);
  
  
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        // Check if the screen is focused before showing the exit confirmation
        if (isFocused) {
          showExitConfirmation();
          return true; // Prevent default back button behavior
        }
        return false; // Let other screens handle the back button
      });
  
      return () => {
        backHandler.remove();
      };
    }, [isFocused]); // Add isFocused to the dependency array
  
  
  
    const showExitConfirmation = () => {
      Alert.alert(
        'Exit Confirmation',
        'Do you want to exit the app?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => handleExitConfirm(),
          },
        ],
        { cancelable: false }
      );
    };
  
    const handleExitConfirm = () => {
      // Perform any necessary cleanup or actions before exiting the app
      // Then exit the app
      BackHandler.exitApp();
    };
  
  
  
    const showToast = () => {

      ToastAndroid.showWithGravity(
        'Loading.. 👋',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );

    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        showToast();
        fetchData();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);



    const router = useRouter();

    useEffect(() => {
      fetchData(); // Trigger the fetchData function when the component mounts
    }, []);


    const fetchData = () => {
      AxiosGet('/userprofile/')
        .then((response) => {
          if (response.userprofile) {
            setData(response.userprofile);
            console.log( response.userprofile);
          } else {
            console.error('Error: Unexpected status code', response);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
      

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#f6f5fa'}}>
    

<ScrollView
    showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
<View style={styles.mydashboard}>

<View style={styles.dashboardhead}>
<Dashboardcard data={data}/>
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



    </SafeAreaView>
  )
}

export default Dashboardhome