import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const EditProfile = () => {
  const [text, setText] = useState("");

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  const clearTextInput = () => {
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={20} color="white" style={styles.headerIcon} />
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <MaterialCommunityIcons name="account" size={100} color="white" />
        <MaterialIcons
          name="photo-camera"
          size={30}
          color="#B30000"
          style={styles.cameraIcon}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number</Text>
        <TextInput
          placeholder="Enter your number"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Company Name</Text>
        <TextInput
          placeholder="Enter your company name"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Company Address</Text>
        <TextInput
          placeholder="Enter your company address"
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Update</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
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
    color: "white",
    fontFamily: "poppinsMedium",
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: "lightgray",
    borderRadius: 70,
    alignSelf: "center",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 6,
    left: 80,
  },
  inputGroup: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontFamily: "poppinsMedium",
    color: "#B30000",
    fontSize: 12,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    fontSize: 14,
    borderRadius: 5,
    fontFamily: "poppinsMedium",
    paddingVertical: 10,
  },
  buttonContainer: {
    height: 50,
    width: "90%",
    backgroundColor: "#B30000",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "poppinsMedium",
  },
});
