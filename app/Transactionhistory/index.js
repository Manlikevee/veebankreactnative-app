import { View, Button,RefreshControl, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect,  useState } from 'react';
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';

import { styles } from '../../styles/styles';
import Othercomponentlayout from '../components/Othercomponentlayout';
import AxiosInstance from '../Utils/AxiosInstance';
import Mybalancecard from '../components/Mybalancecard';
import Transactiondatacard from '../components/Transactiondatacard';
const Transfer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState(null);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/transactions/');
      setInitialFetchCompleted(true)
      setResponseData(response.data?.transactiondata);
      console.log(response.data.transactiondata);
      setLoading(false);
      if (!initialFetchCompleted) {
        setInitialFetchCompleted(true);
      }
    } catch (error) {
      // Handle errors
      console.error('GET request error', error);
      if (error.response && error.response.data && error.response.data.error) {
        Toast.show({
      type: 'error',
          text1: `${error.response.data.error}`
        });

      } else {
        Toast.show({
         type: 'error',
          text1: 'An error occurred while Loading Your Data'
        });
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (initialFetchCompleted) {
        fetchData();
        console.log('Waitinggggggggggggggggggggggggggggggggggggggggggggggg');
      } else {
        console.log('Waiting');
      }
    }, 10000);
  
    // Fetch data initially
    fetchData();
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Othercomponentlayout pagetitle={'Transaction History'}>
        
        
        
        

    
 <View style={styles.bodycontainer}>

<View>
  <Mybalancecard/>
</View>



<ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.historycard}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

<View style={{justifyContent: 'center', alignItems:'center', padding: 20, gap: 12}}>

<Text style={{textAlign:'center', fontWeight:'bold', fontSize: 15, color:'#191F33'}}>All Transactions</Text>
</View>

{ loading ? (<ActivityIndicator size="large" color="#d7c49e"  style={styles.loader} />) :  (
  <>
  {responseData ? <Transactiondatacard data={responseData} /> : 
<View style={{justifyContent: 'center', alignItems:'center', padding: 20, gap: 12}}>
<Image
        source={require('../../assets/error.png')}
        style={styles.myimage}
      />
<Text style={styles.h2}>An Error Occured Pull down to refresh</Text>
</View>  }
  </>
)

}





</ScrollView>
 </View>

   

      
    </Othercomponentlayout>
  )
}

export default Transfer