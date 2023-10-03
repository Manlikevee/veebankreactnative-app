import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { styles } from '../../styles/styles'
import accounting from 'accounting';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AxiosInstance from '../Utils/AxiosInstance';
import { StateContext } from '../components/StateContext';



const Mybalancecard = ({data}) => {
    const [visibleBalance, setvisibleBalance] = useState(false);
    const {word} = useContext(StateContext);
    const {usewording} = useContext(StateContext);
    const {mydata} = useContext(StateContext);
    const {fetchData} = useContext(StateContext);

    const setfuncvisible = () => {
        setvisibleBalance(!visibleBalance)
      }  

      useEffect(() => {
        fetchData(); // Trigger the fetchData function when the component mounts
      }, []);
    

    return (
        <View style={styles.bluecontainer}>
            <View style={styles.bgcard}>
                <View style={{ width: '80%', flexDirection: 'column', gap: 3, }}>
                    <Text style={{ fontSize: 20, fontFamily: 'SoraBold', color: '#3D70FF', }}>

                    {!visibleBalance ? ('*****') : (accounting.formatMoney(mydata?.useraccountdata?.balance, '₦', 2)) }

                    </Text>

                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <Text style={{ color: '#282A31', fontSize: 13, opacity: 0.3 }}> Premier Savings  </Text>
                        <Text style={{ color: '#000', fontSize: 13, opacity: 1 }}>{mydata?.useraccountdata?.account_number} </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <Text style={{ color: '#282A31', fontSize: 13, opacity: 0.3 }}> Account Status   </Text>
                        <Text style={{ color: '#000', fontSize: 13, opacity: 1 }}>Regular </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', }} onPress={setfuncvisible}>
                    <View style={{ justifyContent: 'center', padding: 7, width: 'auto', height: 'auto', backgroundColor: '#caddfa', borderRadius: 45 }}>

                        <Ionicons

                            name={!visibleBalance ? 'eye-outline' : 'eye-off-outline'}

                            size={15} color='#0864ED' style={styles.icn} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Mybalancecard