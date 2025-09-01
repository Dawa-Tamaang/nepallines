import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PasswordInput from "../components/PasswordInput";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const DriverLoginScreen = () => {
    const navigation = useNavigation();
    const [text, setText] = useState("");

    const onChangeText = (inputText) => setText(inputText);
    const clearTextInput = () => setText("");

    const [loaded] = useFonts({
        poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
        poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
        poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
        poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    });

    if (!loaded) {
        return null; 
    }
    const handleNextPress = () => {
        navigation.navigate("driverhome");
    };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#B30000" />
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => navigation.navigate("Splash")}
          style={styles.backIcon}
          name="arrow-back-circle-sharp"
          size={40}
          color="lightgrey"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nepal</Text>
          <Text style={styles.title}>Lines</Text>
        </View>
      </View>
      <View style={styles.formBackground}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.label}>Email ID</Text>
          <View style={styles.inputRow}>
            <TextInput
              value={text}
              onChangeText={onChangeText}
              style={styles.textInput}
              placeholder="Enter registered email address"
            />
            {text.length > 0 && (
              <AntDesign
                onPress={clearTextInput}
                name="closecircle"
                size={20}
                color="black"
                style={styles.icon}
              />
            )}
          </View>
          <Text style={styles.label}>Password</Text>
          <PasswordInput />
          
          <TouchableOpacity
            onPress={handleNextPress}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              By proceeding you agree to Nepal Lines
            </Text>
            <Text style={styles.linkText}>Privacy Policy</Text>
            
            <Text style={styles.footerSeparator}>,</Text>
            
            <Text style={styles.linkText}>Terms and Conditions</Text>
            
          </View>
          <View style={{alignItems: "center",justifyContent: "center"}}>
            <Text style={styles.linkText}>Refund and cancellation policy</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#B30000",
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: "5%",
  },
  backIcon: {
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "poppinsBold",
    marginHorizontal: 2,
  },
  formBackground: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    marginTop: "15%",
  },
  scrollContainer: {
    padding: 20,
    paddingTop: "10%",
  },
  loginTitle: {
    fontFamily: "poppinsBold",
    fontSize: 14,
    color: "#B30000",
    marginBottom: 20,
  },
  label: {
    color: "#B30000",
    fontFamily: 'poppinsMedium',
    fontSize: 12,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    width: '90%',
    borderRadius: 5,
  },
  Icon: {
    marginLeft: 10,
  },
  forgotPassword: {
    alignItems: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "blue",
    fontFamily: "poppinsMedium",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#B30000",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontFamily: "poppinsBold",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 50, 
  },
  
  signupLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    fontFamily: "poppinsRegular",
    fontSize: 12,
  },
  signupLinkText: {
    color: "blue",
    fontFamily: "poppinsMedium",
    fontSize: 12,
  },
  divider: {
    height: 2,
    backgroundColor: "lightgray",
    marginVertical: 30,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
  footerText: {
    fontFamily: "poppinsMedium",
    fontSize: 8,
  },
  footerSeparator: {
    fontSize: 8,
  },
  linkText: {
    color: "blue",
    fontFamily: "poppinsMedium",
    fontSize: 8,
  },
});

export default DriverLoginScreen;
