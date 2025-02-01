import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ActivityIndicator } from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

const TruckSchedule = () => {
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#B30000" style={styles.loader} />;
  }

  const InfoCard = ({ icon, text, iconColor }) => (
    <View style={styles.infoCardContainer}>
      {icon}
      <Text style={styles.infoCardText}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Entypo name="cross" size={20} color="#B30000" style={styles.crossIcon} />
        <Text style={styles.headerText}>Truck Schedule</Text>
      </View>

      <View style={styles.truckInfoContainer}>
        <Image
          style={styles.truckImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF6ZU8In2V-B5D1S38qRgo56ZxvPLYWWsFxTokuslSzCNwop23kt-quLnIOWEzsO8faE&usqp=CAU",
          }}
        />
        <View style={styles.truckDetailsContainer}>
          <Text style={styles.truckTitle}>Truck</Text>
          <Text style={styles.truckSubtitle}>NA 5 KHA 1990</Text>
        </View>
      </View>

      <View style={styles.scheduleContainer}>
        <Image
          style={styles.scheduleImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSARrPGBjuakzDuS1skvCK3SRLxvPVjB_7XlEDWHax4Ho9bKwcPL5cAlhWFtvfu7Y1sQ&usqp=CAU",
          }}
        />
        <View style={styles.scheduleDetailsContainer}>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDate}>2024/03/04</Text>
            <Text style={styles.scheduleLabel}>Gate Open</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDate}>2024/03/04</Text>
            <Text style={styles.scheduleLabel}>Gate Cutoff</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.timeRow}>
            <AntDesign name="clockcircleo" size={16} color="#B30000" />
            <Text style={styles.timeText}>10.00 AM</Text>
          </View>
          <View style={styles.timeRow}>
            <AntDesign name="clockcircleo" size={16} color="#B30000" />
            <Text style={styles.timeText}>10.00 AM</Text>
          </View>
        </View>
      </View>

      <View style={styles.etdContainer}>
        <Image
          style={styles.etdImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bYNRJQDl9a63tMuCQv6um0A0LPzrpZlrdkc4E5-VOiQxgHvIIU3t-ra-VWzpU7OnGK0&usqp=CAU",
          }}
        />
        <View style={styles.etdDetailsContainer}>
          <Text style={styles.etdDate}>2024/03/04</Text>
          <Text style={styles.etdLabel}>ETD</Text>
        </View>
      </View>

      <InfoCard
        icon={<MaterialIcons name="account-circle" size={24} color="green" />}
        text="Trusted by +30000 users"
      />
      <InfoCard
        icon={<FontAwesome name="user" size={24} color="green" />}
        text="Customer Support for you"
      />
      <InfoCard
        icon={<Ionicons name="call" size={24} color="green" />}
        text="24*7 customer services"
      />
    </SafeAreaView>
  );
};

export default TruckSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  crossIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
  },
  truckInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 30,
    marginTop: 10,
  },
  truckImage: {
    height: 80,
    width: 80,
    backgroundColor: "white",
  },
  truckDetailsContainer: {
    marginLeft: 20,
  },
  truckTitle: {
    fontSize: 12,
    fontFamily: "poppinsBold",
  },
  truckSubtitle: {
    fontSize: 10,
    fontFamily: "poppinsMedium",
    marginTop: -5,
  },
  scheduleContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    justifyContent: "space-around",
  },
  scheduleImage: {
    height: 50,
    width: 50,
    backgroundColor: "white",
  },
  scheduleDetailsContainer: {
    marginLeft: 10,
  },
  scheduleRow: {
    marginVertical: 5,
  },
  scheduleDate: {
    fontSize: 8,
    fontFamily: "poppinsBold",
  },
  scheduleLabel: {
    fontSize: 8,
    fontFamily: "poppinsMedium",
  },
  timeContainer: {
    marginLeft: 20,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  timeText: {
    fontSize: 10,
    color: "#B30000",
    fontFamily: "poppinsMedium",
    marginLeft: 10,
  },
  etdContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    marginVertical: 10,
  },
  etdImage: {
    height: 60,
    width: 60,
  },
  etdDetailsContainer: {
    marginLeft: 20,
  },
  etdDate: {
    fontSize: 8,
    fontFamily: "poppinsBold",
  },
  etdLabel: {
    fontSize: 8,
    fontFamily: "poppinsMedium",
  },
  infoCardContainer: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "lightblue",
    marginHorizontal: 40,
    marginVertical: 5,
    borderRadius: 4,
  },
  infoCardText: {
    fontSize: 10,
    color: "blue",
    fontFamily: "poppinsMedium",
    marginLeft: 10,
  },
});
