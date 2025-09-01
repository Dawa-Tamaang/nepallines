import { ImageBackground, StyleSheet, Text, View,Pressable,Platform } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const iso = Platform.OS === "ios";
const Sucess = () => {
  const {top} = useSafeAreaInsets();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; 
  }
  return (
    <View style={{paddingTop:iso?top:top+10,backgroundColor: "#fff", flex: 1 }}>
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
