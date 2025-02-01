import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Card } from "react-native-shadow-cards";

const Services = () => {
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  const list = [
    {
      id: "0",
      image: require("../images/custom.png"),
      name: "Custom",
      price: "Clerance",
    },
    {
      id: "1",
      image: require("../images/insurence.png"),
      name: "RoadWay",
      price: "Insurance",
    },
    {
      id: "2",
      image: require("../images/courier.png"),
      name: "Document",

      price: "Counter",
    },
    {
      id: "3",
      image: require("../images/custom.png"),
      name: "Document",
      price: "Delivery",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Card
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          
          borderBottomWidth: 2,
          borderColor: "lightgrey",
          height: 60,
          width: "100%",
          shadowColor: "#000",
          alignItems: "center",
          borderRadius:12,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}
      >
        <AntDesign
          onPress={() => navigation.navigate("Main")}
          name="arrowleft"
          size={24}
          color="black"
          style={{marginLeft:10}}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 14,
            fontFamily: "poppinsBold",
            color: "#B30000",
            
          }}
        >
          Services
        </Text>
      </Card>
      <Card
        style={{
          height: 120,
          width: "95%",
          backgroundColor: "#d4ebf2",
          justifyContent: "center",
          marginTop:20,
          
          borderRadius: 12,
          shadowColor: "#000",
          alignSelf: "center",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}
      >
        <Text style={{ fontSize: 12, margin: 10, fontFamily: "poppinsBold" }}>
          Port Registration
        </Text>
        <Text
          style={{
            fontSize: 8,
            marginLeft: 10,
            color: "#B30000",
            fontFamily: "poppinsMedium",
          }}
        >
          Get your Registration done in few clicks with
        </Text>
        <Text
          style={{
            fontSize: 8,
            marginLeft: 10,
            color: "#B30000",
            fontFamily: "poppinsMedium",
          }}
        >
          the help of our exprets
        </Text>
      </Card>

      <FlatList
        style={{ marginTop: -550 }}
        data={list}
        scrollEnabled={false}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              style={{
                
              
                marginTop: 70,
             
                
                borderRadius: 8,
                alignSelf: "center",
                margin:10
               
                
              }}
            >
              <View
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: "#d4ebf2",
                  marginTop: 120,
                  justifyContent: "center",
                  
                  borderRadius: 12,
                  margin:1
                }}
              >
                <Image
                  style={{ width: 60, height: 50, resizeMode: "contain" }}
                  source={item.image} // Change here
                />
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 8,
                  fontFamily: "poppinsMedium",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 8,
                  fontFamily: "poppinsMedium",
                  marginTop: -5,
                }}
              >
                {item.price}
              </Text>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({});
