import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Serviceslider from './Serviceslider';
import Serviceplan from './Serviceplans/Serviceplan';
const Services = () => {
  return (
    <View style={styles.mydashboarddata}>
      <View style={styles.spacebetween}>
      <Text style={styles.available}>Services </Text>
      <Text style={styles.availablelight}>More  &gt;</Text>
      </View>
<View>
<Serviceplan/>
</View>

    </View>
  )
}

export default Services