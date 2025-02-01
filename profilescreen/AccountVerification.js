import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import React, { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import check11 from "../images/check1.jpg";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const AccountVerification = () => {
  const animation = useRef(null);
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      animation.current?.play();
    }
  }, [loaded]);

  if (!loaded) {
    return <ActivityIndicator size="large" color="#B30000" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={20} color="black" style={styles.backIcon} />
          <Text style={styles.headerText}>Account Verification</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Why Verified Badge?</Text>
          <View style={styles.infoContent}>
            <View style={styles.infoText}>
              <Text style={styles.infoItem}>.Get verified account</Text>
              <Text style={styles.infoItem}>.Hassle free customs clearance</Text>
              <Text style={styles.infoItem}>.Smooth Booking Process</Text>
              <Text style={styles.infoItem}>.Prevent from identity theft</Text>
            </View>
            <View style={styles.animationContainer}>
              <LottieView
                autoPlay
                ref={animation}
                style={styles.animation}
                source={require("../assets/tick2.json")}
              />
            </View>
          </View>
        </View>
        <View style={styles.stepsContainer}>
          <StepItem title="File Details" description="Fill personal, company & director info" />
          <StepItem title="Upload Document" description="Upload required document for validation" />
          <StepItem title="Physical Verification" description="Our team will contact for verification" />
        </View>
        <View style={styles.claimButtonContainer}>
          <Text style={styles.claimButtonText}>Claim your badge</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StepItem = ({ title, description }) => (
  <LinearGradient colors={["#DBF0FA", "#89CFF0"]} style={styles.stepItem}>
    <View style={styles.stepImageContainer}>
      <Image source={check11} style={styles.stepImage} />
    </View>
    <View style={styles.stepTextContainer}>
      <Text style={styles.stepTitle}>{title}</Text>
      <View style={styles.separator}></View>
      <Text style={styles.stepDescription}>{description}</Text>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    alignSelf: "center",
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  backIcon: {
    marginLeft: 10,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "poppinsBold",
    color: "#B30000",
  },
  infoCard: {
    height: 160,
    
    borderColor: "lightgrey",
  },
  infoTitle: {
    fontSize: 12,
    fontFamily: "poppinsBold",
    margin: 20,
  },
  infoContent: {
    
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    marginLeft: 20,
    marginTop: -20,
  },
  infoItem: {
    fontFamily: "poppinsMedium",
    fontSize: 10,
  },
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 90,
    height: 90,
  },
  stepsContainer: {
    margin: 20,
  },
  stepItem: {
    height: 80,
    width: "100%",
    margin: 22,
    borderBottomRightRadius:9,
    borderTopRightRadius:9,
    borderBottomLeftRadius:45,
    borderTopLeftRadius:45,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  stepImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 45,
    backgroundColor: "white",
    
    justifyContent: "center",
    alignItems: "center",
  },
  stepImage: {
    width: 50,
    height: 50,
  },
  stepTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    margin: 10,
  },
  stepTitle: {
    fontSize: 12,
    fontFamily: "poppinsBold",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  stepDescription: {
    fontFamily: "poppinsMedium",
    fontSize: 8,
  },
  claimButtonContainer: {
    height: 55,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B30000",
    borderRadius: 9,
    marginTop: 150,
    alignSelf: "center",
  },
  claimButtonText: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
    color: "white",
  },
});

export default AccountVerification;
