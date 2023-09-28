import { View, Text,Image  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';

const Financeoptions = () => {
  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Financial Options</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 5, flexWrap:'wrap' }}>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/fin.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>Loan</Text>
      </View>
    <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/card.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>Investments</Text>
      </View>
      <View style={styles.fit}>
   <View style={styles.iconbox}>

      <Image
        source={require('../../assets/Withdrawal.png')}
        style={styles.bnk}
      />
      </View>
      <Text style={styles.availables}>Trends</Text>
      </View>

      </View>
    </View>
  )
}

export default Financeoptions