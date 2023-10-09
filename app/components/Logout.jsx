import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/styles';
const Logout = ({logoutfunc}) => {
  return (
    <View style={{flexDirection:'row', gap: 10}}>
               <Ionicons name='notifications-outline' size={22} color="#525452"  />
            <Ionicons name='log-out-outline' size={22} color="#525452"  onPress={logoutfunc} />
       
    </View>
  )
}

export default Logout