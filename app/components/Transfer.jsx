import { View, Text,Image  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Transfer = () => {
  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Money Transfers</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 3, flexWrap:'wrap' }}>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

   <Ionicons name='navigate-outline' size={24} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>Bank</Text>
      </View>
    <View style={styles.fit}>
   <View style={styles.iconbox}>

   <Ionicons name='radio-outline' size={24} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>VeeBank</Text>
      </View>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

   <Ionicons name='business-outline' size={24} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>Agent</Text>
      </View>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

   <Ionicons name='receipt-outline' size={24} color='#78990c'   style={styles.theicon}/>
      </View>
      <Text style={styles.availables}>History</Text>
      </View>
      </View>
    </View>
  )
}

export default Transfer