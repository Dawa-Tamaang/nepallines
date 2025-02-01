import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OTPInput from "../components/OTPInput ";

const Otp = () => {
  const navigation = useNavigation();
  const [phoneNumber, setphoneNumber] = useState();
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
      <View style={{ backgroundColor: "#B30000", height: "100%" }}>
        <Ionicons
          onPress={() => navigation.navigate("sign")}
          style={{ marginTop: "15%", margin: "5%" }}
          name="arrow-back-circle-sharp"
          size={40}
          color="lightgrey"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2.5%",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              margin: "1%",
              fontFamily: "poppinsBold",
            }}
          >
            Nepal
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              margin: "1%",
              fontFamily: "poppinsBold",
            }}
          >
            Lines
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            marginTop: "12%",
            borderRadius: 16,
          }}
        >
          <View style={{ margin: "5%" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  color: "#B30000",
                  fontFamily: "poppinsBold",
                }}
              >
                Verification
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "poppinsMedium" }}>
                Enter Your Code
              </Text>
            </View>
            <OTPInput />

            <Pressable
              onPress={() => navigation.navigate("business")}
              style={{
                height: 50,
                width: '100%',
                backgroundColor: "#B30000",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "8%",
                alignSelf: 'center',
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontFamily: "poppinsBold",
                }}
              >
                Submit
              </Text>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: "5%",
              }}
            ></Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({});
