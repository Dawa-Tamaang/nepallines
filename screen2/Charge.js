import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import GST from "../components/GST";
import { MaterialIcons } from "@expo/vector-icons";

const Charge = () => {
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
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <View
        style={{
          height: 60,
          width: "99%",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderColor: "lightgrey",

          alignSelf: "center",
          shadowColor: "#000",
          borderRadius:12, 
        

         
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            style={{ marginLeft: 10,marginTop:5 }}
          />
          <Text
            style={{
              fontFamily: "poppinsMedium",
              fontSize: 12,
              marginLeft: 10,
              marginTop:5
            }}
          >
            Full Quotation
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 40 }}>
          <Text style={{ color: "#B30000",fontSize:10 }}>1* 40HCRF</Text>
        </View>
      </View>

      <GST />
      <View style={{ flexDirection: "row", margin: 20, marginTop: 100 }}>
        <MaterialIcons name="attach-money" size={16} color="#B30000" />
        <Text
          style={{
            fontSize: 10,
            color: "#B30000",
            marginLeft: 1,
            fontFamily: "poppinsMedium",
          }}
        >
          FREIGHT CHARGE
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>O/F</Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 530000
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
          1 * $ 5600 + 5 % GST
        </Text>
      </View>
      <View
        style={{
          height: 2,
          width: "90%",
          backgroundColor: "lightgray",
          alignSelf: "center",
          marginTop: -12,
        }}
      ></View>
      <View style={{ flexDirection: "row", margin: 20, marginTop: 10 }}>
        <Feather name="anchor" size={16} color="#B30000" />
        <Text
          style={{
            fontSize: 10,
            color: "#B30000",
            marginLeft: 5,
            fontFamily: "poppinsMedium",
          }}
        >
          ORIGIN CHARGE
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            BL Fee
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 4,130
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8}}>
        ₹ 3,500+ 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            Toll Charge
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 1,285
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
          1 * ₹ 1,080  + 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>MUC</Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10}}>
            {" "}
            ₹ 201
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
          1 * ₹ 170 + 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            Seal Fee
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 506
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8}}>
          1 * $ 5 + 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10}}>
            Temperature Variance
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 4,456
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8}}>
          1 * ₹ 3,776 + 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            THC (BMCT)
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10}}>
            {" "}
            ₹ 1,518
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
          1 * ₹ 27,500 + 18 % GST
        </Text>
      </View>
      <View style={{ margin: 30, marginTop: -20, marginLeft: 40 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            Surrender Bill
          </Text>
          <Text style={{ fontFamily: "poppinsMedium", fontSize: 10 }}>
            {" "}
            ₹ 32,450
          </Text>
        </View>
        <Text style={{ fontFamily: "poppinsMedium", fontSize: 8 }}>
        ₹ 2,500 + 18 % GST
        </Text>
      
      </View>
      <View style={{ marginTop: 120,height:80,width:'100%',borderWidth:1,borderColor:'lightgray',borderRadius:12}}>
      <View
        style={{ justifyContent: "space-between", flexDirection: "row",marginTop:10,width:'90%',marginLeft:20}}
      >
        <Text style={{ fontFamily: "poppinsBold", fontSize: 12 }}>
          Total
        </Text>
        <Text style={{ fontFamily: "poppinsBold", fontSize: 12 }}>
          {" "}
          ₹ 1,01,518
        </Text>
      </View>
      <View style={{ justifyContent: "flex-end", flexDirection: "row",width:'95%' }}>
        <Text
          style={{
            fontFamily: "poppinsMedium",
            fontSize: 10,
            color: "#B30000",
          }}
        >
          (inc of ₹ 9818 GST )
        </Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Charge;

const styles = StyleSheet.create({});
