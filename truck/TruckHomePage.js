import { useState, useRef } from "react";
import {   SafeAreaView, 
  Pressable, 
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const TruckHomePage = () => {
  const navigation = useNavigation();
  const [isOnline, setIsOnline] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); 
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const toggleSwitch = (value) => {
  setIsOnline(value);

  if (value) {
    navigation.navigate('cityset');
  }
};

  const slideAnimation = useRef(new Animated.Value(0)).current;

  const toggleOnlineStatus = () => {
    setIsOnline((prevState) => !prevState);
    Animated.timing(slideAnimation, {
      toValue: isOnline ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleTranslateX = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], 
  });
  const tripData = [
    {
      id: "1",
      cost: "Rs. 5000",
      vehicle: "Van - 500 kg",
      distance: "192 Mi",
      deadhead: "5 mi",
      pickup: "New Baneshwor",
      pickupTime: "Jan 29, 14.30",
      dropoff: "Bharirahawa Customs",
      dropoffTime: "Jan 29, 18.00",
    },
    {
      id: "2",
      cost: "Rs. 6000",
      vehicle: "Truck - 800 kg",
      distance: "250 Mi",
      deadhead: "7 mi",
      pickup: "Patan Durbar Square",
      pickupTime: "Jan 30, 10.00",
      dropoff: "Butwal Customs",
      dropoffTime: "Jan 30, 14.30",
    },
    {
      id: "3",
      cost: "Rs. 7500",
      vehicle: "Mini Truck - 1 Ton",
      distance: "300 Mi",
      deadhead: "10 mi",
      pickup: "Thamel, Kathmandu",
      pickupTime: "Feb 01, 09.15",
      dropoff: "Birgunj Border",
      dropoffTime: "Feb 01, 13.45",
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
      <FlatList
          data={tripData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false} 
          ListHeaderComponent={
            <>
              {/* Header Section */}
              <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: "5%", flexDirection: "row", justifyContent: "space-between", }}>
                  <View style={{ flexDirection: "column", justifyContent: "flex-start", }}>
                    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                      <Text style={{ fontSize: 26, color: "#B30000", fontFamily: "poppinsBold", marginTop: 10 }}>
                        Hi,
                      </Text>
                      <Text style={{ fontSize: 24, color: "#14468d", paddingLeft: 4,  fontFamily: "poppinsBold", marginTop: 10 }}>
                        Dawa
                      </Text>
                    </View>
                    <Text style={{ fontSize: 12, color: "#14468d", fontFamily: "poppinsMedium" }}>
                      Welcome to Nepal Lines
                    </Text>
                  </View>

                  <Pressable onPress={() => navigation.navigate("notification")} style={styles.profileIcon}>
                    <Ionicons name="notifications-outline" size={25} color="white"  style={{alignItems: "center"}}/>
                    
                      <View
                        style={[
                          styles.notificationBadge,
                          { backgroundColor:  '#B30000' },
                        ]}
                      >
                        <Text style={styles.notificationText}>0</Text>
                      </View>
                    
                  </Pressable>
                </View>
                <View style={[styles.tripContainer, { marginTop: 20 }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'start' }}>
                    {/* Left Route Dots */}
                    <View style={styles.routeDots}>
                      <View style={styles.routeLine} />
                      <View style={styles.routeDotpick} />
                      <View style={styles.routeLineLong} />
                      <View style={styles.routeDotdrop} />
                      <View style={styles.routeLine} />
                    </View>
      
                    {/* Trip Details */}
                    <View style={styles.detailsColumn}>
                      {/* our location */}
                      <TouchableOpacity>
                        <View style={styles.pointRow}>
                          <View style={styles.pointText}>
                            <Text style={styles.pointLabel}>Our Location</Text>
                            <Text style={styles.pointLocation}>Kathmandu</Text>
                          </View>
                          <Switch 
                            trackColor={{ false: '#767577', true: '#2b6cba' }}
                            thumbColor={isOnline ? '#14468d' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isOnline}
                          />
                        </View>
                      </TouchableOpacity>

                      {/* Destination */}
                      <TouchableOpacity onPress={() => navigation.navigate('cityset')}>
                        <View style={styles.pointRow}>
                          <View style={styles.pointText}>
                            <Text style={[styles.pointLabel, { marginTop: 10 }]}>
                              Destination
                            </Text>
                            <Text style={styles.pointLocation}>Select Destination</Text>
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
              </View>
              <View style={[styles.listHeader, { marginTop: 20 }]}>
                <Text style={{ fontSize: 14, fontFamily: "poppinsBold", color: "#B30000" }}>
                  Available Loads
                </Text>

                <View style={styles.dayPickerContainer}>
                  <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                    style={styles.dayPicker}
                    mode="dropdown"
                  >
                    <Picker.Item label="SUN" value="Sunday" />
                    <Picker.Item label="MON" value="Monday" />
                    <Picker.Item label="TUE" value="Tuesday" />
                    <Picker.Item label="WED" value="Wednesday" />
                    <Picker.Item label="THU" value="Thursday" />
                    <Picker.Item label="FRI" value="Friday" />
                    <Picker.Item label="SAT" value="Saturday" />
                  </Picker>
                </View>
              </View>
            </>
          }
          renderItem={({ item }) => (
            <View
              style={styles.tripContainer}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>{item.vehicle}</Text>
                <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>{item.distance}</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column", alignItems: "center"}}>
                  <View style={{height: 12, width: 2, backgroundColor: "black"}}/>
                  <View style={{height: 10, width: 10, borderRadius: 10, backgroundColor: "#28a745", margin: 2}}/>
                  <View style={{height: 46, width: 2, backgroundColor: "black"}}/>
                  <View style={{height: 10, width: 10, backgroundColor: "#B30000", margin: 2}}/>
                </View>
                <View style={{flexDirection: "column", alignItems: "flex-start", marginLeft: 16}}>  
                  <View style={{flexDirection: "column", alignItems: "flex-start", marginLeft: 16}}>  
                    <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", marginTop: 8 }}>{item.pickup}</Text>
                    <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>{item.pickupTime}</Text>
                    <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", marginTop: 21 }}>{item.dropoff}</Text>
                    <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>{item.dropoffTime}</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <TouchableOpacity
                  style={styles.rightbutton}
                  onPress={() => navigation.navigate('LoadDetails')}
                >
                  <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", color: "white", textAlign: "center" }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
      />
    </SafeAreaView>
  );
};

export default TruckHomePage;

const styles = StyleSheet.create({
  headerContainer: {
    height: 300,
    width: "100%",
    paddingTop: 40,
    backgroundColor: "white",
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
  profileIcon: {
    height: 45,
    width: 45,
    backgroundColor: "lightgrey",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: "5%",
  },
  dateSliderContainer: {
    height: 150,
    width: "90%",
    backgroundColor: "#efefef",
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  listHeader: {
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortText: {
    fontSize: 12,
    color: "#14468d",
    fontFamily: "poppinsBold",

  },
  rightbutton: {
    backgroundColor: "#1e3a8a",
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  toggleContainer: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f9d0d2",
    borderRadius: 20,

  },
  dayPickerContainer: {
    borderWidth: 1,
    borderColor: '#14468d',
    borderRadius: 6,
    overflow: 'hidden',
    height: 35,
    width: 120,
    justifyContent: 'center',
  },

  dayPicker: {
    height: 60,
    fontSize: 10,
    color: '#14468d',
    fontFamily: 'poppinsBold',
  },

  statusText: {
    fontFamily: "poppinsBold",
    fontSize: 18,
  },
  toggleButton: {
    width: 50,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "lightgrey",
    padding: 2,
  },
  notificationBadge: {
    position: "absolute",
    top: 5,
    right: 7,
    backgroundColor: "#B30000",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  notificationText: {
    color: "white",
    fontSize: 10,
    fontFamily: "poppinsMedium",
    justifyContent: "center",
    alignItems: "center",
  },

  toggleInnerButton: {
    width: 22,
    height: 22,
    borderRadius: 15,
    backgroundColor: "grey",
  },
  tripContainer: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 20,
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
    height: 40,
    width: 2,
    backgroundColor: '#000',
  },
  routeDotpick: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#28a745',
    marginVertical: 2,
  },
  routeDotdrop: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#B30000',
    marginVertical: 2,
  },
  detailsColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    },
    pointRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:4,
    },
    pointText: {
        flexDirection: 'column',
        flex: 1,
    },
    pointLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: 'gray',
    },
    
    pointLocation: {
        fontSize: 13,
        color: '#14468d',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
