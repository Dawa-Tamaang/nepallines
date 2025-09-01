import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";



const Services = () => {

  const list = [
    { id: "0", image: require("../images/custom.png"), name: "Custom", price: "Clearance" },
    { id: "1", image: require("../images/insurence.png"), name: "RoadWay", price: "Insurance" },
    { id: "2", image: require("../images/courier.png"), name: "Document", price: "Counter" },
    { id: "3", image: require("../images/custom.png"), name: "Document", price: "Delivery" },
  ];
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
    <SafeAreaView style={{ flexGrow: 1,backgroundColor: "white" }}>
      <View style={{flexDirection: "column"}}>
        <TopBar title="Services" />
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={{ position: 'relative' }}>
            <Image style={styles.bannerImage} source={require("../images/cover.jpg")} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Get Packages{"\n"}Delivered Safely</Text>
            </View>
          </View>
        </View>
        {/* Services List */}
        <FlatList
          data={list}
          scrollEnabled={false}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.serviceItem}>
              <View style={styles.serviceIconBox}>
                <Image style={styles.serviceIcon} source={item.image} />
              </View>
              <Text style={styles.serviceText}>{item.name}</Text>
              <Text style={[styles.serviceText, { marginTop: -5 }]}>{item.price}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 16,
    marginVertical: 12,
    borderRadius: 16,
  },
  bannerImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  overlayText: {
    color: "blue",
    fontSize: 14,
    fontFamily: "poppinsMedium",
    textAlign: "left",
  },
  serviceItem: {
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "center",
    margin: 10,
  },
  serviceIconBox: {
    height: 70,
    width: 70,
    backgroundColor: "#d4ebf2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    margin: 1,
  },
  serviceIcon: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
  serviceText: {
    textAlign: "center",
    fontSize: 8,
    fontFamily: "poppinsMedium",
  },
});
export default Services;