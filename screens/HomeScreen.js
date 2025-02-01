import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Toggle from "../components/Toggle";

import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const navigation = useNavigation();
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
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null; 
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={["#005AA7", "white", "white"]} style={{ flex: 1 }}>
            
            <View
              style={{
                height: 60,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderBottomEndRadius: 12,
                borderBottomLeftRadius: 12,
                alignSelf: "center",
                alignItems: "center",
                
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: "5%",justifyContent:'center',marginTop:'-3%' }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: "#B30000",
                    fontFamily: "poppinsBold",
                    borderRadius: 12,
                    marginTop:10
                  }}
                >
                  Nepal{" "}
                </Text>
                <Text
                  style={{ fontSize: 30, color: "blue", fontFamily: "poppinsBold",marginTop:10 }}
                >
                  Lines
                </Text>
              </View>

              <Pressable
                onPress={() => navigation.navigate("profile")}
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: "lightgrey",
                  borderRadius: 50,
                  marginRight: "5%",
          
                  
                }}
              >
                <MaterialCommunityIcons name="account" size={35} color="white" />
              </Pressable>
            </View>
            <View>
              <Toggle />
            </View>
            <View
              style={{
                height: "35%",
                width: "90%",
                backgroundColor: "white",
                marginTop: "6%",
                marginLeft: "5%",
                borderRadius: 12,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,
                elevation: 13,
                padding: 15,
                flexDirection: "column",
              }}
            >
              {/* Two-column layout */}
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                {/* Left Column */}
                <View style={{ width: "48%" }}>
                  <Text style={{ fontSize: 12, fontFamily: "poppinsMedium", marginBottom: 5 }}>
                    From
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 14,
                      borderBottomColor: "lightgray",
                      fontFamily: "poppinsRegular",
                      marginBottom: 15,
                    }}
                    placeholder="From"
                  />
                  <Text style={{ fontSize: 12, fontFamily: "poppinsMedium", marginBottom: 5 }}>
                    Commodity
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 14,
                      borderBottomColor: "lightgray",
                      fontFamily: "poppinsRegular",
                    }}
                    placeholder="Commodity"
                  />
                </View>

                {/* Right Column */}
                <View style={{ width: "48%" }}>
                  <Text style={{ fontSize: 12, fontFamily: "poppinsMedium", marginBottom: 5 }}>
                    To
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 14,
                      borderBottomColor: "lightgray",
                      fontFamily: "poppinsRegular",
                      marginBottom: 15,
                    }}
                    placeholder="To"
                  />
                  <Text style={{ fontSize: 12, fontFamily: "poppinsMedium", marginBottom: 5 }}>
                    No. of Container
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 14,
                      borderBottomColor: "lightgray",
                      fontFamily: "poppinsRegular",
                    }}
                    placeholder="No. of Container"
                  />
                </View>
              </View>

              {/* Search Button */}
              <Pressable
                onPress={() => navigation.navigate("vessel")}
                style={{
                  height: 45,
                  width: "100%",
                  backgroundColor: "#B30000",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "white",
                    fontFamily: "poppinsBold",
                  }}
                >
                  Search
                </Text>
              </Pressable>
            </View>
            


            <View
              style={{
                margin: "8%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10%",
              }}
            >
              <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
                Our Services
              </Text>
              <Pressable>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "blue",
                    fontFamily: "poppinsMedium",
                    textDecorationLine: "underline",
                  }}
                >
                  View all
                </Text>
              </Pressable>
            </View>
            <KeyboardAvoidingView style={{ alignSelf:"center" }}>
              <FlatList
                data={list}
                horizontal={true}
                scrollEnabled={false}
                renderItem={({ item, index }) => {
                  return (
                    <Pressable style={styles.listItem}>
                      <View
                        style={{
                          height: 70,
                          width: 70,
                          backgroundColor: "#d4ebf2",
                          justifyContent: "space-around",
                          borderRadius: 12,
                          marginLeft: 10,
                          margin:5
                                                
                        }}
                      >
                        <Image
                          style={{ width: 70, height: 60, resizeMode: "contain" }}
                          source={item.image}
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
            </KeyboardAvoidingView>
            
          </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
