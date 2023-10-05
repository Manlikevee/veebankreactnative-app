import { View, Button, RefreshControl, Text, Modal, TextInput, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image, Animated, Easing, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { useLocalSearchParams } from 'expo-router'
import { styles } from '../../styles/styles';
import Toast from 'react-native-toast-message';
import Othercomponentlayout from '../components/Othercomponentlayout';
import accounting from 'accounting';
import AxiosInstance from '../Utils/AxiosInstance';
import Popupreceipt from '../components/Transfercomponents/Popupreceipt';

const index = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  const [modalVisible, setModalVisible] = useState(false);
  const { phonenumber } = useLocalSearchParams();
  const { network } = useLocalSearchParams();
  const { myamount } = useLocalSearchParams();
  const {mynaration} = useLocalSearchParams();
  const [myresponseData, setmyresponseData] = useState('');

  const otpValue = `${otp["1"]}${otp["2"]}${otp["3"]}${otp["4"]}`;

  const handleSubmit = async () => {
    console.log(otpValue)
    AxiosInstance
      .post('/donetransactionbill', {
        "pin": `${otpValue}`,
        "phonenumber": `${phonenumber}`,
        "network": `${network}`,
        "narration": `${mynaration}`,
        "amount": `${myamount}`,
      } 
      
      )
      .then(response => {
        // Handle the response as needed
        const responseData = response.data;
        // Display success toast
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Transaction completed successfully',
        });
        // You can now use responseData to access the data from the response
        console.log('Transaction Data:', responseData);
        setmyresponseData(responseData)
        showpopup();
      })
      .catch(error => {
        // Handle errors
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response?.data?.detail || 'An error occurred',
        });
      });

  };

  const showpopup = async () =>{
    setModalVisible(true)
  }

  return (
    <Othercomponentlayout pagetitle={'Bill Payment'}>

{myresponseData ? 
(  
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
<Popupreceipt data={myresponseData}/>
      </Modal>
      ) : ('') }


      <View style={styles.bodycontainer}>
        <ImageBackground
          resizeMode="repeat"
          source={require('../../assets/Union.png')}
        >
           <Text style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 5,textAlign:'center' }}>
        Review Airtime Purchase Details
      </Text>
      <Text style={{textAlign:'center', color:'#474747'}}>
        Before you proceed,
        Ensuring the accuracy of this information is essential to a smooth transaction.
      </Text>

          <View style={{
            marginTop: 10,
            backgroundColor: 'white',
            padding: 13,
            borderRadius: 5,
            gap: 10,
            marginBottom: 20,
          }}>
            <View style={styles.paymentdetail} >
              <Text style={styles.textcenter}>Payment Details</Text>
            </View>
            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Sender Name </Text>
              <Text style={styles.placevalue}>ODAH VICTOR EBUBE</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Network</Text>
              <Text style={styles.placevalue}>{myamount}</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Receiver Phone Number</Text>
              <Text style={styles.placevalue}>{phonenumber}</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Payment Method</Text>
              <Text style={styles.placevalue}>Bank Transfer</Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Amount</Text>
              <Text style={styles.placevalue}> {(accounting.formatMoney(myamount, '₦ ', 2))} </Text>
            </View>

            <View style={styles.spacebet}>
              <Text style={styles.placeholder}>Plan</Text>
              <Text style={styles.placevalue}>{mynaration}</Text>
            </View>
          </View>
      
          <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
              secureTextEntry={true}
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
              secureTextEntry={true}
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
              secureTextEntry={true}
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
              secureTextEntry={true}
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>


      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit()
        }}
      >



        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

        </ImageBackground>


      </View>
    </Othercomponentlayout>
  )
}

export default index