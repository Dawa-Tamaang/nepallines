import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Modal from "react-native-modal";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicleData = [
    { id: "1", capacity: "1.5 MT", name: "4 WL PIKUP", image: require("../images/mini-truck.jpg") },
    { id: "2", capacity: "6 MT to 9 MT", name: "6 WL TRUCK", image: require("../images/pickup-truck.jpg") },
    { id: "3", capacity: "9 MT", name: "6 WL DABBA", image: require("../images/medium-truck.png") },
    { id: "3", capacity: "9 MT", name: "10 WL TRUCK", image: require("../images/medium-truck.png") },
    { id: "4", capacity: "21 MT", name: "12 WL TRUCK", image: require("../images/heavy-truck.png") },
    { id: "5", capacity: "25 MT to 27 MT", name: "14 WL TRUCK", image: require("../images/cargo-truck.png") },
    { id: "6", capacity: "9 MT", name: "6 WL TRAILER", image: require("../images/cargo-truck.png") },
    { id: "6", capacity: "17 MT", name: "10 WL TRAILER", image: require("../images/cargo-truck.png") },
    { id: "7", capacity: "21 MT", name: "12 WL TRAILER", image: require("../images/cargo-truck.png") },
    { id: "8", capacity: "27 MT", name: "14 WL TRAILER", image: require("../images/cargo-truck.png") },
  ];

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

  if (!loaded) return null;

  const toggleModal = () => setModalVisible(!isModalVisible);
  const handleVehicleSelect = (vehicle) => setSelectedVehicle(vehicle);
  const handleNextPress = () => {
    setModalVisible(false);
    if (selectedVehicle) {
      navigation.navigate("SetLocation", { selectedVehicle });
    }
  };

  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: "white" }}>
      <LinearGradient colors={["#005AA7", "white", "white"]} style={{ flexDirection: "column" }}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", marginLeft: "5%" }}>
            <Text style={styles.headerTextRed}>Nepal </Text>
            <Text style={styles.headerTextBlue}>Lines</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("profile")} style={styles.profileIcon}>
            <MaterialCommunityIcons name="account" size={35} color="white" />
          </Pressable>
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={{ position: 'relative' }}>
            <Image style={styles.bannerImage} source={require("../images/cover.jpg")} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Get Packages{"\n"}Delivered Safely</Text>
            </View>
          </View>
        </View>

        {/* Booking CTA */}
        <View style={styles.searchButtonWrapper}>
          <Pressable style={styles.searchButton} onPress={toggleModal}>
            <View style={styles.iconWrapper}>
              <MaterialIcons name="search" size={28} color="#fff" />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.titleText}>To Book a Container</Text>
              <Text style={styles.subtitleText}>Find a vehicle that suits your needs</Text>
            </View>
          </Pressable>
        </View>

        {/* Service Grid */}
        <Text style={styles.heading}>Our Services</Text>
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

        {/* Modal Bottom Sheet */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          style={styles.modalStyle}
        >
          <View style={styles.modalContent}>
            <Pressable style={styles.closeIcon} onPress={toggleModal}>
              <AntDesign name="close" size={24} color="#333" />
            </Pressable>

            <Text style={styles.modalTitle}>Select Vehicle Capacity</Text>

            <FlatList
              data={vehicleData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  style={[
                    styles.vehicleItem,
                    selectedVehicle?.id === item.id && styles.selectedVehicleItem,
                  ]}
                  onPress={() => handleVehicleSelect(item)}
                >
                  <Image source={item.image} style={styles.vehicleImage} />
                  <View style={styles.vehicleInfo}>
                    <Text style={styles.vehicleName}>{item.name}</Text>
                    <Text style={styles.vehicleCapacity}>{item.capacity}</Text>
                  </View>
                  {selectedVehicle?.id === item.id && (
                    <AntDesign name="checkcircle" size={24} color="green" />
                  )}
                </Pressable>
              )}
            />

            <Pressable
              style={[
                styles.nextButton,
                selectedVehicle ? styles.nextButtonEnabled : styles.nextButtonDisabled,
              ]}
              onPress={handleNextPress}
              disabled={!selectedVehicle}
            >
              <Text style={styles.nextButtonText}>Set Location</Text>
            </Pressable>
          </View>
        </Modal>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: "6%",
    height: 85,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTextRed: {
    fontSize: 30,
    color: "#B30000",
    fontFamily: "poppinsBold",
    marginTop: 10,
  },
  heading: {
    fontSize: 14,
    color: "#B30000",
    fontFamily: "poppinsMedium",
    marginTop: 10,
    marginLeft: "5%",
  },
  headerTextBlue: {
    fontSize: 30,
    color: "blue",
    fontFamily: "poppinsBold",
    marginTop: 10,
  },
  profileIcon: {
    height: 35,
    width: 35,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    marginRight: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
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
  searchButtonWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 16,
  },
  iconWrapper: {
    backgroundColor: "#B30000",
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  textWrapper: { flex: 1 },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: "#555",
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
  modalStyle: { justifyContent: "flex-end", margin: 0 },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    height: 550,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vehicleItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  selectedVehicleItem: {
    backgroundColor: "#e0f7e9",
  },
  vehicleImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 8,
  },
  vehicleInfo: {
    flex: 1,
    marginLeft: 12,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "600",
  },
  vehicleCapacity: {
    fontSize: 12,
    color: "#666",
  },
  nextButton: {
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonEnabled: {
    backgroundColor: "#005AA7",
  },
  nextButtonDisabled: {
    backgroundColor: "#ccc",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
