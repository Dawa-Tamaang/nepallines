import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import { useNavigation } from "@react-navigation/native";

const ContactDetails = () => {
  const navigation = useNavigation();  

  const handleNavigateToDelivery = () => {
    navigation.navigate("DeliveryDetails");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* This component displays the top bar of the screen */}
      <TopBar title={"Contact Details"} />
      {/* This component displays the content of the screen */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Pickup Location */}
        <View style={styles.section}>
          {/* This component displays the label for the pickup location */}
          <Text style={styles.label}>
            <MaterialIcons name="circle" size={12} color="#00b300" /> Pickup
            Location
          </Text>
          <Text style={styles.subText}>
            Jadibui Indreni Pvt.Ltd, Araniko Highway, Kathmandu
          </Text>

          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Enter phone number" />

          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.input} placeholder="Enter name" />

          <Text style={styles.inputLabel}>Remarks</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Any specific instructions"
            multiline
          />
        </View>

        {/* Drop-Off Location */}
        <View style={styles.section}>
          <Text style={styles.label}>
            <MaterialIcons name="circle" size={12} color="#B30000" /> Drop-Off
            Location
          </Text>
          <Text style={styles.subText}>
            New Baneshwor, Sudidhanagar Marg, Subidhanagar
          </Text>

          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Enter phone number" />

          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.input} placeholder="Enter name" />

          <Text style={styles.inputLabel}>Remarks</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Any specific instructions"
            multiline
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.button} onPress={handleNavigateToDelivery}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepText: {
    fontSize: 16,
    color: "#6B7280",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 10,
  },
  inputLabel: {
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 5,
  },
  radio: {
    marginRight: 6,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
