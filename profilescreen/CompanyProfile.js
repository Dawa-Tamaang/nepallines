import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import check11 from "../images/check1.jpg";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-shadow-cards";

const CompanyProfile = () => {
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
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      {/* Header with shadow card */}
      <View
        style={{
          height: 60,
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#B30000",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 6 }, 
          shadowOpacity: 0.39, 
          shadowRadius: 8.3, 
          elevation: 13, 
        }}
      >
        <AntDesign
          name="arrowleft"
          size={20}
          color="white"
          style={{ marginLeft: 20 }}
        />
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            color: "white",
            fontFamily: "poppinsMedium",
          }}
        >
          Company Profile
        </Text>
      </View>


      {/* Content */}
      <View style={{ margin: 20 }}>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
          Early Registration Opens!
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            We are coming up with a sourcing solution to meet
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            your procurement needs.
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            Apply now to become an early user of upcoming Vessels
          </Text>
        </View>

        {/* First Linear Gradient Section */}
        <LinearGradient
          colors={["#DBF0FA", "#89CFF0"]}
          style={{
            height: 80,
            marginVertical: 10,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 45,
            borderTopRightRadius: 45,
            marginTop: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
              Discover instant CIF Costing
            </Text>
            <View style={{height: 1, width: "100%", backgroundColor: "black", marginVertical:5}}></View>
            <Text
              style={{
                fontFamily: "poppinsMedium",
                fontSize: 8,
                color: "black",
              }}
            >
              with few clicks
            </Text>
          </View>

          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 45,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              source={check11}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
        </LinearGradient>

        {/* Second Linear Gradient Section */}
        <LinearGradient
          colors={["#DBF0FA", "#89CFF0"]}
          style={{
            height: 80,
            marginVertical: 10,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 45,
            borderTopRightRadius: 45,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
              Source Fresh Produce
            </Text>
            <View style={{height: 1, width: "100%", backgroundColor: "black", marginVertical:5}}></View>
            <Text
              style={{
                fontFamily: "poppinsMedium",
                fontSize: 8,
                color: "black",
              }}
            >
              from quality suppliers, anytime,
            </Text>
            <Text
              style={{
                fontFamily: "poppinsMedium",
                fontSize: 8,
                color: "black",
              }}
            >
              anywhere
            </Text>
          </View>

          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 45,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              source={check11}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
        </LinearGradient>

        {/* Third Linear Gradient Section */}
        <LinearGradient
          colors={["#DBF0FA", "#89CFF0"]}
          style={{
            height: 80,
            marginVertical: 10,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 45,
            borderTopRightRadius: 45,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 12, fontFamily: "poppinsBold" }}>
              Pay With Credit Card
            </Text>
            <View style={{height: 1, width: "100%", backgroundColor: "black", marginVertical:5}}></View>
            <Text
              style={{
                fontFamily: "poppinsMedium",
                fontSize: 8,
                
                color: "black",
              }}
            >
              & enjoy 30 day credit
            </Text>
          </View>

          <View
            style={{
              height: 90,
              width: 90,
              borderRadius: 45,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              source={check11}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
        </LinearGradient>

        {/* Register Button */}
        <View
          style={{
            height: 55,
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#B30000",
            borderRadius: 9,
            marginTop: 50,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "poppinsMedium",
              color: "white",
            }}
          >
            Register as Exporter
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompanyProfile;
