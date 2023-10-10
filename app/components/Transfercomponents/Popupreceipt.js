import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import {styles} from '../../../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Stack, useRouter } from 'expo-router'
import accounting from 'accounting';
import Toast from 'react-native-toast-message';

const Popupreceipt = ({data, beneficarysave, Savebene, Savebenetext}) => {
  const route = useRouter();
  const handleButtonPress = async () => {
    route.push('Mydash')
  }

  return (
    <View style={styles.modaloverlay}>
      <View style={{backgroundColor:'white', width: '100%', borderRadius: 8, padding: 20 }}>
    
   


  <View style={styles.greenlogo}>
    <View style={styles.green}>
 
    <Ionicons name='checkmark-outline' size={24} color='white'   />
    </View>
  </View>

   <Text style={{textAlign:'center', color:'#474747', fontSize:15, marginBottom: 10 }}>Payment{data?.status}!</Text>
   <Text style={{textAlign:'center', color:'#474747', fontSize:20, marginBottom: 10 , fontWeight:'600'}}> {(accounting.formatMoney(data?.amount, '₦ ', 2))}   </Text>
   </View>


   <View style={{backgroundColor:'white', width: '100%', borderRadius: 8, padding: 20, gap: 10, }}>
   <View style={styles.spacebet}>
              <Text style={styles.amount}>Payment Details</Text>
         
            </View>
  
   <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Ref Number</Text>
              <Text style={styles.placevalue}>{data?.reference}</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Account Name </Text>
              <Text style={styles.placevalue}>{data?.recipient_bank_account?.account_name ? 
              (
                data?.recipient_bank_account?.account_name
              ): (data.recipient_user) }</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Amount </Text>
              <Text style={styles.placevalue}>{(accounting.formatMoney(data?.amount, '₦ ', 2))}</Text>
            </View>
            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Charge </Text>
              <Text style={styles.placevalue}>0.00</Text>
            </View>

{Savebene ? (           <TouchableOpacity
        style={styles.buttonorange}
        onPress={() => {
     
        }}
      >



        <Text style={styles.buttonText}>{Savebenetext}</Text>
      </TouchableOpacity>) : (
                   <TouchableOpacity
                   style={styles.button}
                   onPress={() => {
                     beneficarysave()
                   }}
                 >
           
           
           
                   <Text style={styles.buttonText}>Save As Beneficiary</Text>
                 </TouchableOpacity>
      )}

 
 
     </View>

     <View style={styles.buttonContainer}>
     <TouchableOpacity
        style={{    width: '100%',
        display: 'flex',
        padding: 18,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#185ADB',
        width: '50%',
        borderColor: '#185ADB',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',}}
        onPress={() => {
       
        }}
      >



        <Text style={styles.buttonText}>      <Ionicons name='cloud-download-outline' size={13} color='white'   />  Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{    width: '100%',
        display: 'flex',
        padding: 18,
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#179c38',
        width: '50%',
        borderColor: '#179c38',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',}}
        onPress={() => {
          handleButtonPress()
        }}
      >



        <Text style={styles.buttonText}>
          
        <Ionicons name='checkbox-outline' size={13} color='white'   /> Done</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Popupreceipt