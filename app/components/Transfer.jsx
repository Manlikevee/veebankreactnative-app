import { View, Text,Image,TouchableOpacity  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
const index = () => {
  const route = useRouter();
  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Money Transfers</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 3, flexWrap:'wrap' }}>
     
      <TouchableOpacity style={styles.fit} 
       onPress={() => {
        route.push('AllTransfer')
    }}
      >
        <View style={styles.iconbox}>

   <Ionicons name='navigate-outline' size={23} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>Bank</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.fit} 
       onPress={() => {
        route.push('Veetransfer')
    }}
      >
   <View style={styles.iconbox}>

   <Ionicons name='radio-outline' size={23} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>VeeBank</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={styles.fit} 
       onPress={() => {
        route.push('AllTransfer')
    }}
      >
   <View style={styles.iconbox}>

   <Ionicons name='business-outline' size={23} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>Agent</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.fit} 
       onPress={() => {
        route.push('Transactionhistory')
    }}
      >
   <View style={styles.iconbox}>

   <Ionicons name='receipt-outline' size={23} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>History</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default index