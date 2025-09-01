import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import TopBar from "../components/TopBar";

const SetLocation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { bottom } = useSafeAreaInsets();

  const [stops, setStops] = useState([
    { type: "pickup", location: "" },
    { type: "drop", location: "" },
  ]);

  const addStop = () => {
    setStops([...stops, { type: "drop", location: "" }]);
  };

  const handleNextPress = () => {
    navigation.navigate("SetMap");
  };

  useFocusEffect(
    React.useCallback(() => {
      const { selectedLocation, stopIndex } = route.params || {};
      if (selectedLocation && typeof stopIndex === "number") {
        const updatedStops = [...stops];
        updatedStops[stopIndex].location = selectedLocation;
        setStops(updatedStops);
      }
    }, [route.params])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
        >
          <TopBar title={"Set Location"} />

          {/* Locations */}
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.stopsContainer}>
              <Text  style={{ fontFamily: "poppinsMedium", fontSize: 14, marginBottom: 10 }}>Where To Drop?</Text>
              {stops.map((stop, index) => (
                <View key={index} style={styles.stopItem}>
                  <View style={styles.stopIndicator}>
                    <MaterialIcons
                      name="circle"
                      size={12}
                      color={
                        index === 0
                          ? "#00b300"
                          : index === stops.length - 1
                          ? "#B30000"
                          : "#ff9800"
                      }
                    />
                    {index !== stops.length - 1 && (
                      <View style={styles.verticalLine} />
                    )}
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.stopLabel}>
                      {stop.type === "pickup"
                        ? "Pickup Location"
                        : "Drop-off Location"}
                    </Text>

                    <Pressable
                      style={[styles.input, { justifyContent: "center" }]}
                      onPress={() =>
                        navigation.navigate("SearchScreen", {
                          stopIndex: index,
                          stopType: stop.type,
                        })
                      }
                    >
                      <Text
                        style={{
                          fontFamily: "poppinsLight",
                          fontSize: 12,
                          color: stop.location ? "#000" : "#B3B3B3",
                        }}
                      >
                        {stop.location ||
                          `Enter ${stop.type === "pickup" ? "pickup" : "drop-off"} location`}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>

            {/* Map & Current Location Buttons */}
            <View style={styles.mapOptionsContainer}>
              <Pressable style={styles.mapButton}>
                <MaterialIcons name="map" size={24} color="white" />
                <Text style={styles.mapButtonText}>Set on Map</Text>
              </Pressable>
              <Pressable style={styles.mapButton}>
                <MaterialIcons name="my-location" size={24} color="white" />
                <Text style={styles.mapButtonText}>Current Location</Text>
              </Pressable>
            </View>
          </ScrollView>

          {/* Bottom Buttons */}
          <View style={[styles.bottomButtons, { paddingBottom: bottom || 10 }]}>
            <Pressable style={styles.addStopButton} onPress={addStop}>
              <Text style={styles.addStopText}>+ Add Stop</Text>
            </Pressable>
            <Pressable style={styles.nextButton} onPress={handleNextPress}>
              <Text style={styles.nextButtonText}>Next</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SetLocation;

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
  stopItem: {
    flexDirection: "row",
    marginBottom: 15,
  },
  stopIndicator: {
    alignItems: "center",
    marginRight: 12,
  },
  verticalLine: {
    width: 2,
    height: 40,
    backgroundColor: "#ccc",
    marginTop: 5,
  },
  stopLabel: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
    color: "#555",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F9F9F9",
  },
  mapOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
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
  bottomButtons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    elevation: 8,
  },
  addStopButton: {
    backgroundColor: "#f3f3f3",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addStopText: {
    color: "#005AA7",
    fontFamily: "poppinsMedium",
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: "#005AA7",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "white",
    fontFamily: "poppinsMedium",
    fontSize: 14,
  },
});
