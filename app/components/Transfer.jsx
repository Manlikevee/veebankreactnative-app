import { View, Text,Image  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';

const Transfer = () => {
  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Money Transfers</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 5, flexWrap:'wrap' }}>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/fin.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>To Bank</Text>
      </View>
    <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/card.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>To VeeBank</Text>
      </View>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/Withdrawal.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>Vee Agent</Text>
      </View>

      </View>
    </View>
  )
}

export default Transfer