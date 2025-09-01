import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OTPInput from "../components/OTPInput ";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const iso = Platform.OS === "ios";

const Otp = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const handleSubmit = () => {
    if (otpCode.trim().length === 0) {
      setError("Please enter the OTP code.");
      return;
    }
    navigation.navigate("monthly");
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#B30000", height: "100%", paddingTop: iso ? top : top + 10 }}>
        <Ionicons
          onPress={() => navigation.navigate("sign")}
          style={{ marginTop: "15%", margin: "5%" }}
          name="arrow-back-circle-sharp"
          size={40}
          color="lightgrey"
        />
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "2.5%" }}>
          <Text style={{ fontSize: 30, color: "white", margin: "1%", fontFamily: "poppinsBold" }}>
            Nepal
          </Text>
          <Text style={{ fontSize: 30, color: "white", margin: "1%", fontFamily: "poppinsBold" }}>
            Lines
          </Text>
        </View>

        <View style={{ backgroundColor: "white", height: "100%", marginTop: "12%", borderRadius: 16 }}>
          <View style={{ margin: "5%" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 12, color: "#B30000", fontFamily: "poppinsBold" }}>
                Verification
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "poppinsMedium" }}>
                Enter Your Code
              </Text>
            </View>

            {/* OTPInput Component */}
            <OTPInput value={otpCode} setValue={setOtpCode} error={error}/>

            {/* Error Message */}
            {error ? (
              <Text style={{ color: 'red', fontSize: 12, marginTop: 5, fontFamily: "poppinsMedium", textAlign: 'center' }}>
                {error}
              </Text>
            ) : null}

            <Pressable
              onPress={handleSubmit}
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
              <Text style={{ color: "white", fontSize: 12, fontFamily: "poppinsBold" }}>
                Submit
              </Text>
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
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({});
