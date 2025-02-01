import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useRef, useEffect } from "react";

const IInviteEarn = () => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current?.play();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 60,
          width: "100%",

          borderColor: "white",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",

          backgroundColor: "#B30000",
          borderRadius: 12,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ marginLeft: 20 }}
        />
        <Text
          style={{
            fontSize: 12,
            
            marginLeft: 10,
            color: "white",
            fontFamily: "poppinsMedium",
          }}
        >
          Invite & Earn
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text style={{ fontFamily: "poppinsBold", fontSize: 12}}>
          Earn up to NRS 1000 off by inviting
        </Text>
        <Text
          style={{ fontFamily: "poppinsBold", fontSize: 12, marginTop: -4 }}
        >
          Your Frined
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: 130,
          borderWidth: 3,
          borderColor: "lightgray",
          borderRadius: 12,
          alignSelf: "center",
          marginTop: 20,
          borderStyle: "dotted",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontFamily: "poppinsBold", fontSize: 12 }}>B3000</Text>
        <FontAwesome5 name="copy" size={20} color="black" />
      </View>
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 300,
            height: 300,
            backgroundColor: "white",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/invite.json")}
        />
      </View>
      <View
        style={{
          height: 180,
          width: "90%",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "lightgray",
          alignSelf: "center",
          marginTop: -30,
        }}
      >
        <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: "poppinsBold", fontSize: 12 }}>
            How it Works?
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            borderColor: "lightgray",
            borderWidth: 1,
          }}
        ></View>
        <View style={{ margin: 10, flexDirection: "row" }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>1</Text>
          </View>
          <Text style={{ marginLeft: 10, fontFamily: "poppinsMedium" ,fontSize:10}}>
            Tap on invite
          </Text>
        </View>
        <View style={{ margin: 10, flexDirection: "row", marginTop: -1 }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>2</Text>
          </View>
          <Text style={{ marginLeft: 10, fontFamily: "poppinsMedium",fontSize:10 }}>
            Select Contact
          </Text>
        </View>
        <View style={{ margin: 10, flexDirection: "row", marginTop: -1 }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>2</Text>
          </View>
          <Text style={{ marginLeft: 10, fontFamily: "poppinsMedium",fontSize:10 }}>
            Invite your friends
          </Text>
        </View>
        <View style={{ margin: 10, flexDirection: "row", marginTop: -1 }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 12,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>4</Text>
          </View>
          <Text style={{ marginLeft: 10, fontFamily: "poppinsMedium" ,fontSize:10}}>
            Get access to special rates & offers
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 60,
          width: "90%",
          backgroundColor: "#B30000",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:12,marginTop:70
        }}
      ><Text style={{fontFamily:'poppinsMedium',fontSize:12,color:'white'}}>INVITE</Text></View>
    </SafeAreaView>
  );
};

export default IInviteEarn;

const styles = StyleSheet.create({});
