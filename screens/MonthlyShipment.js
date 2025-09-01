import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import truck from "../images/delivery-truck.png";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";

const MonthlyShipment = () => {
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
    { id: "0", name: "0-1", image: require("../images/shipment1.png") },
    { id: "1", name: "2-5", image: require("../images/shipment2.png") },
    { id: "2", name: "6-10", image: require("../images/shipment3.png") },
    { id: "3", name: "11-15", image: require("../images/shipment4.png") },
    { id: "4", name: "16-20", image: require("../images/shipment5.png") },
    { id: "5", name: "21+", image: require("../images/shipment6.png") },
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
        style={{ marginTop: 4, marginLeft: '28%', width: 80, height: 40 }}
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
          style={{ height: "70%", width:"23%", borderRadius: 12,marginLeft:95 }}
        ></LinearGradient>
        <LinearGradient
        colors={["#003893","#1E90FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "70%",  width:"23%", borderRadius: 12 }}
      ></LinearGradient>

        <LinearGradient
          colors={["#B8E2F6", "#B8E2F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: "70%",  width:"23%", borderRadius: 12 }}
        ></LinearGradient>

        <LinearGradient
          colors={["#B8E2F6", "#B8E2F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ height: "70%",  width:"23%", borderRadius: 12 }}
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
          Monthly Shipments
        </Text>
        <Text style={{ fontSize: 8, fontFamily: "poppinsMedium" }}>
          Select monthly volume of your shipment
        </Text>
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
              <View key={itemData.id} style={{ marginHorizontal: 10,marginVertical:-10 }}>
                <Pressable
                  onPress={() => navigation.navigate("customs")}
                  style={{ borderRadius: 5, overflow: "hidden" }}
                >
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 12,
                      borderColor: "#000",
                      margin: 4,
                      height: 140,
                      width: 140,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "lightgray",
                    }}
                  >
                    <Image
                      style={{ height: 110, width: 110 }}
                      source={itemData.image}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 5,
                        fontSize: 8,
                        fontFamily: "poppinsMedium",
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

export default MonthlyShipment;

const styles = StyleSheet.create({});
