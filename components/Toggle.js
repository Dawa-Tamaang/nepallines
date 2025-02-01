import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Toggle = () => {
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
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
            ]}
          >
            <Text
              style={[styles.buttonText]
              }
            >
              Post Requirement
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
  },
  innerContainer: {
    height: 58,
    width: '90%',
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F5F5F5",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  buttonContainer: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    alignItems: "center",
    height: 50,
    width: '48%',
    alignItems:'center',
    
  },
  
  buttonText: {
    fontSize: 12,
    fontFamily: 'poppinsBold',
    color: "#B30000",
    marginTop:5
  },
  inactiveButtonText: {
    fontSize: 12,
    fontFamily: 'poppinsBold',
    color: "white",
    marginTop:5
  },
});

export default Toggle;
