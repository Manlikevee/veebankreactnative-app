import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const BeneficaryCard = ({ title, firstlast }) => {
  return (
    <TouchableOpacity style={styles.card}>
        <View style={styles.rounded}>
        <Text style={styles.roundedtext} >{firstlast}</Text>
        </View>
     
      <Text style={styles.accname} numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 105, // Set the width of each card
    height: 92, // Set the height of each card
    backgroundColor: '#F5F7FA',
    borderRadius: 4,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  rounded:{
    width: 40, // Set the width of each card
    height: 40, // Set the height of each card
    borderRadius: 50,
    backgroundColor: '#E6F0FD',
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
    color:'#282A31', fontSize: 13, opacity: 0.7, justifyContent: 'center' 
  }
});

export default BeneficaryCard;
