import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Forgotpassword = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  const clearTextInput = () => {
    setText("");
  };

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
    <SafeAreaView>
    <StatusBar style={{backgroundColor:'#B30000'}}></StatusBar>
      <View style={{ backgroundColor: "#B30000", height: "100%" }}>
        <Ionicons
          onPress={() => navigation.navigate("login")}
          style={{ marginTop: "5%", margin: "5%" }}
          name="arrow-back-circle-sharp"
          size={40}
          color="lightgrey"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
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
            marginTop: "15%",
            borderRadius: 16,
          }}
        >
          <View style={{ margin: "5%", marginTop: "12%" }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 12, color: "#B30000", fontFamily: 'poppinsBold' }}
              >
                Forgot Password?
              </Text>
              <Text style={{ fontSize: 10, fontFamily: 'poppinsMedium' }}>Check Your Message For OTP</Text>
            </View>
            <View style={{ marginTop: "8%" }}>
              <Text style={{ color: "#B30000", marginTop: "3%", fontSize: 10, fontFamily: 'poppinsMedium' }}>Phone Number</Text>
              <View style={{ marginTop: "0%", flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  style={{ borderBottomWidth: 2, fontSize: 12, width: "90%" }}
                  placeholder="Enter registered phone number"
                ></TextInput>
                <AntDesign
                  onPress={clearTextInput}
                  name="closecircle"
                  size={20}
                  color="black"
                  margin={10}
                />
              </View>
              <Pressable
                onPress={() => navigation.navigate("Otp")}
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: "#B30000",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15%",
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 12, fontFamily: 'poppinsBold' }}>Submit</Text>
              </Pressable>

              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "5%",
                }}
              >
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;

const styles = StyleSheet.create({});
