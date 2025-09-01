import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  
} from "react-native";
import {
  FontAwesome5,
  
} from "@expo/vector-icons";
import {useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import map from '../images/map.png';

import { Ionicons } from '@expo/vector-icons';
const DeliveryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const basePrice = 50000;
  const increment = 2000;
  const [amount, setAmount] = useState(0);

  const handleIncrease = () => {
    setAmount((prev) => prev + increment);
  };

  const handleDecrease = () => {
    if (amount > 0) {
      setAmount((prev) => prev - increment);
    }
  };

  const [stops, setStops] = useState([
    { type: "pickup", location: "" },
    { type: "drop", location: "" },
  ]);

  const addStop = () => {
    setStops([...stops, { type: "drop", location: "" }]);
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
  const tripData = [{
      id: '1',
      price: 'Rs. 5000',
      vehicle: 'Van - 500 kg',
      distance: '192 Mi',
      deadhead: '5 mi',
      pickup: 'New Baneshwor',
      pickupTime: 'Jan 29, 14.30',
      dropoff: 'Bhairahawa Customs',
      dropoffTime: 'Jan 29, 18.00',
    },
  ];
  const CommodityData = [
    {
      id: '1',
      title: 'Traller',
      vehicleName: 'Van',
    },
    {
      id: '2',
      title: 'Commodity',
      vehicleName: 'Dry Foods',
    },
    {
      id: '3',
      title: 'Packaging type',
      vehicleName: '40 Pallets',
    },
    {
      id: '4',
      title: 'Weight',
      vehicleName: '42,000 lbs',
    },
  ];
  const LoadData = [
    {
      id: '1',
      title: 'Distance',
      vehicleName: '200 mi',
    },
    {
      id: '2',
      title: 'Deadhead',
      vehicleName: '6 mi',
    },
    {
      id: '3',
      title: 'Rate per Mile',
      vehicleName: 'Rs. 300 / mi',
    },
    {
      id: '4',
      title: 'Load ID#',
      vehicleName: '123456789',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar title={"Delivery Details"}/>
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginTop: 10 }}>
          <Image source={map} style={styles.mapImage} />
        </View>
        {tripData.map((item) => (
          <View key={item.id} style={styles.tripContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'start' }}>
              {/* Left Route Dots */}
              <View style={styles.routeDots}>
                <View style={styles.routeLine} />
                <View style={styles.routeDot} />
                <View style={styles.routeLineLong} />
                <View style={styles.routeDot} />
              </View>

              {/* Trip Details */}
              <View style={styles.detailsColumn}>
                {/* Pickup */}
                <TouchableOpacity onPress={() => navigation.navigate('pickup')}>
                  <View style={styles.pointRow}>
                    <View style={styles.pointText}>
                      <Text style={styles.pointLabel}>Pickup</Text>
                      <Text style={styles.pointTime}>{item.pickupTime}</Text>
                      <Text style={styles.pointLocation}>{item.pickup}</Text>
                    </View>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={24}
                      color="#bbb"
                    />
                  </View>
                </TouchableOpacity>

                {/* Delivery */}
                <TouchableOpacity onPress={() => navigation.navigate('delivery')}>
                  <View style={styles.pointRow}>
                    <View style={styles.pointText}>
                      <Text style={[styles.pointLabel, { marginTop: 10 }]}>
                        Delivery
                      </Text>
                      <Text style={styles.pointTime}>{item.dropoffTime}</Text>
                      <Text style={styles.pointLocation}>{item.dropoff}</Text>
                    </View>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={24}
                      color="#bbb"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.headerInfo}>
          <Text style={styles.TitileText}>Commodity</Text>
        </View>
          {Array.from({ length: Math.ceil(CommodityData.length / 2) }).map((_, rowIndex) => (
              <View
              key={rowIndex}
              style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
              }}
              >
              {[0, 1].map((colIndex) => {
                  const itemIndex = rowIndex * 2 + colIndex;
                  const item = CommodityData[itemIndex];
                  if (!item) return <View style={{ flex: 1 }} key={colIndex} />;
                  return (
                  <View key={item.id} style={{ flex: 1, marginRight: colIndex === 0 ? 10 : 0 }}>
                      <Text style={styles.pointLabel}>{item.title}</Text>
                      <Text style={[styles.pointsubLabel, { color: '#B30000' }]}>
                      {item.vehicleName}
                      </Text>
                  </View>
                  );
              })}
              </View>
          ))}
          <View style={styles.headerInfo}>
          <Text style={styles.TitileText}>Load</Text>
          </View>
          <View >
          {Array.from({ length: Math.ceil(LoadData.length / 2) }).map((_, rowIndex) => (
              <View
              key={rowIndex}
              style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
              }}
              >
              {[0, 1].map((colIndex) => {
                  const itemIndex = rowIndex * 2 + colIndex;
                  const item = LoadData[itemIndex];
                  if (!item) return <View style={{ flex: 1 }} key={colIndex} />;
                  return (
                  <View key={item.id} style={{ flex: 1, marginRight: colIndex === 0 ? 10 : 0 }}>
                      <Text style={styles.pointLabel}>{item.title}</Text>
                      <Text style={[styles.pointsubLabel, { color: '#B30000' }]}>
                      {item.vehicleName}
                      </Text>
                  </View>
                  );
              })}
              </View>
          ))}
        </View>
        <View style={styles.PriceInfo}>
          <Text style={styles.TitileEstimated}>Estimated Price</Text>
          <View style={styles.controls}>
            <TouchableOpacity onPress={handleDecrease} style={styles.button}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.priceText}>Rs. {basePrice + amount}</Text>

            <TouchableOpacity onPress={handleIncrease} style={styles.button}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
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
          Prices are subject to change based on the actual trip route,
          locations, or additional services
        </Text>
        <View style={styles.footer}>
          <Text style={styles.estimatedLabel}>Estimated Price</Text>
          <Text style={styles.estimatedPrice}>Rs. {basePrice + amount}</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Post</Text>
        </Pressable>
      </View>
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
  amountText: {
    fontSize: 20,
    fontWeight: '600',
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
});

export default DeliveryDetails;
