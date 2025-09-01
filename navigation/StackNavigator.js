import { Image, Text,Dimensions, View } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import Services from "../screens/Services";
import Order from "../screens/Order";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import Forgotpassword from "../screens/ForgotPassword";
import Otp from "../screens/Otp";
import SetMap from "../screens/SetMap";
import BusinessTypeScreen from "../screens/BusinessTypeScreen";
import Customs from "../screens/Customs";
import Destination from "../screens/Destination";
import MonthlyShipment from "../screens/MonthlyShipment";
import Profile from "../screens/Profile";
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
import LoadDetails from "../screens/LoadDetails";
import TruckOrderPage from "../truck/TruckOrderPage";
import EditProfile from "../profilescreen/EditProfile";
import CreatedProfile from "../screens/CreatedProfile";
import SetLocation from "../screens/SetLocation";
import ContactDetails from "../screens/ContactDetails";
import DeliveryDetails from "../screens/DeliveryDetails";
import DriverLoginScreen from "../truckdriver/driverlogin";
import DriverHome from "../truckdriver/driverhome";
import PickupScreen from "../screens/PickUp";
import DeliveryScreen from "../screens/Delivery";
import CommodityPage from "../screens/CommodityPage";
import SearchScreen from "../screens/SearchScreen";
import MyOrderDetails from "../screens/MyOrderDetails";
import ConfirmScreen from "../screens/ConfirmScreen";
import NotificationScreen from "../screens/NotificationScreen";
import CitySetScreen from "../truck/CitySetScreen";
import SupportScreen from "../profilescreen/SupportScreen";
import ChatwithUs from "../screens/ChatwithUs";
import FAQScreen from "../screens/FaqsScreen";

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
  const iconSize = width > 400 ? 30 : 25; 

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
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Home" marginTop={5} />,
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
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Services" marginTop={5} />,
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
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Order" marginTop={5} />,
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
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Profile" marginTop={5} />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/user.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="Profile Icon"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function TruckBottomTabs() {
  const { width } = Dimensions.get('window');
  const iconSize = width > 400 ? 30 : 25;
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
        component={TruckHomePage}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Home" marginTop={5} />,
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
        name="truckorder"
        component={TruckOrderPage}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="orders" marginTop={5} />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/file.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="File Icon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => <CustomTabBarLabel focused={focused} title="Profile" marginTop={5} />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/user.png')}
              style={{ width: iconSize, height: iconSize, tintColor: focused ? '#B30000' : 'black' }}
              accessibilityLabel="Profile Icon"
            />
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
          name="SetMap"
          component={SetMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
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
          name="ConfirmScreen"
          component={ConfirmScreen}
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
          name="LoadDetails" 
          component={LoadDetails}  
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SetLocation" 
          component={SetLocation}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="monthly"
          component={MonthlyShipment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="driverlogin"
          component={DriverLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="driverhome"
          component={DriverHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pickup"
          component={PickupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="delivery"
          component={DeliveryScreen}
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
          name="commodity"
          component={CommodityPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
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
          name="MyOrderDetails"
          component={MyOrderDetails}
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
      <Stack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="truckinbox"
        component={TruckInbox}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="chatwithus"
        component={ChatwithUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="faqs"
        component={FAQScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cityset"
        component={CitySetScreen}
        options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
