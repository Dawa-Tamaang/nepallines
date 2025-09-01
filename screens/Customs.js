import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

// Import your local images
import bharirahawaCustoms from "../images/bhairahawa.png";
import nepalgungCustoms from "../images/nepalgunj.png";
import birgungCustoms from "../images/birgunj.png";
import biratnagarCustoms from "../images/Biratnagar.png";
import mechiCustoms from "../images/mechi.png";
import truck from "../images/delivery-truck.png";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";
const Customs = () => {
  const navigation = useNavigation();
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
      name: "Bharirahawa Customs",
      image: bharirahawaCustoms,
    },
    {
      id: "1",
      name: "Nepalgung Customs",
      image: nepalgungCustoms,
    },
    {
      id: "2",
      name: "Birgung Customs",
      image: birgungCustoms,
    },
    {
      id: "3",
      name: "Biratnagar costums",
      image: biratnagarCustoms,
    },
    {
      id: "4",
      name: "Mechi costums",
      image: mechiCustoms,
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
        style={{ marginTop: 4, marginLeft: '52%', width: 80, height: 40 }}
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
          style={{ height: "70%", width: '23%', borderRadius: 12,marginLeft:95 }}
        ></LinearGradient>
        <LinearGradient
        colors={["#003893","#1E90FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "70%",  width: '23%', borderRadius: 12 }}
      ></LinearGradient>

        <LinearGradient
          colors={["#003893","#1E90FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: "70%",  width: '23%', borderRadius: 12 }}
        ></LinearGradient>

        <LinearGradient
          colors={["#B8E2F6", "#B8E2F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: "70%",  width: '23%', borderRadius: 12 }}
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
        <Text style={{ fontSize: 12, fontFamily:'poppinsBold'}}>Customs</Text>
        <Text style={{ fontSize: 8,fontFamily:'poppinsMedium' }}>Select your prefer Costums</Text>
      </View>
      <FlatList
        data={chunkedData}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: 20,
            }}
          >
            {item.map((itemData) => (
              <View key={itemData.id} style={{ marginHorizontal: 10 }}>
                <Pressable
                  onPress={() => navigation.navigate("destination")}
                  style={{ borderRadius: 5, overflow: "hidden" }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      borderRadius: 8,
                      margin: 5,
                      borderColor:'lightgrey',
                      height:140,width:140
                    }}
                  >
                    {/* Use local images as source */}
                    <Image
                      source={itemData.image}
                      style={{ width: 100, height: 100 }}
                    />
                    <Text style={{ textAlign: "center", marginTop: 5 ,fontFamily:'poppinsMedium',fontSize:8}}>
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

export default Customs;
