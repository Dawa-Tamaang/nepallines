import { StyleSheet,SafeAreaView,FlatList, Text, View,TouchableOpacity, Image } from 'react-native'
import TopBar from '../components/TopBar';
import { useNavigation } from '@react-navigation/native';
const BookingRequestPagePage = () => {
  const navigation = useNavigation();
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
  const renderItem = ({ item }) => (
    <View style={styles.tripContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>{item.vehicle}</Text>
          <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>{item.distance}</Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 8, marginBottom: 5, fontFamily: "poppinsBold" }}>{item.deadhead}</Text>
          <View style={{ height: 12, width: 2, backgroundColor: "black" }} />
          <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: "#28a745", margin: 2 }} />
          <View style={{ height: 46, width: 2, backgroundColor: "black" }} />
          <View style={{ height: 10, width: 10, backgroundColor: "#B30000", margin: 2 }} />
        </View>

        <View style={{ flexDirection: "column", marginLeft: 16 }}>
          <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", marginTop: 8 }}>{item.pickup}</Text>
          <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>{item.pickupTime}</Text>
          <Text style={{ fontSize: 14, fontFamily: "poppinsMedium", marginTop: 21 }}>{item.dropoff}</Text>
          <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>{item.dropoffTime}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
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
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TopBar title={'Booking Requests'} />
      <FlatList
        data={tripData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.sectionContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default BookingRequestPagePage

const styles = StyleSheet.create({
  
  sectionContainer: {
    paddingTop: 20,
    paddingbottom: 20,
  },
  tripContainer: {
    backgroundColor: "white",
    padding: 15,
    borderColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
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
})