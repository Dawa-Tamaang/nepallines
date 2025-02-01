import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const ATCC = () => {
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; // You might want to render a loading indicator here instead
  }
  return (
    <SafeAreaView>
      <View
        style={{
          height: 60,
          width: "100%",
          borderWidth: 1,
          borderColor: "lightgrey",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems:'center',
          borderRadius:12,
          
         
        }}
      >
        <Entypo name="cross" size={20} color="#B30000" style={{marginTop:10,marginLeft:10}} />
        <Text style={{ fontSize: 12, marginTop:10, fontFamily: "poppinsMedium",marginLeft:10 }}>
          Transportaion & Customs Clerance
        </Text>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          margin: 10,
          flexDirection: "row",
          marginTop:30
        }}
      >
        <Ionicons name="location" size={20} color="blue" />
        <Pressable>
          <Text
            style={{
              fontSize: 12,
              marginLeft: 5,
              fontFamily: "poppinsMedium",
            }}
          >
            Selecting Stuffing location
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
          alignSelf:'center',
        }}
      >
        <TextInput
          style={{
            borderBottomWidth: 2,
            width: '90%',
            fontFamily: "poppinsMedium",
            fontSize:12,
            borderColor:'lightgray'
          }}
          placeholder="serach loading location here"
        />
        <AntDesign name="search1" size={20} color="black" />
      </View>
      <View style={{ margin: 20 }}>
        <Text
          style={{
            color: "#B30000",
            fontSize: 12,
            fontFamily: "poppinsMedium",
          }}
        >
          Recent Search
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: "95%",
          borderBottomWidth:1,
          borderColor: "lightgrey",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Ionicons
          name="location"
          size={20}
          color="orange"
          style={{ margin: 10 }}
        />
        <Text style={{ margin: 10, fontSize: 10, fontFamily: "poppinsMedium" }}>
          Bhairawa Customs
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: "95%",
          borderBottomWidth:1,
          borderColor: "lightgrey",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Ionicons
          name="location"
          size={20}
          color="orange"
          style={{ margin: 10 }}
        />
        <Text style={{ margin: 10, fontSize: 10, fontFamily: "poppinsMedium" }}>
          Mechi Customs
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: "95%",
          borderBottomWidth:1,
          borderColor: "lightgrey",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Ionicons
          name="location"
          size={20}
          color="orange"
          style={{ margin: 10 }}
        />
        <Text style={{ margin: 10, fontSize: 10, fontFamily: "poppinsMedium" }}>
          Brijung Customs
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: "95%",
          borderBottomWidth:1,
          borderColor: "lightgrey",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Ionicons
          name="location"
          size={20}
          color="orange"
          style={{ margin: 10 }}
        />
        <Text style={{ margin: 10, fontSize: 10, fontFamily: "poppinsMedium" }}>
          Nepalgung Customs
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: "95%",
          borderBottomWidth:1,
          borderColor: "lightgrey",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Ionicons
          name="location"
          size={20}
          color="orange"
          style={{ margin: 10 }}
        />
        <Text style={{ margin: 10, fontSize: 10, fontFamily: "poppinsMedium" }}>
          Birtanagar Customs
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ATCC;

const styles = StyleSheet.create({});
