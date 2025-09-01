import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios"; 
import TopBar from "../components/TopBar";
import InputField from "../components/InputField";
const TruckDetailsPage = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const [truckData, setTruckData] = useState([
    { id: "1", image: require("../images/uploadfile.png"), filename: "blueBook" },
    { id: "2", image: require("../images/uploadfile.png"), filename: "license" },
    { id: "3", image: require("../images/uploadfile.png"), filename: "insurance" },
  ]);

  const [fullTruckNumber, setTruckNumber] = useState("");
  const [city, setCity] = useState("");
  const [dfullname, setDfullname] = useState("");
  const [numColumns, setNumColumns] = useState(3);
  const [dphonenumber, setDphonenumber] = useState("");
  

  const handleImageUpload = async (item) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Camera roll access is required!");
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled && result.assets?.length > 0) {
      const imageUri = result.assets[0].uri;
      const formData = new FormData();
      formData.append("file", {
        uri: imageUri,
        name: "photo.jpg",
        type: "image/jpeg",
      });
  
      try {
        const response = await axios.post("https://your-server.com/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        setTruckData(truckData.map(truck => 
          truck.id === item.id ? { ...truck, image: { uri: response.data.imageUrl } } : truck
        ));
      } catch (error) {
        Alert.alert("Upload Failed", "There was an error uploading the image. Please try again.");
        console.error("Upload error:", error);
      }
    }
  };

  if (!loaded) return null;

  return (
    
      <View style={{ flex: 1,backgroundColor: "#fff" }}>
        <TopBar title={'Truck Details'}/>
        <View style={styles.formContainer}>
          <InputField label="Truck Number" value={fullTruckNumber} onChangeText={setTruckNumber} />
          <InputField label="Current City" value={city} onChangeText={setCity} />
          <InputField label="Driver Full Name" value={dfullname} onChangeText={setDfullname} />
          <InputField label="Driver Phone Number" value={dphonenumber} onChangeText={setDphonenumber} />
          <Text style={styles.heading}>Upload Files</Text>
          <FlatList
            data={truckData}
            numColumns={numColumns}
            contentContainerStyle={styles.truckList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleImageUpload(item)}>
                <View style={styles.truckImageContainer}>
                  <Image source={item.image} style={styles.truckImage} />
                  <Text style={styles.imageLabel}>{item.filename}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />

          <Pressable onPress={() => navigation.navigate("truckmain")} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
        
      </View>
  );
};


const styles = StyleSheet.create({
  header: {
    position: "absolute",
    paddingTop: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
    marginLeft: 15,
  },
  
  formContainer: { padding: 20 },
  heading: { marginHorizontal: 10, fontFamily: "poppinsBold", fontSize: 10, color: "#B30000", marginVertical: 20 },
  label: { color: "#B30000", fontFamily: "poppinsMedium", fontSize: 12, marginBottom: 4 },
  input: { height: 40, paddingHorizontal: 10, fontSize: 14, width: "90%", borderRadius: 5, borderColor: "lightgray", borderWidth: 1 },
  truckList: { paddingHorizontal: 20, paddingBottom: 20 },
  truckImageContainer: { width: 80, height: 100, borderWidth: 1, borderColor: "lightgray", justifyContent: "center", alignItems: "center", margin: 5, borderRadius: 9 },
  truckImage: { width: 50, height: 50 }, 
  imageLabel: { margin: 5, fontFamily: "poppinsMedium", fontSize: 8 },
  nextButton: { height: 50, width: "90%", backgroundColor: "#B30000", borderRadius: 9, justifyContent: "center", alignItems: "center", alignSelf: "center" },
  nextButtonText: { fontFamily: "poppinsBold", fontSize: 14, color: "white" },
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 4,
  },
  switchButton: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  },
});

export default TruckDetailsPage;