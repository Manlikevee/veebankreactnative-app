import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import Toast from 'react-native-toast-message';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useRouter } from 'expo-router';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const Bottomsheet = () => {
  const navigation = useNavigation();
    const route = useRouter();
    const sheet = React.useRef();
    
    React.useEffect(() => {
      sheet.current.open();
    }, []);

    const logoutfunc = async  () => {
      await AsyncStorage.removeItem('my-access-key');
      await AsyncStorage.removeItem('my-refresh-key');
  
      ToastAndroid.showWithGravity(
        'User Logged Out successful',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      navigation.navigate('index');

    }

  return (
 <RBSheet
        customStyles={{ container: styles.sheet }}
        height={360}
        openDuration={850}
        closeOnPressMask={false}
        ref={sheet}>
        <View style={styles.sheetContent}>
          <FeatherIcon
            color="#2b64e3"
            name="shield"
            style={{
              alignSelf: 'center',
            }}
            size={48}
          />

          <Text style={styles.title}>Profile Update</Text>

          <Text style={styles.message}>
          To enhance your experience, please update your profile information. Keeping your profile current ensures you receive personalized services and stay informed about relevant updates and offers
          </Text>

          <TouchableOpacity
            onPress={() => {
                route.replace('Profileupdate');
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}
    >Proceed</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.spacer} />

          <TouchableOpacity
            onPress={() => {
              logoutfunc()
            }}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
  )
}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    sheet: {
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
    },
    placeholder: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      height: 400,
      marginTop: 0,
      padding: 24,
    },
    placeholderInset: {
      borderWidth: 4,
      borderColor: '#e5e7eb',
      borderStyle: 'dashed',
      borderRadius: 9,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    sheetContent: {
      padding: 24,
      alignItems: 'stretch',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: '#181818',
      marginTop: 16,
      textAlign: 'center',
    },
    message: {
      fontSize: 14,
      fontWeight: '400',
      color: '#555',
      marginTop: 16,
      marginBottom: 32,
      textAlign: 'center',
    },
    spacer: {
      marginBottom: 12,
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#2b64e3',
      borderColor: '#2b64e3',
    },
    btnText: {
      fontSize: 16,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
    btnSecondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
    btnSecondaryText: {
      fontSize: 16,
      lineHeight: 26,
      fontWeight: '600',
      color: '#2b64e3',
    },
  });
export default Bottomsheet