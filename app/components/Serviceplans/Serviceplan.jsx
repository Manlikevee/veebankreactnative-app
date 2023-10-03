import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from '../../../styles/styles'
import finImage from '../../../assets/fin.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';


const Serviceplan = () => {
  const route = useRouter();
    const notes = [
        { id: 1, imageName: 'phone-portrait-outline', label: 'Airtime', color: '#203d72', link:'Billpayment' },
        { id: 2, imageName: 'wifi-outline', label: 'Internet', color: '#203d72'  },
        { id: 3, imageName: 'tv-outline', label: 'TV', color: '#203d72'  },
        { id: 4, imageName: 'flash-outline', label: 'Power', color: '#203d72'  },
        { id: 5, imageName: 'basketball-outline', label: 'Betting', color: '#203d72'  },
        { id: 6, imageName: 'bus-outline', label: 'Transport' , color: '#203d72' },
        { id: 7, imageName: 'card-outline', label: 'Gift Card', color: '#203d72'  },
        { id: 8, imageName: 'qr-code-outline', label: 'Merchant' , color: '#203d72' },
        { id: 9, imageName: 'book-outline', label: 'Education' , color: '#203d72' },
        { id: 10, imageName: 'send-outline', label: 'Refer' , color: '#203d72' },
        { id: 11, imageName: 'cash-outline', label: 'Savings' , color: '#203d72' },
        { id: 12, imageName: 'card-outline', label: 'Cowry' , color: '#203d72' },
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
    onPress={() => {
      if (note.link) {
        route.push(`${note.link}`);
      }
    }}
  >
          <View style={styles.iconboxs}>
            <Ionicons name={note.imageName} size={24} color={note.color}   style={styles.icn}/>
          </View>
          <Text style={styles.smalltext}>{note.label}</Text>
          
        </TouchableOpacity>
      ))}

       </View>
  )
}

export default Serviceplan