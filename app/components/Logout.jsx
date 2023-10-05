import { View, Text } from 'react-native'


const Logout = ({logoutfunc}) => {
  return (
    <View>
      
      <Text onPress={logoutfunc}>Logout    </Text>
    </View>
  )
}

export default Logout