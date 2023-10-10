import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Myaccountnumberbottomsheet({data, setisopen}) {
  const sheet = React.useRef();


  React.useEffect(() => {
    sheet.current.open();
  }, []);

  const closesheet = () => {
    sheet.current.close();
    setisopen()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>


      <RBSheet
        customStyles={{ container: styles.sheet }}
        height={300}
        openDuration={750}
        closeOnPressMask={false}
        ref={sheet}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account Details</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.bodyText}>
Account Name: {data?.account_name}
          </Text>
          <Text style={styles.bodyText}>
Account Number: {data?.account_number}
          </Text>
          <Text style={styles.bodyText}>
Bank: VeeBank
          </Text>
 

          <View style={styles.bodyGap} />

          <TouchableOpacity
            onPress={() => {
                closesheet()
            }}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
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
  header: {
    borderBottomWidth: 1,
    borderColor: '#efefef',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  body: {
    padding: 24,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: '#0e0e0e',
    marginBottom: 24,
    textAlign: 'center',
  },
  bodyGap: {
    marginBottom: 12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#ff3c2f',
    borderColor: '#ff3c2f',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#dddce0',
  },
  btnSecondaryText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000',
  },
});