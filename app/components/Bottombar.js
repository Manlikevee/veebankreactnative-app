import { View, Text, Image } from 'react-native'
import React from 'react'
import {styles} from '../../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Bottombar = () => {
  return (
    <View style={{  flexDirection: 'row', marginTop: 9, gap: 3, flexWrap:'wrap', justifyContent: 'center' }}>
       <View style={[styles.card, styles.activeitem]}>
       <Ionicons
  name='home-outline'
  size={25}
  color='#3b3c3d'
  style={styles.icn}

/>
<Text style={styles.bartext}>Home</Text>
      </View>
    
      <View style={styles.card}>
       <Ionicons
  name='wallet-outline'
  size={25}
  color='#3b3c3d'
  style={styles.icn}

/>
<Text style={styles.bartext}>Payment</Text>
      </View>

      <View style={styles.card}>
       <Ionicons
  name='apps-outline'
  size={25}
  color='#3b3c3d'
  style={styles.icn}

/>
<Text style={styles.bartext}>Services</Text>
      </View>

      <View style={styles.card}>
       <Ionicons
  name='person-circle-outline'
  size={25}
  color='#3b3c3d'
  style={styles.icn}

/>
<Text style={styles.bartext}>Me</Text>
      </View>

   
    </View>
  )
}

export default Bottombar