import { View, Text , TouchableOpacity} from 'react-native'
import React, {  useState, useContext } from 'react';
import { styles } from '../../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import accounting from 'accounting';
import { StateContext } from './StateContext';
const Dashboardcard = ({data}) => {


  const [visibleBalance, setvisibleBalance] = useState(false);
  const setfuncvisible = () => {
    setvisibleBalance(!visibleBalance)
  }  
  const {word} = useContext(StateContext);
  const {usewording} = useContext(StateContext);
  const {loginfunc} = useContext(StateContext);
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
<Text style={styles.amount}>  {!visibleBalance ? ('*****') : (accounting.formatMoney(data?.useraccountdata?.balance, '₦', 2)) } </Text>
<TouchableOpacity
        style={styles.dashbutton}
        onPress={loginfunc}>
            <Text  style={styles.txtwhite}>Add {word}</Text>
        </TouchableOpacity>
</View>
</View>
  )
}

export default Dashboardcard