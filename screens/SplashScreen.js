import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Card as ShadowCard } from "react-native-shadow-cards";

const SplashScreen = () => {
  const navigation = useNavigation();
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleRed}>Nepal</Text>
          <Text style={styles.titleBlue}>Lines</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Nepal No. 1 reefer container booking app
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => navigation.navigate("login")}
            accessibilityLabel="Login Button"
          >
            <ShadowCard style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </ShadowCard>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("sign")}
            accessibilityLabel="Sign Up Button"
          >
            <ShadowCard style={[styles.button, styles.signUpButton]}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </ShadowCard>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  titleRed: {
    fontSize: 30,
    color: "#B30000",
    fontFamily: "poppinsBold",
  },
  titleBlue: {
    fontSize: 30,
    color: "blue",
    fontFamily: "poppinsBold",
  },
  subtitleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    height: 55,
    width: 270,
    backgroundColor: "#B30000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  signUpButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#B30000",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "poppinsMedium",
  },
  signUpButtonText: {
    color: "#B30000",
    fontSize: 14,
    fontFamily: "poppinsMedium",
  },
});
