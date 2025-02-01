import React from "react";
import { Image, Text,Dimensions, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import Services from "../screens/Services";
import Order from "../screens/Order";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import Forgotpassword from "../screens/ForgotPassword";
import Otp from "../screens/Otp";
import BusinessTypeScreen from "../screens/BusinessTypeScreen";
import Customs from "../screens/Customs";
import Destination from "../screens/Destination";
import MonthlyShipment from "../screens/MonthlyShipment";
import Profile from "../screens/Profile";
import Vessels from "../screen2/Vessels";
import TruckDetails from "../screen2/TruckDetails";
import TruckSchedule from "../screen2/TruckSchedule";
import ATCC from "../screen2/ATCC";
import Charge from "../screen2/Charge";
import ResetPassword from "../profilescreen/ResetPassword";

import AccountVerification from "../profilescreen/AccountVerification";
import TruckPage from "../truck/TruckPage";
import CompanyProfile from "../profilescreen/CompanyProfile";

import IInviteEarn from "../profilescreen/IInviteEarn";
import Chat from "../profilescreen/Chat";

import TruckOtp from "../truck/TruckOtp";
import TruckAccount from "../truck/TruckAccount";
import TruckDetailsPage from "../truck/TruckDetailsPage";
import TruckKyc from "../truck/TruckKyc";
import TruckHomePage from "../truck/TruckHomePage";
import TruckInbox from "../truck/TruckInbox";
import TruckEarningPage from "../truck/TruckEarningPage";
import TruckOrderPage from "../truck/TruckOrderPage";
import EditProfile from "../profilescreen/EditProfile";
import CreatedProfile from "../screens/CreatedProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBarLabel({ focused, title, marginTop }) {
  return (
    <Text style={{
      fontSize: 8,
      color: focused ? '#B30000' : 'black',
      fontFamily: 'poppinsMedium',
      marginTop: marginTop !== undefined ? marginTop : -10,
    }}>
      {title}
    </Text>
  );
}

function BottomTabs() {
  const { width } = Dimensions.get('window');
  const iconSize = width > 400 ? 30 : 25; // Responsive icon size

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { fontSize: 10 },
        tabBarActiveTintColor: '#B30000',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Home" />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/home.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="Home Icon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Services" />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/addon.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="Services Icon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Order" marginTop={-5} />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/file.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="Order Icon"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function TruckBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="truckhome"
        component={TruckHomePage}
        options={{
          tabBarLabel: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={30} color="#B30000" />
            ) : (
              <AntDesign name="home" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="truckinbox"
        component={TruckInbox}
        options={{
          tabBarLabel: "inbox",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons name="laptop-windows" size={30} color="#B30000" />
            ) : (
              <MaterialIcons name="laptop-windows" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="truckearning"
        component={TruckEarningPage}
        options={{
          tabBarLabel: "my earning",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="cash-100" size={30} color="#B30000" />
            ) : (
              <MaterialCommunityIcons name="cash-100" size={34} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="truckorder"
        component={TruckOrderPage}
        options={{
          tabBarLabel: "orders",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="filetext1" size={30} color="#B30000" />
            ) : (
              <AntDesign name="filetext1" size={30} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sign"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgot"
          component={Forgotpassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="business"
          component={BusinessTypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="monthly"
          component={MonthlyShipment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="customs"
          component={Customs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="destination"
          component={Destination}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="created"
          component={CreatedProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="vessel"
          component={Vessels}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="truck"
          component={TruckDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="schedule"
          component={TruckSchedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="atcc"
          component={ATCC}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="charge"
          component={Charge}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="reset"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="edit"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verify"
          component={AccountVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="truckpage"
          component={TruckPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cprofile"
          component={CompanyProfile}
          options={{ headerShown: false }}
        />
      
        
        <Stack.Screen
          name="inviteearn"
          component={IInviteEarn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chat"
          component={Chat}
          options={{ headerShown: false }}

        />
      
        <Stack.Screen
          name="truckotp"
          component={TruckOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="truckaccount"
          component={TruckAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="truckdetailsPage"
          component={TruckDetailsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="truckkyc"
        component={TruckKyc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="truckmain"
        component={TruckBottomTabs}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
