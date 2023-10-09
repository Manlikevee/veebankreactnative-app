import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import accounting from 'accounting';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
const Latesttransaction = ({mydata}) => {
  const route = useRouter();
  function formattedDate(dateString) {
    // Parse the input date string and format it
    return dayjs(dateString).format("MMMM D, YYYY, h:mm a");
  }
  
  return (

    <View style={styles.mydashboarddata}>
      <View style={styles.spacebetween}>
      <Text style={styles.available}>Latest Transaction  </Text>
      <Text style={styles.availablelight}
             onPress={() => {
              route.push('Transactionhistory')
          }}
      >All  &gt;</Text>
      </View>

      <View style={styles.spacebetweens}>
      <Link style={
    mydata?.transactiondata?.is_credit ? styles.availablebold : styles.availablebolderror}
  href={{
    pathname:'Transactionreceipt',
    params:{ 
             ref: `${ mydata?.transactiondata?.id}`,   
  }
  }}>   {(accounting.formatMoney(mydata?.transactiondata?.amount, '₦', 2))}   
  </Link>
      <Text style={styles.availablelight}>{formattedDate(mydata?.transactiondata?.transaction?.created_at)} </Text>
      </View>
    
    </View>
  )
}

export default Latesttransaction