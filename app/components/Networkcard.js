import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const Networkcard = ({ item, isActive, onPress  }) => {
  return ( 
    <TouchableOpacity style={[styles.card, isActive && styles.activeCard]}
    onPress={() => onPress(item.id)}
    >
        <View style={styles.rounded}>
        <Image
          alt=""
          source={{
            uri: item.logo,
          }}
          style={styles.avatarXL}
        />
        </View>
     
      <Text style={styles.accname} numberOfLines={1}>{item.network}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 105, // Set the width of each card
    height: 122, // Set the height of each card
    backgroundColor: '#F5F7FA',
    borderRadius: 4,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  activeCard:{
    backgroundColor: '#FFF8E0',
  },
  avatarXL: {
    width: 64,
    height: 64,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  rounded:{
    width: 64,
    height: 64,
    borderRadius: 9999,

    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom:5,
  },
  roundedtext:{
    fontFamily: 'SoraBold',
    color: '#03285F',
    fontSize: 20,
  },
  accname:{
    color:'#282A31', fontSize: 13, opacity: 0.7, justifyContent: 'center' ,     fontWeight: 'bold',
  }
});

export default Networkcard;
