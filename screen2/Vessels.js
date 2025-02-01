import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Card } from "react-native-shadow-cards";

const Vessels = () => {
  const navigation = useNavigation();

  const list = [
    { id: "0", name: "Bhairahawa Customs", date: "20 Mar", days: "Wed" },
    { id: "1", name: "Nepalgunj Customs", date: "20 Mar", days: "Thu" },
    { id: "2", name: "Birgunj Customs", date: "20 Mar", days: "Wed" },
    { id: "3", name: "Mechi Customs", date: "20 Mar", days: "Wed" },
  ];

  const lists = [
    {
      id: "0",
      status: "Inventory Status",
      subject: "Subject to Availability",
      quota: "Check Full Quota",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/725/086/non_2x/delivery-truck-line-color-background-icon-free-vector.jpg",
      days: "5 days",
      direct: "Direct",
      from: "22 Mar",
      to: "27 Mar",
      price: "₹ 680000",
    },
    {
      id: "1",
      status: "Inventory Status",
      subject: "Subject to Availability",
      quota: "Check Full Quota",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/725/086/non_2x/delivery-truck-line-color-background-icon-free-vector.jpg",
      days: "5 days",
      direct: "Direct",
      from: "22 Mar",
      to: "27 Mar",
      price: "₹ 680000",
    },
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

  const renderCustomsItem = ({ item }) => (
    <Pressable style={styles.customsCard}>
      <View style={styles.customsContent}>
        <Text style={styles.customsText}>{item.name}</Text>
        <View style={styles.dateAndDayContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          <View style={styles.separator} />
          <Text style={styles.dateText}>{item.days}</Text>
        </View>
      </View>
    </Pressable>
  );

  const renderVesselItem = ({ item }) => (
    <View style={styles.vesselCardContainer}>
      <Pressable
        onPress={() => navigation.navigate("truck")}
        style={styles.vesselCard}
      >
        <View style={styles.vesselHeader}>
          <View>
            <Text style={styles.vesselStatus}>{item.status}</Text>
            <Text style={styles.vesselSubject}>{item.subject}</Text>
          </View>
          <View style={styles.quotaButton}>
            <Text style={styles.quotaText}>{item.quota}</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={styles.vesselDetailsCard}>
        <View style={styles.vesselDetailsContent}>
          <Image source={{ uri: item.image }} style={styles.vesselImage} />
          <Text style={styles.vesselFrom}>{item.from}</Text>
          <View>
            <Text style={styles.vesselDays}>{item.days}</Text>
            <Image
              source={{
                uri: "https://static.thenounproject.com/png/783874-200.png",
              }}
              style={styles.vesselArrow}
            />
            <Text style={styles.vesselDirect}>{item.direct}</Text>
          </View>
          <Text style={styles.vesselTo}>{item.to}</Text>
          <Text style={styles.vesselPrice}>{item.price}</Text>
        </View>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.headerCard}>
        <AntDesign
          onPress={() => navigation.navigate("Main")}
          name="arrowleft"
          size={24}
          color="#000000"
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>
          BHAIRAWA CUSTOMS TO KATHMANDU
        </Text>
      </Card>
      <Text style={styles.sectionTitle}>Upcoming Vessels</Text>
      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderCustomsItem}
      />
      <FlatList
        data={lists}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderVesselItem}
      />
    </SafeAreaView>
  );
};

export default Vessels;

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    borderRadius: 12,
    elevation: 11,
  },
  backIcon: { marginLeft: 10 },
  headerText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "poppinsBold",
    color: "#B30000",
  },
  sectionTitle: {
    fontSize: 12,
    margin: 10,
    fontFamily: "poppinsMedium",
  },
  customsCard: {
    height: 80,
    width: 160,
    backgroundColor: "lightpink",
    margin: 10,
    borderRadius: 12,
    justifyContent: "center",
  },
  customsContent: { alignItems: "center" },
  customsText: { fontSize: 10, fontFamily: "poppinsMedium" },
  dateAndDayContainer: { flexDirection: "row", justifyContent: "space-evenly" },
  dateText: { fontSize: 8, color: "#B30000", fontFamily: "poppinsMedium" },
  separator: { height: 14, width: 2, backgroundColor: "black", marginHorizontal: 5 },
  vesselCardContainer: { marginBottom: 10 },
  vesselCard: {
    height: 70,
    width: "95%",
    borderWidth: 1,
    borderColor: "lightgrey",
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  vesselHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  vesselStatus: { fontFamily: "poppinsMedium", fontSize: 10 },
  vesselSubject: { fontFamily: "poppinsBold", fontSize: 10 },
  quotaButton: {
    backgroundColor: "#B30000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 35,
  },
  quotaText: { color: "white", fontFamily: "poppinsMedium", fontSize: 10 },
  vesselDetailsCard: {
    height: 100,
    width: "95%",
    borderWidth: 1,
    borderColor: "lightgray",
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  vesselDetailsContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  vesselImage: { width: 80, height: 80, resizeMode: "contain" },
  vesselFrom: { fontFamily: "poppinsMedium", fontSize: 10 },
  vesselDays: { fontFamily: "poppinsMedium", fontSize: 8 },
  vesselArrow: { width: 80, height: 10 },
  vesselDirect: { fontFamily: "poppinsMedium", fontSize: 8 },
  vesselTo: { fontFamily: "poppinsMedium", fontSize: 10 },
  vesselPrice: { fontFamily: "poppinsBold", fontSize: 12 },
});
