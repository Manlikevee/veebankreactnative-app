import { View, Button,RefreshControl, Text,TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState , useContext} from 'react';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { useLocalSearchParams } from 'expo-router'
import { styles } from '../../styles/styles';
import Othercomponentlayout from '../components/Othercomponentlayout';
import {StateContext} from '../components/StateContext'
import Allbill from '../components/Transfercomponents/Allbill';
import AxiosGet from '../Utils/AxiosGet';



const Veetransfer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const {mybillsdata} = useContext(StateContext);
  const {fetchBills} = useContext(StateContext);
  const [airtime, setAirtime] = useState([]);
  const { routetype } = useLocalSearchParams();
  const { routename } = useLocalSearchParams();
  const {mydata} = useContext(StateContext);
  const {pagekey} = useLocalSearchParams();
  
  useEffect(() => {

    fetchBills();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchBills();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <Othercomponentlayout pagetitle={'Vee Bank Transfer'}>
          <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
    
 <View style={styles.bodycontainer}>
  <ImageBackground
          resizeMode="repeat" 
          source={require('../../assets/Union.png')}
  > 
<View>


{!(routename ==='null') ?
(<Allbill mybillsdata={mybillsdata} routetype={routetype}  routename={routename}  mydata={mydata} 
  pagekey={pagekey}/>)
: (<Text>Coming SOON</Text>)}


</View>
</ImageBackground>
 </View>

      </ScrollView>
    </Othercomponentlayout>
  )
}

export default Veetransfer