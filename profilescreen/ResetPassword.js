import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useFonts } from "expo-font";

const ResetPassword = () => {
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
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={20} color="white" style={styles.headerIcon} />
        <Text style={styles.headerText}>Reset Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          placeholder="Enter the current password"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          placeholder="Enter the new password"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Enter the confirm password"
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Change Password</Text>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#B30000",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'poppinsMedium',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  label: {
    fontFamily: 'poppinsMedium',
    color: '#B30000',
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    borderColor: "lightgray",
    paddingVertical: 10,
    fontFamily: 'poppinsMedium',
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonContainer: {
    height: 50,
    width: "90%",
    backgroundColor: "#B30000",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'poppinsMedium',
  },
});
