import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const TruckAccount = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  // Sample truck data, replace with your actual data
  const truckData = [
    { id: "1", image: require("../images/delivery-truck.png") },
    { id: "2", image: require("../images/delivery-truck.png") },
    { id: "3", image: require("../images/delivery-truck.png") },
    { id: "4", image: require("../images/delivery-truck.png") },
    { id: "5", image: require("../images/delivery-truck.png") },
  ];

  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [numColumns, setNumColumns] = useState(3);

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#B30000" }}>
        <View style={{ margin: 20, marginTop: 50 }}>
          <Text
            style={{ fontFamily: "poppinsBold", color: "white", fontSize: 12 }}
          >
            Create Account
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Fill Your Details</Text>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
            />
          </View>
          <View>
            <Text style={styles.label}>PAN</Text>
            <TextInput
              style={styles.input}
              value={pan}
              onChangeText={setPan}
              placeholder="Enter your PAN number"
            />
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              placeholder="Enter your city"
            />
          </View>
          <View>
            <Text style={styles.label}>Company Name</Text>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Enter your company name"
            />
          </View>
          <Text style={styles.heading}>Choose Your Truck Type</Text>
          <FlatList
            data={truckData}
            key={numColumns}
            numColumns={numColumns}
            contentContainerStyle={styles.truckList}
            renderItem={({ item }) => (
              <View style={styles.truckImageContainer}>
                <Image source={item.image} style={styles.truckImage} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.switchButton} onPress={() => setNumColumns(3)}>
              3 Trucks
            </Text>
            <Text style={{ marginHorizontal: 20, color: "white" }}>|</Text>
            <Text style={styles.switchButton} onPress={() => setNumColumns(2)}>
              2 Trucks
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("truckdetailsPage")}
            style={{
              height: 50,
              width: "90%",
              backgroundColor: "#B30000",
              borderRadius: 9,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop:10
          
            
              
            }}
          >
            <Text
              style={{
                fontFamily: "poppinsBold",
                fontSize: 12,
                color: "white",
              }}
            >
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  heading: {
    marginHorizontal: 20,
    fontFamily: "poppinsBold",
    fontSize: 12,
    color: "#B30000",
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    marginLeft: 20,
    fontFamily: "poppinsMedium",
    fontSize: 10,
    color: "Black",
    marginTop: 10,
  },
  input: {
    width: "90%",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginTop: 13,
    borderColor: "lightgray",
    fontSize:12
  },
  truckList: {
    paddingHorizontal: 40
  
  },
  truckImageContainer: {
    width: 90,
    height: 70,
    borderWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 9,
  },
  truckImage: {
    width: 75,
    height: 75,
  },
  switchButton: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default TruckAccount;
