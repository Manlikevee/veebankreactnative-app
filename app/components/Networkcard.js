import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const Networkcard = ({ item, isActive, onPress  }) => {
  return ( 
    <TouchableOpacity style={[styles.card, isActive && styles.activeCard]}
    onPress={() => onPress(item.network)}
    >
        <View style={styles.rounded}>
        <Image
          alt=""
          source={{
            uri: item.logo,
          }}
          style={styles.avatarXL}
          contentFit={'contain'}
          transition={15000}
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
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1, // Android shadow
  },
  activeCard:{
    backgroundColor: '#FFF8E0',
  },
  avatarXL: {
    width:'100%',
    height: '100%',
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
