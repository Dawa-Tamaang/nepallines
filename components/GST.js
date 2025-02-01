import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const GST = () => {
  const [isPostRequirementActive, setIsPostRequirementActive] = useState(true);
  const [isSearchScheduleActive, setIsSearchScheduleActive] = useState(false);

  const togglePostRequirement = () => {
    setIsPostRequirementActive(true);
    setIsSearchScheduleActive(false);
  };

  const toggleSearchSchedule = () => {
    setIsPostRequirementActive(false);
    setIsSearchScheduleActive(true);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: -1,
          height: 70,
          width: 348,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "white",
          marginTop: 100,
          borderRadius: 12,
        }}
      >
        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
              isPostRequirementActive
                ? styles.activeButton
                : styles.inactiveButton,
              { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
            ]}
            onPress={togglePostRequirement}
          >
            <Text
              style={
                isPostRequirementActive
                  ? styles.activeButtonText
                  : styles.inactiveButtonText
              }
            >
              With GST
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              isSearchScheduleActive
                ? styles.activeButton
                : styles.inactiveButton,
              { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
            ]}
            onPress={toggleSearchSchedule}
          >
            <Text
              style={
                isSearchScheduleActive
                  ? styles.activeButtonText
                  : styles.inactiveButtonText
              }
            >
              Without GST
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    
  },
  buttonContainer: {
    flexDirection: "row",
    height: 50,
    width: 210,
    marginLeft: -138,
    alignItems: "center",
  },
  button: {
    height: 50,
    width: 190,
    justifyContent: "center",
    alignItems: "center",
  marginLeft:-10,
    alignItems:'center'
  },
  activeButton: {
    backgroundColor: "#ffcb85",
  },
  inactiveButton: {
    backgroundColor: "#f0dbaf",
  },
  activeButtonText: {
    fontSize: 10,
    fontFamily: "poppinsBold",
    color: "black",
  },
  inactiveButtonText: {
    fontSize: 10,
    fontFamily: "poppinsBold",
    color: "black",
  },
});

export default GST;
