import { StyleSheet,SafeAreaView,TouchableOpacity, Text, View,ScrollView,Platform, } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ChatList from "../components/ChatList";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TopBar from '../components/TopBar';

const TruckInbox = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Notification");
  const deliveryHistory = [
    { date: "3 June 2024, 05:09 PM", amount: "Rs. 10,000",vtype: "Container", status: "Not Start", fromwhere: "Kathmandu", towhere: "Pokhara" },
    { date: "2 June 2024, 03:15 PM", amount: "Rs. 8,500",vtype: "Truck", status: "Not Start", fromwhere: "Bhairahawa", towhere: "Kathmandu"  },
  ];

  const ridesHistory = [
    { date: "1 June 2024, 10:00 AM", details: "Ride to Kathmandu" },
    { date: "31 May 2024, 08:30 AM", details: "Ride to Pokhara" },
  ];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1}}>
          <TopBar title={'Inbox'}/>
          <View>
            <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => setSelectedTab("Notification")} style={styles.tab}>
                <Text style={[styles.tabText, selectedTab === "Notification" && styles.activeTabText]}>Notification</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSelectedTab("Messages")} style={styles.tab}>
                <Text style={[styles.tabText, selectedTab === "Messages" && styles.activeTabText]}>Messages</Text>
              </TouchableOpacity>
            </View>

            {/* Active Indicator at the Bottom */}
            <View style={[styles.activeIndicator, selectedTab === "Notification" ? styles.activeLeft : styles.activeRight]} />
          </View>
          <View style={styles.sectionContainer}>
            {selectedTab === "Notification" ? (
              deliveryHistory.map((item, index) => (
                
                <View key={index} style={styles.section}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.sectionText}>{item.date}</Text>
                    <Text style={{ color: "#B30000", fontSize: 12, fontWeight: "800" }}>{item.amount}</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{fontSize: 10, fontWeight: "500", color: "#000000"}}>{item.vtype}</Text>
                    <Text style={{ color: "#B30000", fontSize: 10, fontWeight: "500" }}>{item.status}</Text>
                  </View>
                  <View style={{ height: 2, width: "100%", backgroundColor: "#E0E0E0", marginVertical: 10 }} />
                  <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.sectionText}>{item.fromwhere}</Text>
                    <Text style={{ color: "#B30000", fontSize: 12, fontWeight: "800" }}>{item.towhere}</Text>
                  </View>
                </View>
              ))
            ) : (
              ridesHistory.map((item, index) => (
                <ChatList key={index}/>
              ))
            )}
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default TruckInbox

const styles = StyleSheet.create({
  header: { 
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop:30,
    paddingVertical: 10,
    borderBottomEndRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  backButton: {
    padding: 10,
    borderRadius: 20,
    
  },
  headerText: { 
    fontFamily: "poppinsBold", 
    fontSize: 16, 
    color: "#B30000", 
    marginLeft: 15 
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9d0d2",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    position: "relative",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  activeTabText: {
    color: "#000000",
    fontWeight: "bold",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    width: "50%",
    backgroundColor: "#B30000",
  },
  activeLeft: {
    left: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  activeRight: {
    right: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionText: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "800",
  },
})