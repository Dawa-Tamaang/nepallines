import {
  FlatList,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import truckOwnerIcon from "../images/1.png";
import chaIcon from "../images/2.png";
import forwarderIcon from "../images/3.png";
import importerExporterIcon from "../images/4.png";
import truck from "../images/delivery-truck.png";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";

const BusinessTypeScreen = () => {
  
  const navigation = useNavigation();
 
  const {top} = useSafeAreaInsets();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  

  if (!loaded) {
    return null; 
  }
  

  const list = [
    {
      id: "0",
      name: "Truck Owner",
      image: truckOwnerIcon,
      route: "truckpage", 
    },
    {
      id: "1",
      name: "CHA",
      image: chaIcon,
      route: "sign", 
    },
    {
      id: "2",
      name: "Forwarder",
      image: forwarderIcon,
      route: "sign", 
    },
    {
      id: "3",
      name: "Importer/Exporter",
      image: importerExporterIcon,
      route: "sign", 
    },
  ];

  const chunkList = (list, chunkSize) => {
    const chunkedArr = [];
    let i = 0;
    while (i < list.length) {
      chunkedArr.push(list.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return chunkedArr;
  };

  const chunkedData = chunkList(list, 2);

  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <TopBar title={"Quick Profile Setup"}/>
      <LinearGradient
        colors={["white", "#cfebf9"]}
        style={{
          height: "8%",
          width: "100%",
          borderRadius: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={truck}
          style={{ marginTop: 4, marginLeft: '4%', width: 80, height: 40 }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            gap: 5,
            alignItems: "center",
            alignSelf:"center"
          }}
        >
          <LinearGradient
            colors={["#003893","#1E90FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: "70%", width: "22%", borderRadius: 12,marginLeft:95 }}
          ></LinearGradient>
          <LinearGradient
          colors={["#B8E2F6", "#B8E2F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: "70%", width: "22%", borderRadius: 12 }}
        ></LinearGradient>

          <LinearGradient
            colors={["#B8E2F6", "#B8E2F6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: "70%", width: "22%", borderRadius: 12 }}
          ></LinearGradient>

          <LinearGradient
            colors={["#B8E2F6", "#B8E2F6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: "70%", width: "22%", borderRadius: 12 }}
          ></LinearGradient>

          <View
            style={{
              height: 10,
              width: 84,
            }}
          />
        </View>
      </LinearGradient>

      <View style={{ marginTop: 20, marginLeft: 15 }}>
        <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
          Business Type
        </Text>
        <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>
          Select nature of your business
        </Text>
      </View>
      <FlatList
        data={chunkedData}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: 10,
            }}
          >
            {item.map((itemData) => (
              <View key={itemData.id} style={{ marginHorizontal: 8 }}>
                <View
                  style={{
                    position: "absolute",
                    top: -30,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FAD9E1", // light pink background
                      width: 0,
                      height: 0,
                      borderRadius: 75, // border radius of 5
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </View>
                <Pressable
                  onPress={() => navigation.navigate(itemData.route)}
                  style={{
                    borderRadius: 9,
                    overflow: "hidden",
                    width: 170,
                    height: 170,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      borderRadius: 5,
                      margin: 10,
                      borderColor: "lightgrey",
                    }}
                  >
                    {/* Use local images as source */}
                    <Image
                      source={itemData.image}
                      style={{ width: 130, height: 130 }}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 1,
                        marginBottom: 5,
                        fontFamily: "poppinsMedium",
                        fontSize: 8,
                      }}
                    >
                      {itemData.name}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default BusinessTypeScreen;
