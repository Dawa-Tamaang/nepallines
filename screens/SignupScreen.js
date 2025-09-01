import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import PasswordInput from "../components/PasswordInput";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import InputField from "../components/InputField";
const SignupScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const [errors, setErrors] = useState({});

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;

  const validateField = (fieldName, value) => {
    let error = '';
    switch (fieldName) {
      
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 6) {
          error = 'Full name must be at least 6 Characters';
        }
        break;
      case 'email':
        if (!value.match(/^\S+@\S+\.\S+$/)) {
          error = 'Invalid Email Address';
        }
        break;
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
      case 'confirmPassword':
        if(!value.trim()) {
          error = 'Confirm Password is required';
        }else if (value !== password) {
          error = 'Passwords do not match';
        }
        break;
      case 'address':
        if (!value.trim()) {
          error = 'Address is required';
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

  const handleSubmit = async () => {
    const fields = { fullName, email, phone, password, confirmPassword, address };
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
      // await addDoc(collection(db, "users"), {
      //   companyName,
      //   fullName,
      //   email,
      //   phone,
      //   address,
      // });
  
      // const formattedPhone = "+977" + phone;
  
      // // Send OTP
      // const confirmation = await signInWithPhoneNumber(auth, formattedPhone);
  
      // navigation.navigate("Otp", { confirmation });
      navigation.navigate("Otp");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong.");
    }
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <Ionicons
              onPress={() => navigation.goBack()}
              style={styles.backIcon}
              name="arrow-back-circle-sharp"
              size={35}
              color="lightgrey"
            />

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Nepal</Text>
              <Text style={styles.title}>Lines</Text>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>Sign Up</Text>

              <InputField
                label="Full Name"
                value={fullName}
                onChangeText={(text) => { setFullName(text); validateField('fullName', text); }}
                placeholder="Enter your full name"
                clearValue={() => clearField('fullName', setFullName)}
                error={errors.fullName}
              />

              <InputField
                label="Email"
                value={email}
                onChangeText={(text) => { setEmail(text); validateField('email', text); }}
                placeholder="Enter your email"
                clearValue={() => clearField('email', setEmail)}
                error={errors.email}
              />

              <InputField
                label="Phone Number"
                value={phone}
                onChangeText={(text) => { setPhone(text); validateField('phone', text); }}
                placeholder="Enter your phone number"
                clearValue={() => clearField('phone', setPhone)}
                error={errors.phone}
                keyboardType="phone-pad"
              />

              <Text style={styles.inputLabel}>Password</Text>
              <PasswordInput
                value={password}
                placeholder={"Enter your password"}
                onChangeText={(text) => { setPassword(text); validateField('password', text); }}
                clearValue={() => clearField('password', setPassword)}
                error= {errors.password}
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

              <Text style={styles.inputLabel}>Confirm Password</Text>
              <PasswordInput
                value={confirmPassword}
                placeholder={"Enter your password again"}
                onChangeText={(text) => { setConfirmPassword(text); validateField('confirmPassword', text); }}
                clearValue={() => clearField('confirmPassword', setConfirmPassword)}
                error = {errors.confirmPassword}
              
              />
              {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

              <InputField
                label="Address"
                value={address}
                onChangeText={(text) => { setAddress(text); validateField('address', text); }}
                placeholder="Enter your address"
                clearValue={() => clearField('address', setAddress)}
                error={errors.address}
              />

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
      </KeyboardAvoidingView>
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
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  }
});

export default SignupScreen;
