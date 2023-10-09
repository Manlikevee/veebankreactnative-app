
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useLocalSearchParams } from 'expo-router'
import Othercomponentlayout from '../components/Othercomponentlayout';
import accounting from 'accounting';
import AxiosInstance from '../Utils/AxiosInstance';
import dayjs from 'dayjs';
import Toast from 'react-native-toast-message';
import React, { useEffect, useRef, useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
export default function index() {


  function formattedDate(dateString) {
    // Parse the input date string and format it
    return dayjs(dateString).format("MMMM D, YYYY, h:mm a");
  }
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myresponseData, setmyresponseData] = useState('');
  const { ref } = useLocalSearchParams();
  const handleSubmit = async () => {
    setLoading(true)
    AxiosInstance
      .get(`/singletrans/${ref}`)
      .then(response => {
        // Handle the response as needed
        const responseData = response.data.data;
        // Display success toast
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Transaction Fetched successfully',
        });

        console.log('Transaction Data:', responseData);
        setmyresponseData(responseData)
        setLoading(false)
      })
      .catch(error => {
        // Handle errors
        setLoading(false)
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response?.data?.data || 'An error occurred',
        });
      });

  };

  useEffect(() => {
    handleSubmit(); // Trigger the fetchData function when the component mounts
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    handleSubmit();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Othercomponentlayout pagetitle={'Transaction Detail'}>

      {
        loading ?
          (
            <View style={styles.modaloverlay}>
              <ActivityIndicator size="large" color="#d7c49e" style={styles.loader} />
            </View>
          )

          :
          (
            <View style={{ flex: 1 }}>

              <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>


                  <ScrollView contentContainerStyle={styles.receipt} showsVerticalScrollIndicator={false}
                    refreshControl={
                      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <View style={styles.receiptLogo}>
                      <FeatherIcon color="#fff" name="codepen" size={32} />
                    </View>
                    {myresponseData?.is_credit ? (
                      <Text style={styles.receiptTitle}>
                        From {myresponseData?.transaction?.sender_user}
                      </Text>

                    ) :

                      (
                        <Text style={styles.receiptTitle}>
                          To {myresponseData?.transaction?.recipient_user}
                        </Text>
                      )}


                    <Text style={styles.receiptSubtitle}>Invoice #{myresponseData?.transaction?.reference}</Text>

                    <View style={styles.receiptPrice}>


                      <Text style={myresponseData?.is_credit ? styles.receiptPriceTextCredit : styles.receiptPriceTextDebit}>
                        {(accounting.formatMoney(myresponseData?.amount, '₦ ', 2))}
                      </Text>


                    </View>

                    <Text style={styles.receiptDescription}>{myresponseData?.transaction?.narration}</Text>


                    <View style={styles.divider}>
                      <View style={styles.dividerInset} />
                    </View>

                    <View style={styles.details}>
                      <Text style={styles.detailsTitle}>Transaction details</Text>

                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Date</Text>

                        <Text style={styles.detailsValue}>
                          {formattedDate(myresponseData.transaction?.created_at)}
                        </Text>
                      </View>

                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Type</Text>
                        {myresponseData?.is_fundtransfer ? (
                          <Text style={styles.detailsValue}>
                            Fund Transfer
                          </Text>
                        ) : (
                          <Text style={styles.detailsValue}>
                            Bill Payment
                          </Text>
                        )}

                      </View>

                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Payment method</Text>

                        <Text style={styles.detailsValue}>Funds</Text>
                      </View>

                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Reference</Text>

                        <Text style={styles.detailsValue}>{myresponseData?.transaction?.reference}</Text>
                      </View>

                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Account Name</Text>
                        {myresponseData?.is_credit ? (
                          <Text style={styles.detailsValue}>{myresponseData?.transaction?.recipient_user}</Text>
                        ) :
                          <Text style={styles.detailsValue}>{myresponseData?.transaction?.sender_user}</Text>}

                      </View>


                      <View style={styles.detailsRow}>
                        <Text style={styles.detailsField}>Status</Text>

                        <Text style={styles.detailsValue}>

                          <Text>    {myresponseData?.transaction?.status} </Text></Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </SafeAreaView>

              <View style={styles.overlay}>

                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.btnSecondary}>
                    <Text style={styles.btnSecondaryText}>Save as PDF</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )

      }


    </Othercomponentlayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  modaloverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background color
    opacity: 1, // Opacity for the entire container
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  receipt: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 140,
  },
  receiptLogo: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 2,
  },
  receiptSubtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#818181',
    marginBottom: 12,
  },
  receiptPrice: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  receiptPriceTextCredit: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: '#27C200',
  },
  receiptPriceTextDebit: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: 'bold',
    letterSpacing: 0.35,
    color: '#FF4F4F',
  },
  receiptDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#818181',
    textAlign: 'center',
    marginBottom: 12,
  },
  details: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  detailsTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 16,
  },
  detailsRow: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  detailsField: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#8c8c8c',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  detailsValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: '#444',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'right',
  },
  detailsActions: {
    marginTop: 24,
  },
  divider: {
    overflow: 'hidden',
    width: '100%',
    marginVertical: 24,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#0864ED',
    borderColor: '#0864ED',
    marginBottom: 12,
  },
  btnText: {
    fontSize: 15,
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
    backgroundColor: 'transparent',
    borderColor: '#0864ED',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#0864ED',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  dividerInset: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderStyle: 'dashed',
    marginTop: -2,
  },
});