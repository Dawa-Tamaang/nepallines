import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TruckHomePage = () => {
  const [isOnline, setIsOnline] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const toggleOnlineStatus = () => {
    setIsOnline((prevState) => !prevState);
    Animated.timing(slideAnimation, {
      toValue: isOnline ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleTranslateX = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 20],
  });

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View
        style={{
          height: 80,
          width: "100%",
          marginLeft:10,
    
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "#B30000",
              fontFamily: "poppinsBold",
            }}
          >
            Nepal{" "}
          </Text>
          <Text
            style={{ fontSize: 30, color: "blue", fontFamily: "poppinsBold" }}
          >
            Lines{" "}
          </Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate("profile")}
          style={{
            height: 40,
            width: 40,
            backgroundColor: "lightgrey",
            borderRadius: 50,
            marginLeft: 100,
          }}
        >
          <MaterialCommunityIcons name="account" size={40} color="white" />
        </Pressable>
      </View>
      <View
        style={{
          height: 200,
          width: "100%",
          backgroundColor: "white",
          marginTop: 520,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 90,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontFamily: "poppinsBold", fontSize: 22,marginLeft:30 }}>
            you are offline!
          </Text>
          <Pressable
            onPress={toggleOnlineStatus}
            style={[styles.toggleButton, { backgroundColor: isOnline ? "#B30000" : "white" }]}
          >
            <Animated.View
              style={[
                styles.toggleInnerButton,
                { transform: [{ translateX: toggleTranslateX }] },
              ]}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TruckHomePage;

const styles = StyleSheet.create({
  toggleButton: {
    width: 50,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "flex-end",
    borderWidth:2,
    borderColor:'lightgrey'
  },
  toggleInnerButton: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: "grey",
    position: "absolute",
    left: 2,
  },
});
