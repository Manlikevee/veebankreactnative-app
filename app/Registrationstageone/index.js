import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { Stack, useRouter } from 'expo-router'
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Example() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#de8744' }}>
              <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#EFEFEF'},
            headerShadowVisible: false,
            headerTitle: ''
        }} />
      <View style={styles.container}>
        <View style={styles.alert}>
          <View style={styles.alertContent}>
            <View style={styles.alertTop}>
              <FeatherIcon color="#fae4a8" name="check-circle" size={14} />

              <Text style={styles.alertTopText}>all done!</Text>
            </View>

            <Text style={styles.alertTitle}>Your Registration was successful!</Text>

            <Text style={styles.alertMessage}>
              Thank you for supporting MyApp!
              {'\n'}
              We are looking forward to serving you!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              router.replace('/Loginpage');
            }}>
            <View style={styles.btn} >
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  alert: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  alertContent: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  alertTop: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertTopText: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 4,
    color: '#fae4a8',
    textAlign: 'center',
  },
  alertTitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fae4a8',
    textAlign: 'center',
    marginBottom: 36,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});