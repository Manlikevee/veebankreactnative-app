import { View, Button,RefreshControl, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState , useContext} from 'react';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';

import { styles } from '../../styles/styles';
import Othercomponentlayout from '../components/Othercomponentlayout';
import Internalbanktransfer from '../components/Transfercomponents/Internalbanktransfer';
import {StateContext} from '../components/StateContext'
const Veetransfer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [banks, setBanks] = useState([]);
  const [loadingBanks, setLoadingBanks] = useState(true);
  const {mydata} = useContext(StateContext);
  const {fetchData} = useContext(StateContext);
  
  const fetchBanks = async () => {
    setLoadingBanks(true)
    try {
      const response = await axios.get(
        'https://api.paystack.co/bank',
        {
          headers: {
            Authorization: `Bearer sk_test_c1f886a70706e4f3e7ae82860d178f6d48a4822c`,
          },
        }
      );
        
      const formattedBanks = response.data.data.map((bank) => ({
        value: bank.code,
        label: bank.name,
      }));

      setBanks(formattedBanks);
      setLoadingBanks(false);
    } catch (error) {
      
      console.error('Error fetching banks:', error);
     

    }
  };

  useEffect(() => {
    fetchData(); // Trigger the fetchData function when the component mounts
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchBanks()
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
<Internalbanktransfer banks={banks} setBanks={setBanks} loadingBanks={loadingBanks} setLoadingBanks={setLoadingBanks} fetchBanks={fetchBanks} mydata={mydata}  fetchData={fetchData}/>
</View>
</ImageBackground>
 </View>

      </ScrollView>
    </Othercomponentlayout>
  )
}

export default Veetransfer