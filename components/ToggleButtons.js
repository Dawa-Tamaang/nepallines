import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState('Shipment');

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          activeButton === 'Shipment' && styles.activeButton,
        ]}
        onPress={() => setActiveButton('Shipment')}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === 'Shipment' && styles.activeButtonText,
          ]}
        >
          Shipment
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          activeButton === 'Services' && styles.activeButton,
          styles.marginLeft,
        ]}
        onPress={() => setActiveButton('Services')}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === 'Services' && styles.activeButtonText,
          ]}
        >
          Services
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'flex-space-between',
    flexDirection: 'row',
  },
  button: {
    height: 50,
    width: 160,
    backgroundColor: '#d4ebf2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#a2d4e6', 
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'poppinsMedium',
  },
  activeButtonText: {
    color: 'white', // Change text color for active button
  },
  marginLeft: {
    marginLeft: 10,
  },
});

export default ToggleButtons;
