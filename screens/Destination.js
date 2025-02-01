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
import truck from "../images/delivery-truck.png";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const Destination = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }
  const list = [
    {
      id: "0",
      name: "Pokhara ",
    },
    {
      id: "1",
      name: "Chitwan",
    },
    {
      id: "2",
      name: "kathmandu",
    },
    {
      id: "3",
      name: "Hetauda",
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

  const chunkedData = chunkList(list, 3);

  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <View style={{
     
        justifyContent: "center",
        shadowColor: "#000",
        height: 50,
        width: "100%",

        borderBottomEndRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomWidth: 2,
        borderColor: "lightgrey",
      }}>
        <Text style={{ fontFamily:'poppinsBold', fontSize: 12, color: "#B30000" ,marginLeft:10}}>
          Quick Profile Setup
        </Text>
      </View>
      <LinearGradient
        colors={["white", "#cfebf9"]}
        style={{
          height: "8  %",
          width: "96%",
          marginTop: 20,
          borderRadius: 5,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          source={truck}
          style={{ marginTop: 4, marginLeft: '76%', width: 80, height: 40 }}
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
            colors={["#003893","#1E90FF"]}
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
        <Text style={{ fontSize: 12, fontFamily:'poppinsBold'}}>Delivery Destination</Text>
        <Text style={{ fontSize: 8,fontFamily:'poppinsMedium' }}>Select your delivery destination</Text>
      </View>
      <FlatList
        data={chunkedData}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            {item.map((itemData) => (
              <View
                key={itemData.id}
                style={{ margin: 5, width: 100, height: 50 }}
              >
                <Pressable
                  onPress={() => navigation.navigate("created")}
                  style={{ borderRadius: 5, overflow: "hidden", flex: 1 }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      borderRadius: 8,
                      margin: 2,
                      flex: 1,
                      justifyContent: "center",
                      borderColor:'lightgray',
                      height:'100',
                      width:95
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                       
                        fontSize: 10,
                        fontFamily:'poppinsMedium'
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

export default Destination;

const styles = StyleSheet.create({});
