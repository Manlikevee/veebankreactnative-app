import { View, Text,Image  } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';
const Financeoptions = () => {

  const dataArray = [
    { text: 'Currency', iconName: 'earth-outline' , link: 'MyAtmpage'  },
    { text: 'Atm', iconName: 'card-outline' , link: 'MyAtmpage'  },
    { text: 'Loan', iconName: 'cash-outline', link: 'MyAtmpage' },
    { text: 'Savings', iconName: 'bar-chart-outline' , link: 'MyAtmpage'  },
  ];

  return (
    <View style={styles.mydashboarddata}>
      <Text style={styles.available}>Financial Options</Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, gap: 3, flexWrap:'wrap' }}>
     
  
      {dataArray.map((item, index) => (
        <View style={styles.fitn} key={index}>
          <Link href="/Mypage">
          <View style={styles.iconboxn}>
            <Ionicons name={item.iconName} size={24} color="#78990c" style={styles.theiconz} />
          </View>
          </Link>
          <Text style={styles.availables}>{item.text}</Text>
        </View>
      ))}
 
      </View>
    </View>
  )
}

export default Financeoptions