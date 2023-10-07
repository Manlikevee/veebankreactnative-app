import { View, Button,RefreshControl, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState , useContext} from 'react';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { useLocalSearchParams } from 'expo-router'
import { styles } from '../../styles/styles';
import Othercomponentlayout from '../components/Othercomponentlayout';
import {StateContext} from '../components/StateContext'
import Bill from '../components/Transfercomponents/Bill';
import AxiosGet from '../Utils/AxiosGet';

const Index = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const {mydata} = useContext(StateContext);
  const {fetchData} = useContext(StateContext);
  const [airtime, setAirtime] = useState([]);

  const fetchairtime = () => {
    AxiosGet('/airtime')
      .then((response) => {
        if (response) {
          setAirtime(response);
          console.log(response.data)
        } else {
          console.error('Error: Unexpected status code', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  
  useEffect(() => {
    fetchData(); // Trigger the fetchData function when the component mounts
    fetchairtime();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchairtime();
    fetchData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <Othercomponentlayout pagetitle={'Vee Bank Transfer'}>
          <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
 <View style={styles.bodycontainer}>
  <ImageBackground
          resizeMode="repeat" 
          source={require('../../assets/Union.png')}
  > 
<View>


<Bill airtime={airtime}/>

</View>
</ImageBackground>
 </View>

      </ScrollView>
    </Othercomponentlayout>
  )
}

export default Index