import React from "react";
import { View ,Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, showBackIcon = true, children = null }) => {
  const navigation = useNavigation();
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
    <>
      <View
        style={styles.header}
      >
        {showBackIcon && (
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        )}
        <Text
          style={styles.headerText}
        >
          {title}
        </Text>
      </View>
      {children}
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 32,
    paddingBottom: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 10,
  },
  headerText: {
    fontFamily: "poppinsBold",
    fontSize: 16,
    color: "#B30000",
    marginLeft: 15,
  },
});

export default TopBar;
