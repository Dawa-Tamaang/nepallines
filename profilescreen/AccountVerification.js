import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect, useRef } from "react";
import check11 from "../images/check1.png";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";

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
        <TopBar title="Account Verification" showBackIcon={true} />
        <LinearGradient colors={["#F0F8FF", "#E6F2FF"]} style={styles.infoCard}>
          <View>
            <Text style={styles.infoTitle}>Why Verified Badge?</Text>

            <View style={styles.infoList}>
              {[
                "Get verified account",
                "Hassle free customs clearance",
                "Smooth Booking Process",
                "Prevent from identity theft",
              ].map((item, index) => (
                <View key={index} style={styles.infoRow}>
                  <View style={styles.badgeCircle}>
                    <Text style={styles.badgeText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.infoItem}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.animationContainerCentered}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.animationLarge}
              source={require("../assets/tick2.json")}
            />
          </View>
        </LinearGradient>

        <View style={styles.stepsContainer}>
          <StepItem title="File Details" description="Fill personal, company & director info" />
          <StepItem title="Upload Document" description="Upload required document for validation" />
          <StepItem title="Physical Verification" description="Our team will contact for verification" />
        </View>
        <View style={styles.claimButtonContainer}>
          <Text style={styles.claimButtonText}>Claim your badge</Text>
        </View>
    </SafeAreaView>
  );
};

const StepItem = ({ title, description }) => (
  <LinearGradient colors={["#ffffff", "#B30000"]} style={styles.stepItem}>
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
  infoContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 20,
    marginTop: -20,
  },
  
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 120,
    height: 120,
  },
  stepsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  stepItem: {
    height: 80,
    width: "100%",
    marginVertical: 20,
    borderBottomRightRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  stepImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -2
  },
  stepImage: {
    width: 70,
    height: 70,
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
    color: "#003366",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "white",
  },
  stepDescription: {
    fontFamily: "poppinsMedium",
    fontSize: 8,
    color: "white",
  },
  claimButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B30000",
    borderRadius: 9,
    zIndex: 10,
    elevation: 10,
  },

  claimButtonText: {
    fontSize: 14,
    fontFamily: "poppinsMedium",
    color: "white",
  },
  infoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#F0F8FF",
},

infoTitle: {
  fontSize: 16,
  fontFamily: "poppinsBold",
  marginBottom: 15,
  color: "#003366",
},

infoList: {
  marginBottom: 10,
},

infoRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 5,
},

badgeCircle: {
  width: 24,
  height: 24,
  borderRadius: 12,
  backgroundColor: "#B30000",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 8,
},

badgeText: {
  color: "white",
  fontSize: 10,
  fontFamily: "poppinsMedium",
},

infoItem: {
  fontSize: 10,
  fontFamily: "poppinsMedium",
  color: "#333",
  flexShrink: 1,
},

animationContainerCentered: {
  justifyContent: "center",
  alignItems: "center",
},

animationLarge: {
  width: 80,
  height: 80,
},

});

export default AccountVerification;
