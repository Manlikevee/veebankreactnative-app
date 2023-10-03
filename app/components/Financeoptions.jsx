import { View, Text,Image  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Financeoptions = () => {

  const dataArray = [
    { text: 'Bank', iconName: 'navigate-outline' },
  ];

  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Financial Options</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 3, flexWrap:'wrap' }}>
     
  
      {dataArray.map((item, index) => (
        <View style={styles.fitn} key={index}>
          <View style={styles.iconboxn}>
            <Ionicons name={item.iconName} size={24} color="#78990c" style={styles.theiconz} />
          </View>
          <Text style={styles.availables}>{item.text}</Text>
        </View>
      ))}
 
      </View>
    </View>
  )
}

export default Financeoptions