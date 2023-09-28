import { View, Text, ImageBackground, } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
const Splashadvert = () => {
  return (
    <View>
        <ImageBackground
        resizeMode="cover" 
         source={require('../../assets/Offer.png')}
         style= {styles.bg}
         >
           <View style={styles.splashstyle}>
           <View style={styles.spacebetween}>
      <Text style={styles.available}> </Text>
      <Text style={styles.availablelight}>  &gt;</Text>
      </View>
      <View >
      <Text style={styles.adverttext}>Upgrade Today!</Text>
        <Text style={styles.advertsubtext}>Upgrade your account today to unlock a wealth of opportunities  and premium features!</Text></View>
             </View>
         </ImageBackground>
     
    </View>
  )
}

export default Splashadvert