import { StyleSheet, Text, View, SafeAreaView, Pressable, } from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";
import PasswordInput from "../components/PasswordInput";
import React, { useState } from "react";
import Modal from "react-native-modal";
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); 
  const [showOldPasswordModal, setShowOldPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "password":
        if (!value.trim()) {
          error = "Password is required";
        } else if (value.trim().length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      case "confirmPassword":
        if (!value.trim()) {
          error = "Confirm Password is required";
        } else if (value !== password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };
  const clearField = (fieldName, setValue) => {
    setValue("");
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
  };
  const fields = { password, confirmPassword };
  const handleSubmit = () => {
    let newErrors = {};
   Object.entries(fields).forEach(([key, value]) => {
      validateField(key, value);
      if (!value.trim() || (errors[key] && errors[key] !== '')) {
        newErrors[key] = errors[key] || 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setShowOldPasswordModal(true);
  };
  const handleSaveOldPassword = () => {
    if (!oldPassword.trim()) {
      setOldPasswordError("Old password is required");
      return;
    }

    // Clear modal and proceed with reset
    setShowOldPasswordModal(false);
    setOldPassword("");
    setOldPasswordError("");

    // TODO: Submit to backend or handle success
    alert("Password has been reset successfully!");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <TopBar title="Reset Password" />
      <View style={styles.container}>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 22 }}>Change Your Password</Text>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 12,textAlign: "center", marginTop: 10}}>To change your password, please enter your current password and then your new password.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <PasswordInput
          value={password}
          placeholder={"Enter Password"}
          onChangeText={(text) => { setPassword(text); validateField('password', text); }}
          clearValue={() => clearField('password', setPassword)}
          error= {errors.password}
        />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

        <Text style={styles.inputLabel}>Confirm Password</Text>
        <PasswordInput
          value={confirmPassword}
          placeholder={"Enter Confirm Password"}
          onChangeText={(text) => { setConfirmPassword(text); validateField('confirmPassword', text); }}
          clearValue={() => clearField('confirmPassword', setConfirmPassword)}
          error = {errors.confirmPassword}
        
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
        <Pressable onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Save</Text>
        </Pressable>
      </View>
      <Modal
        transparent
        animationType="slide"
        visible={showOldPasswordModal}
        onRequestClose={() => setShowOldPasswordModal(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={{ fontFamily: "poppinsBold", fontSize: 16, marginBottom: 10 }}>Enter Old Password</Text>
            <PasswordInput
              value={oldPassword}
              placeholder="Enter Old Password"
              onChangeText={(text) => {
                setOldPassword(text);
                setOldPasswordError("");
              }}
              clearValue={() => {
                setOldPassword("");
                setOldPasswordError("");
              }}
              error={oldPasswordError}
            />
            {oldPasswordError ? <Text style={styles.errorText}>{oldPasswordError}</Text> : null}

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
              <Pressable onPress={() => setShowOldPasswordModal(false)} style={[styles.modalButton, { backgroundColor: "#ccc" }]}>
                <Text style={{ fontFamily: "poppinsMedium" }}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleSaveOldPassword} style={styles.modalButton}>
                <Text style={{ color: "#fff", fontFamily: "poppinsMedium" }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
 
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  submitButton: {
    backgroundColor: "#B30000",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: 'poppinsBold',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#F8F8F8",
    padding: 20,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#B30000",
    borderRadius: 8,
  },
});
