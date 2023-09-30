import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
const Latesttransaction = () => {
  return (
    <View style={styles.mydashboarddata}>
      <View style={styles.spacebetween}>
      <Text style={styles.available}>Latest Transaction  </Text>
      <Text style={styles.availablelight}>All  &gt;</Text>
      </View>
      <View style={styles.spacebetweens}>
      <Text style={styles.availablebold}> -N200,000  </Text>
      <Text style={styles.availablelight}>Sep 10 10:30:pm</Text>
      </View>
    </View>
  )
}

export default Latesttransaction