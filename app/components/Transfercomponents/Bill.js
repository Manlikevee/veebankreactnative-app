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
const Bill = ({airtime, mydata }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loadingbar, Setloadingbar] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amount, setamount] = useState('');
    const [narration, setnarration] = useState('');
    const [selectedBank, setSelectedBank] = useState('Vee Bank');
    const [loadingVerification, setLoadingVerification] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [activeairtimeCard, setActiveAirtimeCard] = useState(null);
    const isFormValid = activeairtimeCard !== '' && activeCard !== '' && amount !== '' && phoneNumber !== '';
    
    const handletrf = () => {
      if (activeairtimeCard && activeCard && amount && phoneNumber ) {
     

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
      setActiveAirtimeCard(null)
    };


    const findActiveCardName = (cardIds, price ) => {

        setActiveAirtimeCard(cardIds);
        setamount(price);
    };
      
  

 


      const activePlan = airtime.find((plan) => plan.network === activeCard);
 
  return (


    
    <View>

   


 <Mybalancecard data={mydata}/>
 <View>
    <View style={styles.spacebetween}>
      <Text style={styles.available}>Service Providers </Text>
      <Text style={styles.availablelight}></Text>
      </View>

      <FlatList
        style={{padding: 10,}}
        data={airtime}
        horizontal={true}
        renderItem={({ item }) => <Networkcard item={item} isActive={item.network === activeCard}   onPress={handleCardPress}/>}
        keyExtractor={(item) => item.id.toString()} 
      />
  </View>



    <View style={{ padding: 10, gap: 20, marginTop: 10,  borderRadius: 3,}}>

<View>
    <FlatList
        data={activePlan?.plans}
        keyExtractor={(item) => item.name}
        numColumns={3} // Number of columns in the grid
        renderItem={({ item }) => (
          <TouchableOpacity             
          style={[
            styles.gridItem,
            item.name === activeairtimeCard ? styles.myactiveCard : null,
          ]}
          onPress={() => {
            findActiveCardName(item.name,item.price);
          }}
          >
                 <Text         
                 style={[
          styles.gridTextday,
          item.name === activeairtimeCard ? styles.gridTextdayactive : null,
        ]}>
          {item.price}
          </Text>
            <Text         style={[
          styles.gridText,
          item.name === activeairtimeCard ? styles.gridTextdayactive : null,
        ]}
        >{item.data}</Text>
            <Text         style={[
          styles.gridTexttitle,
          item.name === activeairtimeCard ? styles.gridTextdayactive : null,
        ]}
        >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
</View>

{activeairtimeCard && (
      <TextInput
      editable={false}
      style={styles.input}
      placeholder=""
   value={activeairtimeCard}
    />
      )}


{activeCard && (
        <TextInput
        editable={false}
        style={styles.input}
        placeholder=""
     value={activeCard}
      />

      )}
      <TextInput

        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={(text) => setphoneNumber(text)}
        value={phoneNumber}
      />


<Text style={styles.gridText}>N={amount}</Text>


      
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
              pathname:'AirtimePaymentpin',
              params:{ 
                       phonenumber: `${phoneNumber}`,
                       network: `${activeCard}`,
                       myamount: `${amount}`,
                       mynaration: `${activeairtimeCard}`
            
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

export default Bill