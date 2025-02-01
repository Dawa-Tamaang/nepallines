import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PasswordInput from "../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const InputField = ({ label, value, onChangeText, placeholder, clearValue, secureTextEntry }) => (
  <View>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {value.length > 0 && (
        <AntDesign onPress={clearValue} name="closecircle" size={20} color="black" style={styles.icon} />
      )}
    </View>
  </View>
);

const SignupScreen = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const clearCompanyName = () => setCompanyName('');
  const clearFullName = () => setFullName('');
  const clearEmail = () => setEmail('');
  const clearAddress = () => setAddress('');
  const clearPhone = () => setPhone('');
  const clearPassword = () => setPassword('');
  const clearConfirmPassword = () => setConfirmPassword('');
  
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    if (!companyName || !fullName || !email || !address || !phone || !password) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }
    navigation.navigate("Otp");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Ionicons onPress={() => navigation.navigate("Splash")} style={styles.backIcon} name="arrow-back-circle-sharp" size={35} color="lightgrey" />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Nepal</Text>
            <Text style={styles.title}>Lines</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Sign Up</Text>

            <InputField label="Company Name" value={companyName} onChangeText={setCompanyName} placeholder="Enter your company name" clearValue={clearCompanyName} />
            <InputField label="Full Name" value={fullName} onChangeText={setFullName} placeholder="Enter your Full Name" clearValue={clearFullName} />
            <InputField label="Email" value={email} onChangeText={setEmail} placeholder="Enter your Email" clearValue={clearEmail} />
            <InputField label="Phone No" value={phone} onChangeText={setPhone} placeholder="Enter your Phone Number" clearValue={clearPhone} />
            <Text style={styles.inputLabel}>Password</Text>
            <PasswordInput value={password} onChangeText={setPassword} clearValue={clearPassword} />
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <PasswordInput value={confirmPassword} onChangeText={setConfirmPassword} clearValue={clearConfirmPassword} />

            <InputField label="Address" value={address} onChangeText={setAddress} placeholder="Enter your address" clearValue={clearAddress} />

            <Pressable onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Get OTP</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("login")} style={styles.loginLink}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Text style={styles.loginTextLink}>Login here</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#B30000",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#B30000",
  },
  backIcon: {
    marginTop: '5%',
    padding: 20,
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -10,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: 'poppinsBold',
    marginHorizontal: 2,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginTop: '6%',
  },
  formTitle: {
    fontFamily: 'poppinsBold',
    fontSize: 18,
    color: "#B30000",
    marginBottom: 20,
  },
  inputLabel: {
    color: "#B30000",
    fontFamily: 'poppinsMedium',
    fontSize: 12,
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
    width: '90%',
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  icon: {
    marginLeft: 10,
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
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  loginText: {
    fontFamily: "poppinsRegular",
    fontSize: 12,
  },
  loginTextLink: {
    color: "blue",
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
