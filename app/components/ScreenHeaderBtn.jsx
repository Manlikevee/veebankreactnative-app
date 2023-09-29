import { Image, Text, TouchableOpacity } from "react-native";
import React, { useState, useContext  } from 'react';
import { StateContext } from '../components/StateContext';
import jwtDecode from 'jwt-decode';

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress, text }) => {
  const { token, setToken } = useContext(StateContext);
  const [Username, setUsername] = useState();
  useEffect(() => {
    if (text) {
      const decodedToken = jwtDecode(text);
      setUsername(decodedToken.username);
    }
  }, []); 

  return (
    <TouchableOpacity  onPress={handlePress}>
<Text>Hello {Username}</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;