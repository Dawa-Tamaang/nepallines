import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const TruckOtp = () => {
  const navigation = useNavigation();
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
    <SafeAreaView>
      <View
        style={{
          height: 60,
          width: "100",
          borderWidth: 1,
          borderColor: "lightgrey",
          borderRadius:12
        }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="#B30000"
          style={{ margin: 10, marginTop: 10 }}
        />
      </View>
      <View style={{ margin: 22, marginTop: 55 }}>
        <Text
          style={{ fontFamily: "poppinsBold", color: "#B30000", fontSize: 14 }}
        >
          Enter OTP
        </Text>
        <Text
          style={{ fontFamily: "poppinsBold", color: "gray", fontSize: 12 }}
        >
          we have sent a OTP on
        </Text>
        <Text
          style={{ fontFamily: "poppinsBold", color: "gray", fontSize: 12 }}
        >
          your Number
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: "row",
          
          marginTop: 29,
          
        }}
      >
        <TextInput
          style={{
            borderWidth: 2,
            width: 40,
            backgroundColor: "#B30000",
            borderColor: "#B30000",
            borderRadius: 9,
            height: 40,
            color: "white",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 2,
            width: 40,
            backgroundColor: "#B30000",
            borderColor: "#B30000",
            borderRadius: 9,
            height: 40,
            color: "white",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 2,
            width: 40,
            backgroundColor: "#B30000",
            borderColor: "#B30000",
            borderRadius: 9,
            height: 40,
            color: "white",
          }}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 2,
            width: 40,
            backgroundColor: "#B30000",
            borderColor: "#B30000",
            borderRadius: 9,
            height: 40,
            color: "white",
          }}
        ></TextInput>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{ fontFamily: "poppinsBold", color: "#B30000", fontSize: 12 }}
        >
          OTP auto sends in 12 seconds
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("truckaccount")}
        style={{
          height: 50,
          width: "90%",
          backgroundColor: "#B30000",
          justifyContent: "center",
          alignItems: "center",
       
          borderRadius: 9,
          alignSelf:'center',
          marginTop:'10%'
        }}
      >
        <Text
          style={{ fontFamily: "poppinsBold", color: "white", fontSize: 12 }}
        >
          verify
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TruckOtp;

const styles = StyleSheet.create({});
