import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import truckk from "../images/truckk.webp";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";

const TruckPage = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;
  const [errors, setErrors] = useState({});
  const validateField = (fieldName, value) => {
    let error = '';
    switch (fieldName) {
      case 'phone':
        if (!/^9[78]\d{8}$/.test(value)) {
          error = 'Enter a Valid Mobile Number';
        }
        break;
    }
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const clearField = (fieldName, setValue) => {
    setValue('');
    setErrors(prev => ({ ...prev, [fieldName]: '' }));
  };
  const handleSubmit = async () => {
      const fields = {  phone };
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
        navigation.navigate("truckotp");
      } catch (err) {
        console.log(err);
        Alert.alert("Error", "Something went wrong.");
      }
    };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", }}>
      
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image
            source={truckk}
            style={{
              height: 650,
              borderRadius: 250,
              width: "300%",
              marginTop: -300,
            }}
          />
        </View>

        <View style={styles.Container}>
          <Text style={styles.title}>Nepal Largest Truck</Text>
          <Text style={styles.subtitle}>Loads Company</Text>
        </View>
        <View style={{marginHorizontal: 20,}}>
            <InputField 
              label="Phone Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => { setPhone(text); validateField('phone', text); }}
              placeholder="Enter your phone number"
              clearValue={() => clearField('phone', setPhone)}
              error={errors.phone}
            />
        </View>

        <Pressable
          onPress={handleSubmit}
          style={styles.continueButton}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TruckPage;

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 40,
  },
  Container: {
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 20,
  },
  title: {
    fontFamily: "poppinsBold",
    fontSize: 18,
    color: "#B30000",
  },
  subtitle: {
    fontFamily: "poppinsMedium",
    fontSize: 14,
    color: "#000000",
    marginTop: -5,
  },
  
  label: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 12,
    width: "90%",
    borderRadius: 5,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  agreeText: {
    fontFamily: "poppinsMedium",
    fontSize: 10,
  },
  termsText: {
    fontFamily: "poppinsMedium",
    fontSize: 10,
    color: "#B30000",
    textDecorationLine: "underline",
  },
  continueButton: {
    height: 50,
    width: "90%",
    backgroundColor: "#B30000",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  continueButtonText: {
    fontFamily: "poppinsBold",
    fontSize: 12,
    color: "white",
  },
});
