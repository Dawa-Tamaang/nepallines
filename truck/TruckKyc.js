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
  TouchableOpacity, Alert,Platform,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
const iso = Platform.OS === "ios";
const TruckKyc = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  
  const truckData = [
    { id: "1", image: require("../images/uploadfile.png"),filename:'Pan' },
    { id: "2", image: require("../images/uploadfile.png"),filename:'Company Registration' },
    { id: "3", image: require("../images/uploadfile.png"),filename:'Tax Clerance' },
  ];

  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [numColumns, setNumColumns] = useState(3);

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

    if (!result.canceled) {
      const formData = new FormData();
      formData.append("file", {
        uri: result.assets[0].uri,
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
        console.error("Upload error:", error);
      }
    }
  };

  if (!loaded) return null;

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: "white" }}>
      <View style={{ flex: 1, paddingTop:iso?top:top+10 }}>
        <TopBar title={'KYC Details'}/>
        <View style={styles.formContainer}>
          <View style={{marginTop:10}}>
            <Text style={styles.label}>Customs Selection</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
          
            />
          </View>
          <View>
            <Text style={styles.label}>Total Vehicles</Text>
            <TextInput
              style={styles.input}
              value={pan}
              onChangeText={setPan}
             
            />
          </View>
          <View>
            <Text style={styles.label}>Vin</Text>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
            
            />
          </View>
          <View>
            <Text style={styles.label}>Company Registration</Text>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
     
            />
          </View>
          <Text style={styles.heading}>Upload Files</Text>
          <FlatList
            data={truckData}
            key={numColumns}
            numColumns={numColumns}
            contentContainerStyle={styles.truckList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleImageUpload(item)}>
                <View style={styles.truckImageContainer}>
                  <Image source={item.image} style={styles.truckImage} />
                  <Text style={{margin:5,fontFamily:'poppinsMedium',marginBottom:-1,fontSize:8}}>{item.filename}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.switchButton} onPress={() => setNumColumns(3)}>
              3 uploadfile
            </Text>
            <Text style={{ marginHorizontal: 20, color: "white" }}>|</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("truckmain")}
            style={{
              height: 50,
              width: "90%",
              backgroundColor: "#B30000",
              borderRadius: 9,
              justifyContent: "center",
              alignItems: "center",
             alignSelf:'center'
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
  formContainer: {
    padding: 20, marginTop: 30 
  },
  header: {
    position: "absolute",
    paddingTop: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
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
  heading: { marginHorizontal: 10, fontFamily: "poppinsBold", fontSize: 10, color: "#B30000", marginVertical: 20 },
  label: {
    color: "#B30000", fontFamily: "poppinsMedium", fontSize: 12, marginBottom: 4 
  },
  input: {
    height: 40, paddingHorizontal: 10, fontSize: 14, width: "90%", borderRadius: 5, borderColor: "lightgray", borderWidth: 1
  },
  truckList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  truckImageContainer: {
    width: 80, height: 100, borderWidth: 1, borderColor: "lightgray", justifyContent: "center", alignItems: "center", margin: 5, borderRadius: 9
  },
  truckImage: {
    width: 50, height: 50
  },
  switchButton: {
    color: "white",
    fontSize: 10,
    textDecorationLine: "underline",
  },
});

export default TruckKyc;
