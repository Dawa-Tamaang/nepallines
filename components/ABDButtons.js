import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

const ABDButtons = () => {
  const [isAllActive, setIsAllActive] = useState(false);
  const [isBookedActive, setIsBookedActive] = useState(false);
  const [isDeliveredActive, setIsDeliveredActive] = useState(false);

  const toggleAll = () => {
    setIsAllActive(true);
    setIsBookedActive(false);
    setIsDeliveredActive(false);
  };

  const toggleBooked = () => {
    setIsAllActive(false);
    setIsBookedActive(true);
    setIsDeliveredActive(false);
  };

  const toggleDelivered = () => {
    setIsAllActive(false);
    setIsBookedActive(false);
    setIsDeliveredActive(true);
  };
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, isAllActive ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleAll}
        >
          <Text style={isAllActive ? styles.activeButtonText : styles.inactiveButtonText}>
            All
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, isBookedActive ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleBooked}
        >
          <Text style={isBookedActive ? styles.activeButtonText : styles.inactiveButtonText}>
            Booked
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, isDeliveredActive ? styles.activeButton : styles.inactiveButton]}
          onPress={toggleDelivered}
        >
          <Text style={isDeliveredActive ? styles.activeButtonText : styles.inactiveButtonText}>
            Delivered
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop:-10
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 60,
    marginTop: 20,
    marginLeft: -90,
    alignItems: 'center'
  },
  button: {
    paddingVertical: 10, // Increased padding
    paddingHorizontal: 20, // Increased padding
    borderRadius: 10,
    marginLeft: 20,
    borderWidth: 1, // Added border width
    borderColor: '#B30000', // Added border color
  },
  activeButton: {
    backgroundColor: '#B30000',
    borderColor: '#B30000', // Change border color when active
  },
  inactiveButton: {
    backgroundColor: 'white',
    borderColor: '#B30000', // Change border color when inactive
  },
  activeButtonText: {
    fontSize: 10, // Increased font size
    fontFamily:'poppinsBold',
    color: 'white',
  },
  inactiveButtonText: {
    fontSize: 10, // Increased font size
    fontFamily:'poppinsBold',
    color: '#B30000',

  },
});

export default ABDButtons;
