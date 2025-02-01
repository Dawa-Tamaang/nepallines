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

const TruckKyc = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  // Sample truck data, replace with your actual data
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

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ margin: 10, flexDirection: "row" ,borderBottomWidth:1,borderBlockColor:'lightgray',height:50,margin:10}}>
          <Ionicons name="arrow-back" size={24} color="#B30000"  style={{ marginLeft:10,marginTop:10}}/>

          <Text
            style={{
              fontFamily: "poppinsBold",
              color: "#B30000",
              fontSize: 12,
              marginLeft: 10,
              marginTop:10
            }}
          >
            Kyc
          </Text>
        </View>
        <View style={styles.container}>
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
              <View style={styles.truckImageContainer}>
                <Image source={item.image} style={styles.truckImage} />
                <Text style={{margin:5,fontFamily:'poppinsMedium',marginBottom:-1,fontSize:8}}>{item.filename}</Text>
              </View>
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
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  
  },
  heading: {
    marginHorizontal: 20,
    fontFamily: "poppinsBold",
    fontSize: 12,
    color: "#B30000",
    marginBottom: 20,
    marginTop: 30,
  },
  label: {
    marginLeft: 20,
    fontFamily: "poppinsMedium",
    fontSize: 10,
   
    marginTop: 20,
  },
  input: {
    width: "90%",
    borderBottomWidth: 1,
    marginLeft: 20,
    marginTop: -5,
    borderColor: "lightgray",
    
    fontSize:12
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
    fontSize: 10,
    textDecorationLine: "underline",
  },
});

export default TruckKyc;
