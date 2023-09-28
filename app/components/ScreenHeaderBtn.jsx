import { Image, Text, TouchableOpacity } from "react-native";



const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity  onPress={handlePress}>
<Text>Hello</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;