import { View, Text , TouchableOpacity} from 'react-native'
import React, {  useState } from 'react';
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Dashboardcard = () => {

  const [visibleBalance, setvisibleBalance] = useState(false);
  const setfuncvisible = () => {
    setvisibleBalance(!visibleBalance)
  }

  return (
    <View style={styles.mydashboarddata}>
<Text   onPress={setfuncvisible} style={styles.available}>Available Balance  <Ionicons
  name={!visibleBalance ? 'eye-outline' : 'eye-off-outline'}
  size={15}
  color='#3b3c3d'
  style={styles.icn}

/>
</Text>
<View style={styles.mydashboarddataflex}>
<Text style={styles.amount}>  {!visibleBalance ? ('*****') : ('N200,000') } </Text>
<TouchableOpacity
        style={styles.dashbutton}>
            <Text  style={styles.txtwhite}>Add Money</Text>
        </TouchableOpacity>
</View>
</View>
  )
}

export default Dashboardcard