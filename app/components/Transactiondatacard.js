import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from '../../styles/styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import accounting from 'accounting';
import { Link } from 'expo-router';


function formattedDate(dateString) {
  // Parse the input date string and format it
  return dayjs(dateString).format("MMMM D, YYYY, h:mm a");
}


const Transactiondatacard = ({data}) => {
  const mydate = '2023-10-01T12:45:11.790803Z'
  return (

    <View style={{    marginBottom: 150,}}>
    {data? ( 
  <>  

{data.length < 1 ? (
        <Text>No transactions available.</Text> // Render a message when there's no data
      ) : (
        data.map((transaction, index) => (
          <TouchableOpacity style={styles.transactioncard} key={index} >
            <View style={styles.transactionlogo}>
           {transaction.is_credit ? (     
             <View style={styles.credit}>
                <Ionicons name="arrow-up-outline" size={13} color="#fff" />
              </View>  ) 
            : transaction.is_debit ? (   
                  <View style={styles.debit}>
                <Ionicons name="arrow-down-outline" size={13} color="#fff" />
              </View>) 
              : (
                <View style={styles.pending}>
                <Ionicons name="refresh-outline" size={13} color="#fff" />
              </View>
              ) }
        

            </View>
            <Text style={styles.trxdate}>
              {formattedDate(transaction.transaction?.created_at)}
            </Text>
            <Text style={styles.trxref}>{transaction.is_credit ? (
              <Text> NIP from {transaction.transaction?.sender_user}  </Text>
            ): (
              <Text> NIP to {transaction.transaction?.recipient_user}  </Text>
            ) } </Text>
            <View style={styles.sides}> 
              <Text style={styles.smalllogo}>
                {transaction.is_billpayment ? (<Ionicons name="phone-portrait-outline" size={13} color="#999" />) : ( <Ionicons name="card-outline" size={13} color="#999" />)  
              }
            
              </Text>
              <Text style={styles.trxtyp}>
              {transaction.is_billpayment ? (<Text> Bill Payment </Text> ) :  (<Text> Fund Transfer</Text> )  }
              </Text>
            </View>
            <Text style={styles.fundamount}>{(accounting.formatMoney(transaction.amount, '₦ ', 2))} </Text>
            <Link 
          style={{width:'100%', borderRadius: 3, padding: 10, textAlign:'center', backgroundColor:'#E4F9E0',color:'#27C200', fontSize:13 }}
          href={{
            pathname:'Transactionreceipt',
            params:{ 
                     ref: `${transaction.id}`,   
          }
          }}> Detail </Link>
          </TouchableOpacity>
        ))
      )}


  
  </>
  
  )
: 
<View style={{justifyContent: 'center', alignItems:'center', padding: 20, gap: 12}}>
<Image
        source={require('../../assets/none.png')}
        style={styles.myimage}
      />
<Text style={styles.h2}>No Transactions Pull To Refresh</Text>
</View>   
}

</View>
  )
}

export default Transactiondatacard