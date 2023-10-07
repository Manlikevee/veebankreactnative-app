import { View, Button, Text, TouchableOpacity, SafeAreaView,RefreshControl, ScrollView, ImageBackground, Image ,Animated, Easing, Alert, ActivityIndicator  } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import ScreenHeaderBtn from '../ScreenHeaderBtn';
import { Stack, useRouter } from 'expo-router'
import Toast from 'react-native-toast-message';
import { Link } from 'expo-router';
import { styles } from '../../../styles/styles';
import Mydashboardlayout from './Mydashboardlayout';

const Services = () => {
  return (
    <Mydashboardlayout>
        <View style={styles.mydashboard}>
    <View style={styles.allservices}>
<Text style={styles.servicestext}>Explore Our Services</Text>

<ScrollView style={{gap: 9}}>

<View style={styles.servicebox}>
<View>
<Image
        source={require('../../../assets/tx.png')}
        style={{  borderRadius: 20,
          width: 250, 
          resizeMode: 'contain',}}
>

</Image>
</View>


<Text style={styles.trxheader}>Transaction Checker</Text>
<Text style={styles.txtcontent}>A detailed transaction report is data submitted to us after you make a payment which contains information relating to that transaction.</Text>
<Text style={styles.exploreservice}>Explore Service</Text>
</View>


<View style={styles.servicebox}>
<View style={styles}>
<Image
        source={require('../../../assets/stmt.png')}
        style={{  borderRadius: 20,
          width: 250, 
          resizeMode: 'contain',}}
>

</Image>
</View>


<Text style={styles.trxheader}>Contact Support</Text>
<Text style={styles.txtcontent}>
              Customer support is a range of customer services to assist customers in making cost effective and correct use of a product.
            </Text>
<Text style={styles.exploreservice}>Explore Service</Text>
</View>


<View style={styles.servicebox}>
<View style={styles}>
<Image
        source={require('../../../assets/api.png')}
        style={{  borderRadius: 20,
          width: 280, 
          resizeMode: 'contain',}}
>

</Image>
</View>


<Text style={styles.trxheader}>Contact Developer</Text>
<Text style={styles.txtcontent}>As the developer of this app, I'm here to assist you with any questions, feedback, or concerns you may have. Whether it's a suggestion, a bug report, or just to say hi, feel free to reach out anytime.</Text>
<Text style={styles.exploreservice}>Explore Service</Text>
</View>


<View style={styles.servicebox}>
<View style={styles}>
<Image
        source={require('../../../assets/profileedit.png')}
        style={{  borderRadius: 20,
          width: 280, 
          resizeMode: 'contain',}}
>

</Image>
</View>


<Text style={styles.trxheader}>Profile Edit request</Text>
<Text style={styles.txtcontent}>
                If your profile is unverified, you can still edit some of your informations, tho once submitted your edit needs to be approved before it can be published.
            </Text>
<Text style={styles.exploreservice}>Explore Service</Text>
</View>


<View style={styles.servicebox}>
<View style={styles}>
<Image
        source={require('../../../assets/statement.png')}
        style={{  borderRadius: 20,
         
          resizeMode: 'contain',}}
>

</Image>
</View>


<Text style={styles.trxheader}>Statement Generator</Text>
<Text style={styles.txtcontent}>FSG - Financial Statement Generator.  Generate financial reports, such as deposits and withdrawal balance sheets, based upon data in your general ledger.</Text>
<Text style={styles.exploreservice}>Explore Service</Text>
</View>

 <View style={{marginTop: 90}}></View>
</ScrollView>

    </View>
   
    </View>
  
    </Mydashboardlayout>
  )
}

export default Services