import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const BeneficaryCard = ({ title, firstlast, isActive, onPress, id }) => {
  return (
    <TouchableOpacity style={[styles.card, isActive && styles.activeCard]}
    onPress={() => onPress(id) }
    >
        <View style={styles.rounded}>
        <Text style={styles.roundedtext} >{firstlast}</Text>
        </View>
     
      <Text style={styles.accname} numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 115, // Set the width of each card
    height: 112, // Set the height of each card
    backgroundColor: '#F5F7FA',
    borderRadius: 4,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
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
  rounded:{
    width: 60, // Set the width of each card
    height: 60, // Set the height of each card
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
  activeCard:{
    backgroundColor: '#FFF8E0',
  },
  accname:{
    color:'#282A31', fontSize: 13, opacity: 0.7, justifyContent: 'center' 
  }
});

export default BeneficaryCard;
