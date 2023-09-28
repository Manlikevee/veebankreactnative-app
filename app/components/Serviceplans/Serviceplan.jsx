import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {styles} from '../../../styles/styles'
import finImage from '../../../assets/fin.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Serviceplan = () => {
    
    const notes = [
        { id: 1, imageName: 'phone-portrait-outline', label: 'Airtime', color: '#d8db1a' },
        { id: 2, imageName: 'wifi-outline', label: 'Internet', color: '#c43333'  },
        { id: 3, imageName: 'tv-outline', label: 'TV', color: '#31c418'  },
        { id: 4, imageName: 'flash-outline', label: 'Electricity', color: '#c43333'  },
        { id: 5, imageName: 'basketball-outline', label: 'Betting', color: '#1894db'  },
        { id: 6, imageName: 'bus-outline', label: 'Transport' , color: '#31c418' },
        { id: 7, imageName: 'card-outline', label: 'Gift Card', color: '#d8db1a'  },
        { id: 8, imageName: 'qr-code-outline', label: 'Merchant' , color: '#a51bc4' },

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
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 9, gap: 3, flexWrap:'wrap' }}>
    
     {notes.map((note) => (
        <View style={styles.fitz} key={note.id}>
          <View style={styles.iconbox}>
            <Ionicons name={note.imageName} size={24} color={note.color}   style={styles.icn}/>
          </View>
          <Text style={styles.smalltext}>{note.label}</Text>
          
        </View>
      ))}

       </View>
  )
}

export default Serviceplan