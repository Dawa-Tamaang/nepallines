import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  Modal,
  Image,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import map from "../images/map.png";
const SuccessPopup = ({ visible, onClose }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.overlay}>
      <View style={styles.popupContainer}>
        <Text style={styles.popupTitle}>🎉 Success!</Text>
        <Text style={styles.popupMessage}>Your order has been posted successfully.</Text>
        <Pressable style={styles.okButton} onPress={onClose}>
          <Text style={styles.okText}>OK</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);
const ConfirmScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [popupVisible, setPopupVisible] = useState(false);
  const {
    stops,
    weight,
    unit,
    selectedDate,
    selectedTime,
    dropoffDate,
    dropoffTime,
  } = route.params || {};
   const handlePopupClose = () => {
    setPopupVisible(false);
    navigation.navigate("home"); // Replace "home" with your actual home screen route name
  };
  const [localStops, setLocalStops] = useState(stops);
  const handlePost = () => {
    setPopupVisible(true);
  };
  useFocusEffect(
    useCallback(() => {
      const { selectedLocation, stopIndex } = route.params || {};
      if (selectedLocation && typeof stopIndex === "number") {
        const updatedStops = [...localStops];
        updatedStops[stopIndex].location = selectedLocation;
        setLocalStops(updatedStops);
      }
    }, [route.params])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar title={"Order Confirmation"} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={map} style={styles.mapImage} />

        
          <View style={styles.tripContainer}>
            <View style={{ flexDirection: "row", alignItems: "start" }}>
              {/* Dots */}
              <View style={styles.routeDots}>
                <View style={styles.routeLine} />
                <View style={styles.routeDot} />
                <View style={styles.routeLineLong} />
                <View style={styles.routeDot} />
              </View>

              {/* Trip Details */}
              <View style={styles.detailsColumn}>
                <TouchableOpacity onPress={() => navigation.navigate("pickup")}>
                  <View style={styles.pointRow}>
                    <View style={styles.pointText}>
                      <Text style={styles.pointLabel}>Pickup</Text>
                      <Text style={styles.pointLocation}>{stops[0].location}</Text>
                      <Text style={styles.pointTime}>{selectedDate?.toLocaleDateString()}, {selectedTime?.toLocaleTimeString()}</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={24} color="#bbb" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("delivery")}>
                  <View style={styles.pointRow}>
                    <View style={styles.pointText}>
                      <Text style={[styles.pointLabel, { marginTop: 10 }]}>Delivery</Text>
                      <Text style={styles.pointLocation}>{stops[1].location}</Text>
                      <Text style={styles.pointTime}>{dropoffDate?.toLocaleDateString()}, {dropoffTime?.toLocaleTimeString()}</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={24} color="#bbb" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.TitileText}>Details</Text>
          </View>
          <View style={{flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
              }} >
            <View  style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.pointLabel}>Truck Type</Text>
              <Text style={[styles.pointsubLabel, { color: '#B30000' }]}>
                Cargo Truck
              </Text>
            </View>
            <View  style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.pointLabel}>Weight</Text>
              <Text style={[styles.pointsubLabel, { color: '#B30000' }]}>
                {weight} {unit}
              </Text>
            </View>
          </View>

        


        {/* Promo Code */}
        <TouchableOpacity style={styles.item}>
          <FontAwesome5 name="tag" size={20} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.label}>Promo Code</Text>
            <Text style={styles.placeholder}>Apply for Promo Code</Text>
          </View>
          <View style={styles.checkbox} />
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Bottom Section */}
      <View style={styles.fixedBottom}>
        <Text style={styles.infoText}>
          Prices are subject to change based on the actual trip route, locations, or additional
          services
        </Text>
        <Pressable style={styles.button} onPress={handlePost}>
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
      </View>
      <SuccessPopup visible={popupVisible} onClose={handlePopupClose} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mapImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  container: {
    padding: 12,
    paddingBottom: 180, 
    backgroundColor: "#fff",
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  PriceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  TitileText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  TitileEstimated: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#1e3a8a',
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  tripContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 20,
    marginBottom: 14,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  routeDots: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 12,
  },
  routeLine: {
    height: 10,
    width: 2,
    backgroundColor: '#000',
  },
  routeLineLong: {
    height: 63,
    width: 2,
    backgroundColor: '#000',
  },
  routeDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginVertical: 2,
  },
  detailsColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  pointRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  pointText: {
    flexDirection: 'column',
    flex: 1,
  },
  pointLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111',
  },
  pointsubLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B30000',
  },
  pointTime: {
    fontSize: 12,
    color: 'grey',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  pointLocation: {
    fontSize: 13,
    color: 'grey',
    textTransform: 'uppercase',
  },
  pointLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111',
  },
  pointLocation: {
    fontSize: 13,
    color: 'grey',
    textTransform: 'uppercase',
  },
  stepText: {
    color: "#888",
    fontWeight: "500",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
  },
  placeholder: {
    color: "#888",
    fontSize: 13,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  infoText: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  estimatedLabel: {
    fontSize: 14,
    color: "#333",
  },
  estimatedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 10,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  
   pointLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  pointTime: {
    fontSize: 12,
    color: '#999',
  },
  pointLocation: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  pointsubLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 16,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  placeholder: {
    fontSize: 12,
    color: '#777',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  infoText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  estimatedLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  estimatedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 16,
  },
  // Popup styles
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    elevation: 10,
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 10,
  },
  popupMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  okText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default ConfirmScreen;
