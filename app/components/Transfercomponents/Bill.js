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
    const [accountName, setAccountName] = useState('');
    const [amount, setamount] = useState('');
    const [narration, setnarration] = useState('');
    const [selectedBank, setSelectedBank] = useState('Vee Bank');
    const [loadingVerification, setLoadingVerification] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const isFormValid = accountNumber !== '' && selectedBank !== '' && accountName !== '' && amount !== '';
   
    const handleCardPress = (cardId) => {
      setActiveCard(cardId);
    };



      
  
      const data = [
        { id: '1', title: 'Victor Odah' },
        { id: '3', title: 'Ebube Odah' },
        { id: '4', title: 'Carx Dan' },
        { id: '5', title: 'Example Boy' },
        // Add more data as needed
      ];

      const handletrf = () => {
       if (accountNumber && accountName && amount && selectedBank ) {
      

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

    const handleAccountVerification = async () => {
        Setloadingbar(true)


        if (selectedBank && accountNumber) {
            Toast.show({
                type: 'info',
                text1: 'Loading....'
              });


          try {
            setLoadingVerification(true);
            const response = await AxiosInstance.get(`bank/resolve/${accountNumber}`);
            setAccountName(response.data.data.account_name);
                    Toast.show({
          type: 'success',
          text1: 'Account Name Fetched👋'
        });
        Setloadingbar(false)

          } catch (error) {
            
            Toast.show({
        

                type: 'error',
                text1: 'Error Verifying Details👋'
              });
            console.error('Error verifying account:', error);
            Setloadingbar(false)
          } finally {
            setLoadingVerification(false);
            Setloadingbar(false)
          }
        }
      };
      const activePlan = airtime.find((plan) => plan.id === activeCard);
      console.log(activePlan)
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
        renderItem={({ item }) => <Networkcard item={item} isActive={item.id === activeCard}   onPress={handleCardPress}/>}
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
          <View style={styles.gridItem}>
                 <Text style={styles.gridTextday}>{item.price}</Text>
            <Text style={styles.gridText}>{item.data}</Text>
            <Text style={styles.gridTexttitle}>{item.name}</Text>
          </View>
        )}
      />
</View>


      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
     
      />




      
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
              pathname:'Paymentpin',
              params:{ Bank: "Vee Bank",
                       accountnumber: `${accountNumber}`,
                       accountname: `${accountName}`,
                       myamount: `${amount}`,
                       mynaration: `${narration}`
            
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