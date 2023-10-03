import { View, Button,RefreshControl, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../styles/styles';
import { BackHandler } from 'react-native';
import Othercomponentlayout from '../components/Othercomponentlayout';
import Availablebalance from '../components/Transfercomponents/Availablebalance';
const Transfer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [banks, setBanks] = useState([]);
  const [loadingBanks, setLoadingBanks] = useState(true);
 
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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchBanks()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <Othercomponentlayout pagetitle={'Other Bank Transfer'}>
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
<Availablebalance banks={banks} setBanks={setBanks} loadingBanks={loadingBanks} setLoadingBanks={setLoadingBanks} fetchBanks={fetchBanks}/>
</View>
</ImageBackground>
 </View>

      </ScrollView>
    </Othercomponentlayout>
  )
}

export default Transfer