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
import Ionicons from 'react-native-vector-icons/Ionicons';


const index = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {fetchatmData} = useContext(StateContext);
  const {atmdetails} = useContext(StateContext);
  const [visibleBalance, setvisibleBalance] = useState(false);
  const setfuncvisible = () => {
    setvisibleBalance(!visibleBalance)
  } 
  
  useEffect(() => {
    fetchatmData()
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchatmData()
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderCardNumber = (cardNumber) => {
    if(cardNumber) {
      if (visibleBalance) {
        return cardNumber; // Show the full card number when visibleBalance is true
      } else {
        const lastFourDigits = cardNumber.slice(-4); // Extract the last 4 digits
        return "**** **** **** " + lastFourDigits; // Display masked card number
      }
    }

  }

  return (
    <Othercomponentlayout pagetitle={'Credit Card'}>
          <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
{atmdetails?( <View style={{    padding: 15,
    gap: 5, gap: 20}}>
<Image
        source={require('../../assets/Group51.png')}
        style={{width:'100%',   resizeMode: 'contain',}}
/>
<Text style={styles.bbigtext}>Veebank Debit
Mastercard</Text>

<View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebgsmall}>
<Text style={{color:'white'}}>Digital card details</Text>
<Text style={{color:'white'}}>
<Ionicons
  name={!visibleBalance ? 'eye-outline' : 'eye-off-outline'}
  size={17}
  color='#fff'
  style={styles.icn}
  onPress={setfuncvisible}
/>
</Text>
        </View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Card Number</Text>
<Text style={styles.mywordings}>{renderCardNumber(atmdetails?.card_number)} </Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>CCV</Text>
<Text style={styles.mywordings}>  {!visibleBalance ? ( '****' ) : ( `${atmdetails?.ccv}` )  } </Text>
</View>

<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Expiry Date</Text>
<Text style={styles.mywordings}> {!visibleBalance ? ( '** / **' ) : ( `${atmdetails?.expiry_date}` )  } </Text>
</View>
<View style={{flexDirection:'column', gap:1 ,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Card Type</Text>
<Text style={styles.mywordings}> {!visibleBalance ? ( '**********' ) : ( `${atmdetails?.card_type}` )  } </Text>
</View>

      </View>


      <View style={{backgroundColor: 'white',
padding: 10,
borderRadius: 5, gap: 7}}>
        <View style={styles.bluebgsmall}>
<Text style={{color:'white'}}>Security</Text>
        </View>

<View style={{flexDirection:'column', gap:1,     paddingLeft:15 }}>
<Text style={styles.mylabel}>Lock card temporarily</Text>
<Text style={styles.mywordings}>Unlocked</Text>
</View>

<TouchableOpacity style={{width:'100%', padding:20, borderRadius:5, backgroundColor:'#FF4F4F'}}>
 <Text style={{color:'#FFE5E5', textAlign:'center'}}>Report as lost or stolen</Text> 
</TouchableOpacity>




      </View>

 </View>): (           
   <View style={styles.modaloverlay}>
          <ActivityIndicator size="large" color="#d7c49e"  style={styles.loader} />
   </View>
          ) }



      </ScrollView>
    </Othercomponentlayout>
  )
}

export default index