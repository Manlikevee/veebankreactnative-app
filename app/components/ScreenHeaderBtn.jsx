import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useContext  } from 'react';
import { styles } from "../../styles/styles";
import { StateContext } from "./StateContext";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, text, Username }) => {

  const {mydata} = useContext(StateContext);

  return (
    <TouchableOpacity  onPress={handlePress} style={{flexDirection:'row', gap: 4}}>
<Image
  source={
    mydata?.userprofile?.profile_image
      ? { uri: mydata?.userprofile?.profile_image?.image }
      : require('../../assets/user.png')
  }
style={{ 

  width:39, height: 35,
  padding:5,
  borderRadius: 90,
  resizeMode: 'contain',}}>

</Image>
<View>
<Text style={{    fontSize: 13,
    color: '#000',}}>Hello {Username}</Text>
<Text style={{    fontSize: 12,
    color: '#525452',}}>Welcome Lets Make Payments</Text>
</View>

    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;