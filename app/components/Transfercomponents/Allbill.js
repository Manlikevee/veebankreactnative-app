import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList, Alert,  Modal, Pressable,  } from 'react-native'
import React, {  useState, useContext, useEffect  } from 'react';
import {styles} from '../../../styles/styles'
import accounting from 'accounting';
import AxiosInstance from  '../../Utils/AxiosInstance'
import BeneficaryCard from '../BeneficaryCard';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Mybalancecard from '../Mybalancecard';
import OTPInputView from 'react-native-otp-inputs';
import { Link } from 'expo-router';
import Popupreceipt from './Popupreceipt';
import Networkcard from '../Networkcard';
const Allbill = ({mybillsdata, routetype, routename, mydata, pagekey }) => {
    const [loadingbar, Setloadingbar] = useState(false);
    const [phoneNumber, setphoneNumber] = useState('');
    const [amount, setamount] = useState('');
    const [activeCard, setActiveCard] = useState(null);
    const isFormValid =  activeCard !== '' && amount !== '' && phoneNumber !== '';
    
    const handletrf = () => {
      if (  activeCard && amount && phoneNumber ) {
     

      } else {
       Alert.alert(
           'Alert',
           'Kindly fill all fields',
           [
             {
               text: 'OK',
               onPress: () => console.log('OK Pressed'),
             },
           ],
           { cancelable: true } // Allow users to dismiss the alert by tapping outside
         );
      }
     }
    const handleCardPress = (cardId) => {
      setActiveCard(cardId);
    };




  

 


      const activeList = mybillsdata[routename];
      console.log(activeList);
 
  return (


    
    <View>

   


 <Mybalancecard data={mydata}/>
 <View>
    <View style={styles.spacebetween}>
      <Text style={styles.available}>{routename} </Text>
      <Text style={styles.availablelight}></Text>
      </View>

      <FlatList
        style={{padding: 10,}}
        data={activeList}
        horizontal={true}
        renderItem={({ item }) => <Networkcard item={item} isActive={item.network === activeCard}   onPress={handleCardPress}/>}
        keyExtractor={(item) => item.network} 
      />
  </View>



    <View style={{ padding: 10, gap: 20, marginTop: 10,  borderRadius: 3,}}>



      <TextInput
      editable={false}
      style={styles.input}
      placeholder=""
   value={activeCard}
    />
   






      <TextInput

        style={styles.input}
        placeholder={pagekey}
        keyboardType="numeric"
        onChangeText={(text) => setphoneNumber(text)}
        value={phoneNumber}
      />


<TextInput

        style={styles.input}
        placeholder="Amount"
        onChangeText={(text) => setamount(text)}
    value={amount}
      />
<Text></Text>


      
      <View style={{width: '100%'}}>
    
    
    {loadingbar ?  
     <TouchableOpacity
        style={styles.button} >
<ActivityIndicator size="small" color="#d7c49e"   />
      </TouchableOpacity> :
          <>
          { isFormValid ? (
            <Link
            style={styles.button}
             href={{
              pathname:'BillPaymentcomplete',
              params:{ 
                       phonenumber: `${phoneNumber}`,
                       network: `${activeCard}`,
                       myamount: `${amount}`,
                       mynaration: `${activeCard}`,
                       routename: `${routename}`,
                       
            }
            }}>
           
             Proceed
            </Link>
          ) : ( <TouchableOpacity
            style={styles.button}
            onPress={() => {
                handletrf()
          }}
          >
            <Text style={styles.buttonText} >Transfer</Text>
            </TouchableOpacity>) }
      

        </>
      }
    
    </View>




      </View>
    </View>
  )
}

export default Allbill