import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import importerExporterIcon from "../images/4.png";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const CreatedProfile = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Main");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={importerExporterIcon} style={styles.image} />
        <Text style={styles.businessTypeText}>Forwarder</Text>
      </View>
      <View style={styles.profileCreatedContainer}>
        <Text style={styles.profileCreatedText}>Profile Created!</Text>
      </View>
      <LottieView
        autoPlay
        style={styles.lottieView}
        source={require("../assets/loading.json")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 9,
    width: "60%",
    height: "25%",
  },
  image: {
    width: "90%",
    height: "80%",
  },
  businessTypeText: {
    fontSize: 12,
    marginTop: 8,
  },
  profileCreatedContainer: {
    marginTop: 20,
  },
  profileCreatedText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#B30000",
  },
  lottieView: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
  },
});

export default CreatedProfile;
