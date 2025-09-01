import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const validateField = (fieldName, value) => {
    let error = '';
    switch (fieldName) {
      case 'phone':
        if (!/^9[78]\d{8}$/.test(value)) {
          error = 'Enter a Valid Mobile Number';
        }
        break;
      case 'password':
        if (!value.trim()) {
          error = 'Password is required';
        } else if (value.trim().length < 6) {
          error = 'Password must be at least 6 Characters';
        }
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const clearField = (fieldName, setValue) => {
    setValue('');
    setErrors(prev => ({ ...prev, [fieldName]: '' }));
  };

  const fields = { phone, password };

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

    try {
      navigation.navigate("Main");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong.");
    }
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
          
            <InputField
              label="Phone Number"
              value={phone}
              onChangeText={(text) => { setPhone(text); validateField('phone', text); }}
              placeholder="Enter your phone number"
              clearValue={() => clearField('phone', setPhone)}
              keyboardType="phone-pad"
              error={errors.phone}
            />
          <Text style={styles.inputLabel}>Password</Text>
          <PasswordInput
            value={password}
            placeholder={"Enter your password"}
            onChangeText={(text) => { setPassword(text); validateField('password', text); }}
            clearValue={() => clearField('password', setPassword)}
            error={errors.password}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          <Pressable onPress={handleSubmit} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("business")} style={styles.signupLink}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Text style={styles.signupLinkText}>Signup here</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("forgot")} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </Pressable>

          <View style={styles.divider} />
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>By proceeding you agree to Nepal Lines</Text>
            <Pressable>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>
            <Text style={styles.footerSeparator}>,</Text>
            <Pressable>
              <Text style={styles.linkText}>Terms and Conditions</Text>
            </Pressable>
          </View>
          <Pressable style={{alignItems: "center", justifyContent: "center"}}>
            <Text style={styles.linkText}>Refund and cancellation policy</Text>
          </Pressable>
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
    paddingTop: "20%",
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
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
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
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  }
});

export default LoginScreen;