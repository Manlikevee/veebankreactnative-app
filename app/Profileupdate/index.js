import React, {  useState, useContext, useEffect  } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';
import Toast from 'react-native-toast-message';
import { Stack } from 'expo-router'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Myimagecard from '../components/Myimagecard';
import Networkcard from '../components/Networkcard';
import { StateContext } from '../components/StateContext';
import AxiosInstance from '../Utils/AxiosInstance';
import { router } from 'expo-router';


export default function index() {
  const {mydata} = useContext(StateContext);
  const {fetchData} = useContext(StateContext);
  const {AvailableImages} = useContext(StateContext);
  const {fetchAvailableImages} = useContext(StateContext);
  const [activeCard, setActiveCard] = useState(null);
  const [loadingbar, Setloadingbar] = useState(false)

  useEffect(() => {
    fetchData(); // Trigger the fetchData function when the component mounts
    fetchAvailableImages()
    
  }, []);


  const [form, setForm] = useState({
    fullname: mydata?.useraccountdata?.account_name,
    accountnumber: mydata?.useraccountdata?.account_number,
    password: '',
  });
  
  const handleCardPress = (cardId) => {
    setActiveCard(cardId);
  };


  const handleSubmit = async () => {
    Setloadingbar(true)
    AxiosInstance
      .post('/setpinandprofile/', {
        "pin": `${form.password}`,
        "imgid": `${activeCard}`,
      } 
      
      )
      .then(response => {
        // Handle the response as needed
        const responseData = response.data;
        // Display success toast
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Profile Updated successfully',
        });
        fetchData();
        router.replace('/Mydash');
        console.log('Transaction Data:', responseData);
        Setloadingbar(false)
      })
      .catch(error => {
        // Handle errors
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error.response?.data?.detail || 'An error occurred',
        });
        Setloadingbar(false)
      });

  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <Stack.Screen
        options={{
            headerShown: false,
            headerStyle:{backgroundColor: '#EFEFEF'},
            headerShadowVisible: false,
            headerTitle: ''
        }}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started </Text>

          <Text style={styles.subtitle}>Update Your Profile to continue</Text>
        </View>



        <KeyboardAwareScrollView>
          <View style={styles.form}>
           
          <Text style={styles.inputLabel}>Choose An Avatar {activeCard}</Text>

      <FlatList
        style={{padding: 10,}}
        data={AvailableImages?.availdatas}
        horizontal={true}
        renderItem={({ item }) => <Myimagecard item={item} isActive={item.id === activeCard}   onPress={handleCardPress}/>}
        keyExtractor={(item) => item.id} 
      />

           
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Full name</Text>

              <TextInput
                onChangeText={fullname => setForm({ ...form, fullname })}
                placeholder="John Doe"
                editable={false}
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.fullname}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Account Number</Text>

              <TextInput
                autoCapitalize="none"
                editable={false}
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, accountnumber })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.accountnumber}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Transaction pin</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

        


            {loadingbar ?  
    
    <TouchableOpacity
        style={styles.button}
        onPress={() => {

      }}
      >

<ActivityIndicator size="small" color="#d7c49e"   />

      </TouchableOpacity> :
        
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit()
    
      }}
      >



        <Text style={styles.buttonText}>Submit</Text>

      </TouchableOpacity>

      }
            <TouchableOpacity
              onPress={() => {
                // handle link
              }}>
              <Text style={styles.formFooter}>
                Already have an account?{' '}
                <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
              </Text>
            </TouchableOpacity>


          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  buttonText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',

  },
  header: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#929292',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 4,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  button: {
    width: '100%',
    display: 'flex',
    padding: 18,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#185ADB',
    width: '100%',
    borderColor: '#185ADB',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});