import Mydashboardlayout from './Mydashboardlayout';
import React, { useEffect, useRef, useState, useContext } from 'react';
import {
  View,
  BackHandler,
  Button,
  Text,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  ImageBackground,
  Image,
  Animated,
  Easing,
  Alert,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { styles, shadowStyles } from '../../../styles/styles';
import { StateContext } from '../../components/StateContext';
import { ToastAndroid } from 'react-native';
import Dashboardcard from '../Dashboardcard';
import accounting from 'accounting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Link } from 'expo-router';
import dayjs from 'dayjs';

function formattedDate(dateString) {
  // Parse the input date string and format it
  return dayjs(dateString).format("MMMM D, YYYY, h:mm a");
}


const Paymentscreen = () => {
  const { Transactiondata } = useContext(StateContext);
  const [refreshing, setRefreshing] = useState(false);
  const { mydata } = useContext(StateContext);
  const {creditdebit} = useContext(StateContext);
 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    showToast();
    Transactiondata();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    Transactiondata();
  }, []);

  const showToast = () => {

    ToastAndroid.showWithGravity(
      'Loading.. 👋',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );

  }
  const router = useRouter();


  const transactions = creditdebit?.userstransaction

  const renderItem = ({ item }) => (
    <View style={stylez.transactionItem}>
     <View style={{flexDirection:'row', gap:10}}>
      <View style={{padding:5, backgroundColor:'#F5F7FA', alignItems:'center', justifyContent:'center', width:'auto', height:'auto'}}>
      <Ionicons
  name= 'card-outline'
  size={15}
  color='#3b3c3d'

/> 

      </View>
      <View>
      <Text style={stylez.title}>{item?.transaction?.narration}</Text>
      <Text style={stylez.date}>
      
      {formattedDate(item?.transaction?.created_at)}
      </Text>
      <Text style={stylez.amount}>
      
      {(accounting.formatMoney(item?.amount, '₦ ', 2))}
      </Text>
      </View>

     </View>

<View>
<Link 
style={stylez.statusbtn}
    href={{
      pathname:'Transactionreceipt',
      params:{ 
               ref: `${item.id}`,   
    }
    }} >
      Details
    </Link>
    <Text
        style={[
          stylez.status,
          item.status === 'Completed' ? stylez.completed : stylez.pending,
        ]}
      >
        {item.status}
      </Text>
</View>

    </View>
  );


  return (

    <Mydashboardlayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.mydashboard}>
          <View style={styles.dashboardhead}>
            <Dashboardcard data={mydata} />
          </View>

          <View style={styles.dashboardwhiteheadflex}>

<View style={styles.mycredit}>
<Text style={styles.mycreditcolor}>Credit  
<Ionicons
  name= 'trending-up-outline'
  size={15}
  color='#3b3c3d'
  style={styles.icnv}

/>  
</Text>
<Text style={{color:'#191F33'}}>N{creditdebit?.usercreditbalance?.amount__sum}</Text>
</View>

<View style={styles.mydebit}>
<Text style={styles.mydebitcolor}>Debit
<Ionicons
  name= 'trending-down-outline'
  size={15}
  color='#3b3c3d'
  style={styles.icnd}

/> 
</Text>
<Text style={{color:'#191F33'}}>N{creditdebit?.userdebitbalance?.amount__sum}</Text>
</View>

            </View>

            <View style={styles.dashboardwhiteheadflex}>
            <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />


            </View>

        </View>
      </ScrollView>
    </Mydashboardlayout>
  );
}

const stylez = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:10,
    borderBottomWidth: 1,
    borderColor: '#DFDFDF',
    padding: 12,
  },
  title: {
    fontSize: 13,
  },
  date: {
   
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontSize: 13,
    textAlign: 'left',
    color: '#646464',
  },
  status: {
    textAlign:'right',
    fontSize: 13,
  },
  statusbtn:{
    borderRadius: 10,
    textAlign:'center',
    fontSize: 13,
    padding: 4,
    backgroundColor: 'rgba(99, 180, 255, 0.10)',
  },
  completed: {
    color: '#27C200',
  },
  pending: {
    color: '#FF4F4F',
  },
});



export default Paymentscreen;
