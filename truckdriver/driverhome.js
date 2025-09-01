import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const DriverHome = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Active");

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;

  const deliveryHistory = [
    {
      date: "3 June 2024, 05:09 PM",
      amount: "Rs. 10,000",
      vtype: "Container",
      status: "Pending",
      fromwhere: "Kathmandu",
      towhere: "Pokhara",
    },
    {
      date: "2 June 2024, 03:15 PM",
      amount: "Rs. 8,500",
      vtype: "Truck",
      status: "Completed",
      fromwhere: "Bhairahawa",
      towhere: "Kathmandu",
    },
    {
      date: "2 June 2024, 03:15 PM",
      amount: "Rs. 8,500",
      vtype: "Truck",
      status: "Request",
      fromwhere: "Pokhara",
      towhere: "Kathmandu",
    },
  ];

  const filteredData = () => {
    if (selectedTab === "Request") {
      return deliveryHistory.filter((item) => item.status === "Request");
    } else if (selectedTab === "Pending") {
      return deliveryHistory.filter((item) => item.status === "Pending");
    } else if (selectedTab === "Complete") {
      return deliveryHistory.filter((item) => item.status === "Completed");
    }
    return deliveryHistory;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View
                    style={{
                    flexDirection: "row",
                    marginLeft: "5%",
                    justifyContent: "center",
                    marginTop: "-3%",
                    }}
                >
                    <Text
                    style={{
                        fontSize: 30,
                        color: "#B30000",
                        fontFamily: "poppinsBold",
                        marginTop: 10,
                    }}
                    >
                    Nepal{" "}
                    </Text>
                    <Text
                    style={{
                        fontSize: 30,
                        color: "blue",
                        fontFamily: "poppinsBold",
                        marginTop: 10,
                    }}
                    >
                    Lines
                    </Text>
                </View>

                <Pressable
                    onPress={() => navigation.navigate("profile")}
                    style={styles.profileIcon}
                >
                    <MaterialCommunityIcons name="account" size={35} color="white" />
                </Pressable>
            </View>
        </View>

        <View style={{ marginTop: 25 }}>
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    onPress={() => setSelectedTab("Request")}
                    style={styles.tab}
                >
                    <Text
                    style={[
                        styles.tabText,
                        selectedTab === "Request" && styles.activeTabText,
                    ]}
                    >
                    Request
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedTab("Pending")}
                    style={styles.tab}
                >
                    <Text
                    style={[
                        styles.tabText,
                        selectedTab === "Pending" && styles.activeTabText,
                    ]}
                    >
                    Pending
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedTab("Complete")}
                    style={styles.tab}
                >
                    <Text
                    style={[
                        styles.tabText,
                        selectedTab === "Complete" && styles.activeTabText,
                    ]}
                    >
                    Complete
                    </Text>
                </TouchableOpacity>
            </View>

        {/* Active Indicator */}
            <View
                style={[
                    styles.activeIndicator,
                    {
                    left:
                        selectedTab === "Request"
                        ? 0
                        : selectedTab === "Pending"
                        ? "33.33%"
                        : "66.66%",
                    },
                ]}
                />
            </View>

      {/* Orders */}
      <ScrollView style={styles.sectionContainer}>
        {filteredData().map((item, index) => (
        <View key={index} style={styles.section}>
            <View
              style={{
                width: "100%",
                backgroundColor:
                  item.status === "Completed"
                    ? "#e3f8e9"
                    : item.status === "Pending"
                    ? "#fff5e6"
                    : "#f0f0f0",
                borderRadius: 7,
                alignSelf: "flex-start",
                marginBottom: 10,
              }}
            >
              <Text
                style={[
                  styles.statusText,
                  item.status === "Pending" && styles.pendingStatus,
                  item.status === "Completed" && styles.completedStatus,
                ]}
              >
                {item.status}
              </Text>
            </View>

            <View style={styles.sectionRow}>
              <Text style={styles.distanceText}>120 km</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                <Text style={styles.amountText}>{item.amount}</Text>
              </View>
            </View>

            <View style={styles.sectionRow}>
              <Text style={styles.smallText}>{item.vtype}</Text>
              <Text style={styles.sectionText}>{item.date}</Text>
            </View>

            <View style={styles.separator} />

            {/* Pickup and Dropoff */}
            <View style={styles.locationContainer}>
              <View style={styles.dotLine}>
                <View style={styles.dot} />
                <View style={styles.verticalLine} />
                <View style={[styles.dot, { backgroundColor: "#B30000" }]} />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.pickupText}>{item.fromwhere}</Text>
                <Text style={styles.dropoffText}>{item.towhere}</Text>
              </View>
            </View>
        </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverHome;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
  },
  profileIcon: {
    height: 35,
    width: 35,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    marginRight: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9d0d2",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    position: "relative",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  activeTabText: {
    color: "#000000",
    fontWeight: "bold",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    width: "33.33%",
    backgroundColor: "#B30000",
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionText: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "800",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  amountText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  distanceText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#000000",
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginVertical: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  pendingStatus: {
    color: "#FFA500",
  },
  completedStatus: {
    color: "#008000",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  dotLine: {
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#28a745",
  },
  verticalLine: {
    width: 2,
    height: 20,
    backgroundColor: "#ccc",
    marginVertical: 2,
  },
  pickupText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 15,
  },
  dropoffText: {
    color: "#B30000",
    fontSize: 13,
    fontWeight: "600",
  },
});
