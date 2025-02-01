import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ABDButtons from "../components/ABDButtons";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { useRef, useEffect } from "react";
import { Button } from "react-native";
import { Card } from "react-native-shadow-cards";
import ToggleButtons from "../components/ToggleButtons";

const Order = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
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
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Card
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          height: 80,
          width: "100%",
          alignItems: "center",
          shadowColor: "#000",
          borderRadius: 12,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
          marginTop: -30,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginLeft: 10, marginTop: 20 }}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            fontFamily: "poppinsBold",
            color: "#B30000",
            marginTop: 20,
          }}
        >
          My Orders
        </Text>
      </Card>
     <ToggleButtons/>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, marginVertical:10}}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 10,
            
            width: "85%",
            fontSize: 12,
            fontFamily: "poppinsMedium",
          }}
          placeholder="Search Bookings"
        />
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={{ marginRight: 10 }}
        />
      </View>
      <ABDButtons />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 250,
              height: 250,
              backgroundColor: "white",
            }}
            source={require("../assets/search1.json")}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Restart Animation"
              onPress={() => {
                animation.current?.reset();
                animation.current?.play();
              }}
            />
          </View>
        </View>
        <Text
          style={{ fontSize: 12, fontFamily: "poppinsMedium", marginTop: 100 }}
        >
          OPPs! No Data Aviliable
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
