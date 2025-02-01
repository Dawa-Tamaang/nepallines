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
import forwarderIcon from "../images/3.png";
import { useFonts } from "expo-font";
import { Card } from "react-native-shadow-cards";

const Profile = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  // Profile data
  const profileData = {
    name: "MBT Production",
    email: "dawagmail.com",
    phone: "+685251121321",
  };

  // Menu items
  const menuItems = [
    { icon: "file-text", type: "FontAwesome", label: "Order", route: "Order" },
    {
      icon: "question-circle",
      type: "FontAwesome",
      label: "Help and Support",
      route: "has",
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
    { icon: "comments-o", type: "FontAwesome", label: "Chat", route: "chat" },
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

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={styles.header}>
          <AntDesign
            onPress={() => navigation.navigate("Main")}
            name="arrowleft"
            size={28}
            color="black"
            style={styles.backIcon}
          />
          <Text style={styles.headerTitle}>Account</Text>
        </Card>
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
              onPress={() => {
                if (item.label === "Help and Support") {
                  setVisible(true);
                } else {
                  navigation.navigate(item.route);
                }
              }}
            >
              <View style={styles.menuItemContent}>
                {item.type === "FontAwesome" ? (
                  <FontAwesome name={item.icon} size={25} color="#B30000" />
                ) : (
                  <MaterialIcons name={item.icon} size={25} color="#B30000" />
                )}
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

        

        {/* Modal for Help and Support */}
        <Modal style={styles.modal} isVisible={visible} onBackButtonPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image source={forwarderIcon} style={styles.modalImage} />
              <View>
                <Text style={styles.modalHeaderTitle}>Need help?</Text>
                <Text style={styles.modalHeaderSubText}>Talk to our price consultant</Text>
              </View>
              <Entypo
                name="cross"
                size={29}
                color="#B30000"
                style={styles.closeModalIcon}
                onPress={() => setVisible(false)}
              />
            </View>
            <View style={styles.modalBody}>
              <Text style={styles.modalSupportName}>Bibek ACharya</Text>
              <Text style={styles.modalSupportPhone}>+977 9848986980</Text>
              <Text style={styles.modalSupportEmail}>kaaknal@gmail.com</Text>
            </View>
            <View style={styles.modalFooter}>
              <FontAwesome name="phone-square" size={40} color="orange" />
              <View style={styles.modalFooterText}>
                <Text style={styles.modalFooterTitle}>Schedule a Call Back</Text>
                <Text style={styles.modalFooterSubtitle}>Get a callback from customer</Text>
              </View>
              <Entypo name="chevron-right" size={35} color="lightgrey" />
            </View>
            <View style={styles.modalFooter}>
              <MaterialCommunityIcons name="email" size={40} color="#FFA6C9" />
              <View style={styles.modalFooterText}>
                <Text style={styles.modalFooterTitle}>Email Us</Text>
                <Text style={styles.modalFooterSubtitle}>Get answers to your queries via email</Text>
              </View>
              <Entypo name="chevron-right" size={35} color="lightgrey" />
            </View>
            <View style={styles.modalFooter}>
              <MaterialIcons name="chat" size={40} color="#2A84C8" />
              <View style={styles.modalFooterText}>
                <Text style={styles.modalFooterTitle}>Chat</Text>
                <Text style={styles.modalFooterSubtitle}>Instant chat with customer service</Text>
              </View>
              <Entypo name="chevron-right" size={35} color="lightgrey" />
            </View>
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: "100%",
    shadowColor: "#000",
    alignSelf: "center",
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  backIcon: {
    marginLeft: 10,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "poppinsBold",
    color: "#B30000",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 4,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 12,
    height: 200,
    width: "95%",
    marginTop: 10,
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
    fontFamily: "poppinsMedium",
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
    marginVertical:10,
    borderWidth:1,
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
    height: 450,
    width: "95%",
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 9,
    borderColor: "lightgrey",
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
    width: "100%",
    marginLeft: 0,
    marginBottom: 0,
    justifyContent: "flex-end",  
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
    height: 450, 
    maxHeight: "80%",  
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  modalImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
  },
  modalHeaderTitle: {
    fontFamily: "poppinsBold",
    fontSize: 18,
    color: "#333",
  },
  modalHeaderSubText: {
    fontFamily: "poppinsMedium",
    fontSize: 12,
    color: "#777",
  },
  closeModalIcon: {
    padding: 10,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalSupportName: {
    fontFamily: "poppinsBold",
    fontSize: 16,
    color: "#333",
  },
  modalSupportPhone: {
    fontFamily: "poppinsMedium",
    fontSize: 12,
    color: "#555",
    marginVertical: 5,
  },
  modalSupportEmail: {
    fontFamily: "poppinsMedium",
    fontSize: 12,
    color: "#555",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
  },
  modalFooterText: {
    flex: 1,
    marginLeft: 15,
  },
  modalFooterTitle: {
    fontFamily: "poppinsBold",
    fontSize: 14,
    color: "#333",
  },
  modalFooterSubtitle: {
    fontFamily: "poppinsMedium",
    fontSize: 12,
    color: "#777",
  },
});

export default Profile;
