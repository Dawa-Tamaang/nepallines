import { ImageBackground, StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Sucess = () => {
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
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 300,
        }}
      >
        <FontAwesome6 name="circle-check" size={60} color="#B30000" />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#B30000", fontSize: 30 ,fontFamily:'poppinsBold'}}>Whoohoo !</Text>
        <Text style={{ fontSize: 20 ,fontFamily:'poppinsMedium'}}>
          Your email has been verified sucessfully.
        </Text>
      </View>
      <Pressable
      style={{
        height: 50,
        width: 300,
        backgroundColor: "#B30000",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 44,
        marginTop:300,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Sign in</Text>
    </Pressable>
    
    </View>
    
  );
};

export default Sucess;

const styles = StyleSheet.create({});
