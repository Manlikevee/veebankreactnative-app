import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from '../../../styles/styles'
import finImage from '../../../assets/fin.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

const Serviceplan = () => {
  const phoneNumber = '000000000000000000323723626'
  const route = useRouter();
    const notes = [
        { id: 1, imageName: 'phone-portrait-outline', label: 'Airtime', color: '#203d72', link:'AllBills', pagetitle:'airtime', pagekey:'Phone Number' },
        { id: 2, imageName: 'wifi-outline', label: 'Internet', color: '#203d72' , link:'Billpayment', pagetitle:null, pagekey:'Billpayment'  },
        { id: 3, imageName: 'tv-outline', label: 'TV', color: '#203d72'  , link:'AllBills' , pagetitle:'tv', pagekey:'Reference/Login Id' },
        { id: 4, imageName: 'flash-outline', label: 'Power', color: '#203d72' , link:'AllBills' , pagetitle:'power' , pagekey:'Account Number' },
        { id: 5, imageName: 'basketball-outline', label: 'Betting', color: '#203d72', link:'AllBills' , pagetitle:'betting' , pagekey:'Account Number'  },
        { id: 6, imageName: 'bus-outline', label: 'Transport' , color: '#203d72' , link:'AllBills' , pagetitle:'transport', pagekey:'Ref Number' },
        { id: 7, imageName: 'card-outline', label: 'Gift Card', color: '#203d72' , link:'AllBills' , pagetitle:null , pagekey:'Ref Number' },
       { id: 9, imageName: 'book-outline', label: 'Education' , color: '#203d72' , link:'AllBills' , pagetitle:null  , pagekey:'Ref Number'},
        { id: 10, imageName: 'send-outline', label: 'Refer' , color: '#203d72' , link:'AllBills' , pagetitle:null , pagekey:'Ref Number' },
        { id: 11, imageName: 'cash-outline', label: 'Savings' , color: '#203d72' , link:'AllBills' , pagetitle:null , pagekey:'Ref Number' },
        { id: 12, imageName: 'card-outline', label: 'Cowry' , color: '#203d72' , link:'AllBills' , pagetitle:null , pagekey:'Ref Number' },
        { id: 13, imageName: 'card-outline', label: 'Cowry' , color: '#203d72' , link:'AllBills' , pagetitle:null , pagekey:'Ref Number' },
        // Add more objects as needed
      ];
      const getImageSource = (imageName) => {
        // Use a switch statement to map image names to their corresponding imports
        switch (imageName) {
          case 'fin.png':
            return finImage;

          default:
            return null;
        }
      };
  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 9, gap: 2, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' }}>
    
    {notes.map((note) => (
  <TouchableOpacity
    style={styles.fitz}
    key={note.id}
    // onPress={() => {
    //   if (note.link) {
    //     route.push(`${note.link}`);
    //   }
    // }}
  >
    <Link
     href={{
      pathname:`${note.link}`,
      params:{ 
              routetype: `${note.label}`,
              routename: `${note.pagetitle}`,
              pagekey : `${note.pagekey}`,
    
    }
    }}
    >
          <View style={styles.iconboxs}>
            <Ionicons name={note.imageName} size={24} color={note.color}   style={styles.icn}/>
          </View>
          </Link>
          <Text style={styles.smalltext}>{note.label}</Text>
          
        </TouchableOpacity>
      ))}

       </View>
  )
}

export default Serviceplan