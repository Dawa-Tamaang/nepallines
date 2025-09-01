import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const navigation = useNavigation();

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;

  const notificationData = [
    {
      id: "1",
      title: "New Order Received",
      description: "You have a new order from Kathmandu to Pokhara.",
      date: "3 June 2024, 05:09 PM",
      status: "Unread",
      type: "booking",
    },
    {
      id: "2",
      title: "Order Update",
      description: "Your order from Bhairahawa to Kathmandu has been updated.",
      date: "2 June 2024, 03:15 PM",
      status: "Read",
      type: "update",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TopBar title="Notifications" showBackIcon={true} />

      <ScrollView style={styles.sectionContainer}>
        {notificationData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.notificationCard,
              item.status === "Unread" && styles.unreadCard,
            ]}
            onPress={() =>
              navigation.navigate("MyOrderDetails", { order: item })
            }
          >
            <View style={styles.iconCircle}>
              <Text style={{ fontSize: 16 }}>📦</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.notificationTitle,
                  item.status === "Unread" && { fontWeight: "bold" },
                ]}
              >
                {item.title}
              </Text>
              <Text style={styles.notificationDescription}>
                {item.description}
              </Text>
              <Text style={styles.notificationDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    gap: 12,
  },
  unreadCard: {
    backgroundColor: "#e6f0ff",
    borderLeftColor: "#2563eb",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 10,
  },
  notificationTitle: {
    fontSize: 14,
    color: "#000",
    marginBottom: 2,
    fontFamily: "poppinsMedium",
  },
  notificationDescription: {
    fontSize: 12,
    color: "#444",
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 10,
    color: "#999",
  },
});
