import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import TopBar from "../components/TopBar";

const dummyLocations = [
  "Kathmandu Bus Park",
  "Thamel",
  "Patan Durbar Square",
  "Pokhara Lakeside",
  "Chitwan National Park",
  "Itahari Chowk",
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const stopIndex = route.params?.stopIndex;
  const stopType = route.params?.stopType; // 'pickup' or 'dropoff'

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = dummyLocations.filter((location) =>
      location.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSelectLocation = (locationName) => {
    navigation.navigate("SetLocation", {
      selectedLocation: locationName,
      stopIndex,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <TopBar title={"Search Location"} />

      <View style={{ marginTop: 10 }}>
        <View style={styles.stopsContainer}>
          <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", color: stopType === "pickup" ? "#005AA7" : "#D97706" }}>
            {stopType === "pickup" ? "Pickup Location" : "Drop-off Location"}
          </Text>

          <TextInput
            placeholder={`Enter ${stopType === "pickup" ? "pickup" : "drop-off"} location`}
            value={query}
            onChangeText={handleSearch}
            style={styles.input}
          />
        </View>

        
      </View>

      <View style={styles.mapOptionsContainer}>
        <Pressable
          style={styles.mapButton}
          onPress={() => handleSelectLocation("Set on Map Location")}
        >
          <MaterialIcons name="map" size={24} color="white" />
          <Text style={styles.mapButtonText}>Set on Map</Text>
        </Pressable>

        <Pressable
          style={styles.mapButton}
          onPress={() => handleSelectLocation("Current Device Location")}
        >
          <MaterialIcons name="my-location" size={24} color="white" />
          <Text style={styles.mapButtonText}>Current Location</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 10 }}>
        <FlatList
          data={results}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              style={styles.resultItem}
              onPress={() => handleSelectLocation(item)}
            >
              <Text style={{ fontFamily: "poppinsRegular", fontSize: 14 }}>
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  stopsContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  stopLabel: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
    color: "#555",
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    fontFamily: "poppinsLight",
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  mapOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#005AA7",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  mapButtonText: {
    color: "white",
    marginLeft: 8,
    fontFamily: "poppinsMedium",
  },
});
