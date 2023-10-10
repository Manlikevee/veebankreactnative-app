import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList, Alert,  Modal, Pressable,  } from 'react-native'
import React, {  useState, useContext, useEffect  } from 'react';
import {styles} from '../../../styles/styles'
import AxiosInstance from  '../../Utils/AxiosInstance'
import BeneficaryCard from '../BeneficaryCard';
import Toast from 'react-native-toast-message';
import Mybalancecard from '../Mybalancecard';
import { StateContext } from '../StateContext';
import { Link } from 'expo-router';

const Internalbanktransfer = ({fetchBanks , banks, loadingBanks, mydata }) => {
    const [loadingbar, Setloadingbar] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [amount, setamount] = useState('');
    const [narration, setnarration] = useState('');
    const [activeCard, setActiveCard] = useState(null);
    const [selectedBank, setSelectedBank] = useState('Vee Bank');
    const [loadingVerification, setLoadingVerification] = useState(false);
    const {Beneficiarydata} = useContext(StateContext);
    const {mybeneficary} = useContext(StateContext);

    const isFormValid = accountNumber !== '' && selectedBank !== '' && accountName !== '' && amount !== '';

    function getFirstTwoInitials(name) {
        const nameArray = name.split(' '); // Split the input string into an array of words
        const initials = nameArray
          .slice(0, 2) // Get the first two words
          .map((word) => word.charAt(0).toUpperCase()); // Get the first character of each word and convert it to uppercase
        return initials.join(''); // Join the initials to form the result
      }

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
    
      const handleCardPress = async (cardId) => {
        const selectedBeneficiary = Beneficiarydata?.inhousebeneficary.find((beneficiary) => beneficiary.id === cardId);
        Setloadingbar(true)
        if (selectedBeneficiary) {
          // Extract 'bank_code' and 'bank' from the selected beneficiary
          const { bank_code, bank, account_number } = selectedBeneficiary;
      
          setAccountNumber(account_number);
          setIsFocus(false);
      
          try {
            const response = await AxiosInstance.get(`bank/resolve/${accountNumber}`);
      
            setAccountName(response.data.data.account_name);
            Setloadingbar(false)
            Toast.show({
              type: 'success',
              text1: 'Account Name Fetched👋',
            });
          } catch (error) {
            setIsFocus(false);
            // Handle any errors from the Axios request
            console.error('Error fetching account name:', error);
            // You may want to display an error message to the user here.
          }
        }
      
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

      useEffect(() => {

        mybeneficary();

        }, []);

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

  return (


    
    <View>

   


 <Mybalancecard data={mydata}/>

 {Beneficiarydata?.mybeneficary?
 <View>
    <View style={styles.spacebetween}>
      <Text style={styles.available}>Beneficary </Text>
      <Text style={styles.availablelight}></Text>
      </View>

      <FlatList
        style={{padding: 10,}}
        data={Beneficiarydata?.inhousebeneficary}
        horizontal={true}
        renderItem={({ item }) => <BeneficaryCard title={item.account_name} firstlast={getFirstTwoInitials(item.account_name)}
        isActive={item.id === activeCard}   onPress={handleCardPress} id={item.id}
        />}
        keyExtractor={(item) => item.id}
      />


  </View> : ('')
}




    <View style={{ padding: 10, gap: 20, marginTop: 30,  borderRadius: 3,}}>





      <TextInput
        style={styles.input}
        placeholder="Beneficiary Account Number"
        onChangeText={handleAccountNumberChange}
        keyboardType="numeric"
        value={accountNumber}
      />

      <TextInput
        style={{    width: '100%',
color: '#000',
        borderColor: '#CFCFCF',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,}}
        placeholder="Beneficiary Account Name"
        editable={false}
        value={accountName}
        
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
                keyboardType="numeric"
        onChangeText={(text) => setamount(text)}
        value={amount}
        
      />

      <TextInput
        style={styles.input}
        placeholder="Narration"
        onChangeText={(text) => setnarration(text)}
        value={narration}
        
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

export default Internalbanktransfer