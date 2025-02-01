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
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const TruckDetailsPage = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  // Sample truck data, replace with your actual data
  const truckData = [
    {
      id: "1",
      image: require("../images/uploadfile.png"),
      filename: "blueBook",
    },
    {
      id: "2",
      image: require("../images/uploadfile.png"),
      filename: "liscense",
    },
    {
      id: "3",
      image: require("../images/uploadfile.png"),
      filename: "insurance",
    },
  ];

  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [numColumns, setNumColumns] = useState(3);

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            margin: 20,
        
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBlockColor: "lightgray",
            borderRadius:12,
            alignItems:'center',
            height:60
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#B30000" />

          <Text
            style={{
              fontFamily: "poppinsBold",
             
              fontSize: 12,
              marginLeft: 10,
              color:'#B30000'
            }}
          >
            Truck Details
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{marginTop:20}}>
            <Text style={styles.label}>Truck Number</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
       
            />
          </View>
          <View>
            <Text style={styles.label}>Current City</Text>
            <TextInput
              style={styles.input}
              value={pan}
              onChangeText={setPan}
              
            />
          </View>
          <View>
            <Text style={styles.label}>Driver Phone Number</Text>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
          
            />
          </View>
          <View >
            <Text style={styles.label}>Select Truck Type</Text>
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
              <View style={styles.truckImageContainer}>
                <Image source={item.image} style={styles.truckImage} />
                <Text
                  style={{
               
                    margin: 5,
                    fontFamily: "poppinsMedium",
                    marginBottom: -1,
                    fontSize: 8,
                  }}
                >
                  {item.filename}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.switchButton} onPress={() => setNumColumns(3)}>
              3 uploadfile
            </Text>
            <Text style={{ marginHorizontal: 20, color: "white",fontSize:10 }}>|</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("truckkyc")}
            style={{
              height: 50,
              width: "90%",
              backgroundColor: "#B30000",
              borderRadius: 9,
              justifyContent:'center',
              alignItems:"center",
              alignSelf:"center"
            
            }}
          >
            <Text
              style={{
                fontFamily: "poppinsBold",
                fontSize: 14,
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
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    margin:5,
    marginTop:-10
  },
  heading: {
    marginHorizontal: 20,
    fontFamily: "poppinsBold",
    fontSize: 10,
    color: "#B30000",
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    marginLeft: 20,
    fontFamily: "poppinsMedium",
    fontSize: 10,
   
    marginTop: 10,
  },
  input: {
    width: "90%",
    borderBottomWidth: 1,
  alignSelf:'center',
    
 
    color: "#B30000",
    borderColor:'lightgray'
  },
  truckList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  truckImageContainer: {
    width: 110,
    height: 130,
    borderWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 9,
  },
  truckImage: {
    width: 75,
    height: 75,
  },
  switchButton: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default TruckDetailsPage;
