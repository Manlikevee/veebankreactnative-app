import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList, Alert } from 'react-native'
import React, {  useState, useContext, useEffect  } from 'react';
import {styles} from '../../../styles/styles'
import BeneficaryCard from '../BeneficaryCard';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Mybalancecard from '../Mybalancecard';
import { Link } from 'expo-router';


const Availablebalance = ({fetchBanks , banks, loadingBanks} ) => {
    function getFirstTwoInitials(name) {
        const nameArray = name.split(' '); // Split the input string into an array of words
        const initials = nameArray
          .slice(0, 2) // Get the first two words
          .map((word) => word.charAt(0).toUpperCase()); // Get the first character of each word and convert it to uppercase
        return initials.join(''); // Join the initials to form the result
      }
    const [loadingbar, Setloadingbar] = useState(false)
    const [myval, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amount, setamount] = useState('');
    const [narration, setnarration] = useState('');
    const [selectedBank, setSelectedBank] = useState(null);
    const [loadingVerification, setLoadingVerification] = useState(false);

    const isFormValid = accountNumber !== '' && selectedBank !== '' && accountName !== '' && amount !== '' &&  myval!=='';
    const handleAccountNumberChange = (newAccountNumber) => {
    
      
        // Check if the newAccountNumber has 11 or more characters
        if (newAccountNumber.length === 11) {
          // If it does, call the handleAccountVerification function
          handleAccountVerification(newAccountNumber);
        } else {
          // If not, update the account number state
          setAccountNumber(newAccountNumber);
          setAccountName('');
        }
      };
      
  

    const handleAccountVerification = async () => {
        if (selectedBank && accountNumber) {
          try {
            setLoadingVerification(true);
            const response = await axios.get(
              `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank}`,
              {
                headers: {
                  Authorization: `Bearer sk_test_c1f886a70706e4f3e7ae82860d178f6d48a4822c`,
                },
              }
            );
            
            setAccountName(response.data.data.account_name);
            
                    Toast.show({
        

          type: 'success',
          text1: 'Account Name Fetched👋'
        });

          } catch (error) {
            
            Toast.show({
        

                type: 'error',
                text1: 'Error Verifying Details👋'
              });
            console.error('Error verifying account:', error);

          } finally {
            setLoadingVerification(false);
          }
        }
      };


    const data = [
        { id: '1', title: 'Victor Odah' },
        { id: '3', title: 'Ebube Odah' },
        { id: '4', title: 'Carx Dan' },
        { id: '5', title: 'Example Boy' },
        // Add more data as needed
      ];



    useEffect(() => {

    
        fetchBanks();
      }, []);

 const handletrf = () => {
        if (accountNumber && accountName && amount && selectedBank && myval ) {
       
 
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

 const withdraw = () => {

  }



  return (
    <>
<Mybalancecard/>
  <View>
    <View style={styles.spacebetween}>
      <Text style={styles.available}>Beneficary </Text>
      <Text style={styles.availablelight}></Text>
      </View>

      <FlatList
        style={{padding: 10,}}
        data={data}
        horizontal={true}
        renderItem={({ item }) => <BeneficaryCard title={item.title} firstlast={getFirstTwoInitials(item.title)} />}
        keyExtractor={(item) => item.id}
      />
  </View>



    <View style={{ padding: 10, gap: 20, marginTop: 30,  borderRadius: 3,}}>

    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={banks}
     
          search
          maxHeight={300}
          labelField="label"
          valueField="value"

     
          placeholder= {!loadingBanks ? (`${!isFocus ? 'Select A Bank' : '...'}`) : (`${!isFocus ? 'Fetching Banks...' : '...'}`)}
          
     


          searchPlaceholder="Search..."
          value={myval}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.label);
            setSelectedBank(item.value)
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
''
          )}
        />



      <TextInput
        style={styles.input}
        placeholder="Beneficiary Account Number"
        onChangeText={handleAccountNumberChange}
        value={accountNumber}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Beneficiary Account Name"
        editable={false}
        value={accountName}
        
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        onChangeText={(text) => setamount(text)}
        value={amount}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Narration"
        onChangeText={(text) => setnarration(text)}
        value={narration}
        
      />
      
      <View>
    
    
    {loadingbar ?   <TouchableOpacity
        style={styles.button}
        onPress={() => {
       
    
      }}
      >



<ActivityIndicator size="small" color="#d7c49e"   />

      </TouchableOpacity> :
        
        <>
        { isFormValid ? (
          <Link
          style={styles.button}
           href={{
            pathname:'Paymentpinoutward',
            params:{ Bank: `${myval}`,
                     accountnumber: `${accountNumber}`,
                     accountname: `${accountName}`,
                     myamount: `${amount}`,
                     mynaration: `${narration}`,
                     bankcode: `${selectedBank}`
          
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
    </>

  )
}

export default Availablebalance