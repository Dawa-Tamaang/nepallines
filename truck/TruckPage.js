import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import truckk from "../images/truckk.webp";
import { useNavigation } from "@react-navigation/native";

const TruckPage = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <>
        <View>
          <Image
            source={truckk}
            style={{
              height: 720,
              borderRadius: 300,
              width: "300%",
              marginTop: -240,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            margin: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "poppinsBold",
              fontSize: 16,
              color: "#B30000",
            }}
          >
            Nepal Largest Truck
          </Text>
          <Text
            style={{
              fontFamily: "poppinsBold",
              fontSize:16,
              color: "#B30000",
              marginTop: -5,
            }}
          >
            Loads Company
          </Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "poppinsMedium",
              fontSize: 10,
              color: "#B30000",
            }}
          >
            Mobile Number
          </Text>
          <TextInput
            placeholder="Enter your mobile number"
            style={{ borderBottomWidth: 1, width: "90%",fontSize:12 }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 13,
              width: 12,
              borderWidth: 2,
              borderColor: "#B30000",
            }}
          ></View>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10}}>
            {" "}
            Agree to the{" "}
          </Text>
          <Pressable
            onPress={() => {
              /* Handle press action here */
            }}
          >
            <Text
              style={{
                fontFamily: "poppinsMedium",
                fontSize: 10,
                color: "#B30000",
                textDecorationLine: "underline",
              }}
            >
              {" "}
              Terms & Condtion
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate("truckotp")}
          style={{
            height: 60,
            width: "100%",
            backgroundColor: "#B30000",
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "poppinsBold", fontSize: 12, color: "white" }}
          >
            Continue
          </Text>
        </Pressable>
      </>
    </SafeAreaView>
  );
};

export default TruckPage;

const styles = StyleSheet.create({});
