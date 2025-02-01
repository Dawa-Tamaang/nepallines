import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import { MaterialCommunityIcons,AntDesign,Ionicons,Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const TruckDetails = () => {
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
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.blueBackground}>
            <Card style={styles.headerCard}>
              <AntDesign
                onPress={() => navigation.navigate("Main")}
                name="arrowleft"
                size={24}
                color="#000000"
                style={styles.backIcon}
              />
              <Text style={styles.headerText}>
                BHAIRAWA CUSTOMS TO KATHMANDU
              </Text>
            </Card>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                margin: 20,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "poppinsMedium",
                }}
              >
                Truck Details
              </Text>
              <Pressable
                onPress={() => navigation.navigate("schedule")}
                style={{
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 5,
                  height: 30,
                  width: 130,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "white",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Truck Schedule
                </Text>
              </Pressable>
            </View>

            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                margin: 10,
                marginTop: -30,
              }}
            >
              <MaterialCommunityIcons
                name="truck-fast-outline"
                size={50}
                color="white"
              />
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 8,
                    color: "white",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  SPRINTER
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    color: "white",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Carrier:Truck
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                margin: 5,
                marginLeft: 70,
                marginTop: -10,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    fontFamily: "poppinsMedium",
                  }}
                >
                  21/02/2024
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    fontFamily: "poppinsMedium",
                  }}
                >
                  ETD
                </Text>
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    fontFamily: "poppinsMedium",
                  }}
                >
                  21/02/2024
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 8,
                    fontFamily: "poppinsMedium",
                  }}
                >
                  ETD
                </Text>
              </View>
            </View>
            <Pressable
              onPress={() => navigation.navigate("atcc")}
              style={{
                height: 45,
                width: "90%",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                marginTop: 7,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <View
                style={{
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "#B30000",
                    fontFamily: "poppinsMedium",
                  }}
                >
                  Add Transportaion and Customs Clerance
                </Text>
                <Ionicons
                  name="add-circle"
                  size={30}
                  color="#B30000"
                  style={{ marginLeft: 30 }}
                />
              </View>
            </Pressable>
          </View>
          <View style={styles.whiteBackground}>
            <View
              style={{
                height: 200,
                width: "90%",
                backgroundColor: "white",
                margin: 20,
                marginTop: 40,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "lightgray",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <View
                style={{
                  margin: 10,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  height: 30,
                  width: "90%",
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>
                  Add on Services
                </Text>
                <Pressable>
                  <Text
                    style={{
                      color: "blue",
                      fontSize: 8,
                      fontFamily: "poppinsMedium",
                      textDecorationLine: "underline",
                    }}
                  >
                    View all
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  margin: 5,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "lightgray",
                  height: 60,
                  width: "95%",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 50, width: 50 }}
                  source={{
                    uri: "https://www.theglebeprimary.org.uk/wp-content/uploads/2017/01/form-clipart.jpg",
                  }}
                />
                <View>
                  <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>
                    Port Kyc
                  </Text>
                  <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
                    Mandotory For first time Exporter
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 70,
                    borderWidth: 1,
                    borderColor: "#B30000",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: "poppinsMedium",
                      color: "#B30000",
                    }}
                  >
                    Add
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  margin: 5,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "lightgrey",
                  height: 60,
                  width: "95%",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 50, width: 50 }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvda3iEkgDZnlE8Hy0r_aJz5Khugj_bQtr7n5IDFJS-iiPhZum2CXHSL-kBGzFF8ptCI&usqp=CAU",
                  }}
                />
                <View style={{ marginLeft: -50 }}>
                  <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>
                    Marine Insurance
                  </Text>
                  <Text style={{ fontFamily: "poppinsMedium", fontSize: 8}}>
                    Coverage For your Truck
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 70,
                    borderWidth: 1,
                    borderColor: "#B30000",
                    borderRadius: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#B30000",
                      fontFamily: "poppinsBold",
                    }}
                  >
                    Add
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.overlappingView}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <Text style={{ fontSize: 10, fontFamily: "poppinsBold" }}>
                  Quotaion
                </Text>
                <Feather name="chevron-right" size={20} color="#B30000" />
              </View>
              <TextInput
                style={{
                  margin: 10,
                  marginTop: -5,
                  fontFamily: "poppinsMedium",
                  fontSize: 12,
                }}
                placeholder="The Quotaion include GST"
              />
            </View>
            <View
              style={{
                height: 1,
                width: "95%",
                borderWidth: 1,
                margin: 10,
                borderColor: "lightgray",
                marginTop: -10,
              }}
            ></View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                placeholder="Freight Charge($600)"
                style={{
                  fontFamily: "poppinsMedium",
                  margin: 10,
                  fontSize: 12,
                  width:'68%'
                }}
              />
              <TextInput
                placeholder="Rs 540044"
                style={{ fontSize: 12, fontFamily: "poppinsMedium", margin: 10 ,width:'30%'}}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TextInput
                placeholder="Origin Charge"
                style={{
                  fontSize: 12,
                  fontFamily: "poppinsMedium",
                  marginLeft: 10,
                  
                  width: "73%",
                }}
              />
              <TextInput
                placeholder=" Rs 540023"
                style={{
                  fontSize: 12,
                  fontFamily: "poppinsMedium",
                  marginRight: 10,
                  
                  width: "30%",
                }}
              />
            </View><View
            style={{
              height: 1,
              width: "95%",
              borderWidth: 1,
              margin: 10,
              borderColor: "lightgray",
            }}
          ></View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                margin: 10,
              }}
            >
              <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
                Total{" "}
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
                Rs 19809798{" "}
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("charge")}
              style={{
                height: 45,
                width: "90%",
                backgroundColor: "#003893",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 9,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "poppinsBold",
                }}
              >
                View Full Quote
              </Text>
            </Pressable>
          </View>
          
        </View>
      </ScrollView>
      <View
        style={{
          height: 70,
          width: "100%",
          backgroundColor: "#B30000",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          colors={["#B30000", "#D97F7F"]}
          style={{
            height: "100%",
            borderRadius: 8,
          }}
        >
          <View style={{ marginHorizontal: 20,height: 70, justifyContent: "space-between", flexDirection: "row", alignItems: "center",}}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "poppinsBold",
                  marginBottom: 2,
                }}
              >
                RS 19,000,900
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontFamily: "poppinsMedium",
                  opacity: 0.9,
                }}
              >
                For 1 Container
              </Text>
            </View>

            {/* Button Section */}
            <Pressable
              style={{
                height: 40,
                width: 180,
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#B30000",
                  fontFamily: "poppinsBold",
                }}
              >
                Placeholder
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 11,
  },
  backIcon: { marginLeft: 10 },
  headerText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: "poppinsBold",
    color: "#B30000",
  },
  blueBackground: {
    height: 520,
    backgroundColor: "#003893",
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: "white",
  },
  overlappingView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "white",
    height: 280,
    marginTop: 240,
    margin: 20,
    borderColor: "lightgrey",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    
  },
});

export default TruckDetails;
