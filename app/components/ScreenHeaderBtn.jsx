import { Image, Text, TouchableOpacity } from "react-native";
import React, { useState, useContext  } from 'react';



const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, text, Username }) => {



  return (
    <TouchableOpacity  onPress={handlePress}>
<Text>Hello {Username}</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;