import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import { useFonts } from "expo-font";
import { Card } from "react-native-shadow-cards";
import TopBar from "../components/TopBar";

const Profile = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const profileData = {
    name: "MBT Production",
    email: "dawagmail.com",
    phone: "+977 9812511213",
  };

  const menuItems = [
    { icon: "file-text", type: "FontAwesome", label: "Order", route: "Order" },
    {
      icon: "question-circle",
      type: "FontAwesome",
      label: "Help and Support",
      route: "SupportScreen",
    },
    { icon: "star-o", type: "FontAwesome", label: "Rate Us", route: "rate" },
    {
      icon: "certificate",
      type: "FontAwesome",
      label: "Claim Your Badge",
      route: "verify",
    },
    {
      icon: "gift",
      type: "FontAwesome",
      label: "Invite and Earn",
      route: "inviteearn",
    },
    {
      icon: "refresh",
      type: "FontAwesome",
      label: "Reset Password",
      route: "reset",
    },
    {
      icon: "ban",
      type: "FontAwesome",
      label: "Cancellation",
      route: "Order",
    },
  ];

  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar title={"Account"} />
        <View style={styles.profileContainer}>
          <View style={styles.profileIcon}>
            <MaterialIcons name="account-circle" size={90} color="#CDCDCD" />
          </View>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <View style={styles.profileInfo}>
            <Text style={styles.profileInfoText}>{profileData.email}</Text>
            <Text style={styles.profileInfoText}>{profileData.phone}</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("edit")}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.navigate("cprofile")}
          style={styles.companyProfile}
        >
          <View style={styles.companyProfileIconContainer}>
            <FontAwesome name="bank" size={25} color="#B30000" />
            <Text style={styles.companyProfileText}>Company profile</Text>
          </View>
          <MaterialIcons name="chevron-right" size={25} color="#B30000" />
        </Pressable>

        <Card style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.route)}
            >
              <View style={styles.menuItemContent}>
                <FontAwesome name={item.icon} size={25} color="#B30000" />
                <Text style={styles.menuItemText}>{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={25} color="#B30000" />
            </Pressable>
          ))}
        </Card>

        <Pressable
          onPress={() => navigation.navigate("login")}
          style={styles.signOutContainer}
        >
          <View style={styles.signOutContent}>
            <MaterialIcons name="logout" size={25} color="#B30000" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </View>
          <MaterialIcons name="chevron-right" size={25} color="#B30000" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 12,
    height: 200,
    width: "95%",
    marginTop: 10,
    padding: 10,
  },
  profileIcon: {
    height: 90,
    width: 90,
    borderRadius: 60,
    backgroundColor: "white",
    marginBottom: 10,
  },
  profileName: {
    color: "#B30000",
    fontSize: 12,
    fontFamily: "poppinsMedium",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 0,
  },
  profileInfoText: {
    fontSize: 10,
    fontFamily: "poppinsMedium",
  },
  editButtonText: {
    color: "blue",
    fontSize: 10,
    fontFamily: "poppinsMedium",
    textDecorationLine: "underline",
  },
  companyProfile: {
    height: 56,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 9,
  },
  companyProfileIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  companyProfileText: {
    fontSize: 10,
    marginLeft: 20,
    fontFamily: "poppinsMedium",
  },
  menuCard: {
    width: "95%",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 9,
    borderColor: "lightgrey",
    marginTop: 10,
    paddingVertical: 10,
  },
  menuItem: {
    height: 56,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 10,
    marginLeft: 20,
    fontFamily: "poppinsMedium",
  },
  signOutContainer: {
    height: 56,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 9,
    backgroundColor: "#fff",
    marginBottom: 40,
  },
  signOutContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  signOutText: {
    fontSize: 10,
    marginLeft: 20,
    fontFamily: "poppinsMedium",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalImage: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  modalHeaderTitle: {
    fontFamily: "poppinsBold",
    fontSize: 16,
    color: "#000",
  },
  modalHeaderSubText: {
    fontSize: 12,
    color: "gray",
    fontFamily: "poppinsMedium",
  },
  closeModalIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalSupportName: {
    fontSize: 14,
    fontFamily: "poppinsMedium",
  },
  modalSupportPhone: {
    fontSize: 12,
    color: "gray",
  },
  modalSupportEmail: {
    fontSize: 12,
    color: "gray",
  },
  modalFooter: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  modalFooterText: {
    flex: 1,
    marginLeft: 10,
  },
  modalFooterTitle: {
    fontFamily: "poppinsMedium",
    fontSize: 14,
  },
  modalFooterSubtitle: {
    fontSize: 12,
    color: "gray",
  },
});

export default Profile;
