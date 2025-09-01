import TopBar from '../components/TopBar';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const SupportScreen = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    poppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    poppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  });
  const handleCallPress = () => {
    Linking.openURL(`tel:+9779813251295`);
  };

  // Function to open email client
  const handleEmailPress = () => {
    Linking.openURL(`mailto:info.nepallines@gmail.com`);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <TopBar title="Help & Support" />
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Top Image */}
        <Image
          source={require('../images/support.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        {/* Header Text */}
        <View style={styles.textSection}>
          <Text style={styles.modalHeaderTitle}>Tell us how can we help 👋</Text>
          <Text style={styles.modalHeaderSubText}>
            We're always available to provide you with the best service possible.
          </Text>
        </View>

        {/* Support Options */}
        <View style={styles.optionsSection}>
          <TouchableOpacity style={styles.supportOption} onPress={handleCallPress}>
            <FontAwesome name="phone-square" size={34} color="orange" />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Schedule a Call Back</Text>
              <Text style={styles.optionSubTitle}>Get a callback from our team</Text>
            </View>
            <Entypo name="chevron-right" size={28} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportOption} onPress={handleEmailPress}>
            <MaterialCommunityIcons name="email" size={34} color="#FFA6C9" />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Email Us</Text>
              <Text style={styles.optionSubTitle}>We'll reply within 24 hours</Text>
            </View>
            
            <Entypo name="chevron-right" size={28} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportOption} onPress={() => navigation.navigate("chatwithus")}>
            <MaterialIcons name="chat" size={34} color="#2A84C8" />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>Chat</Text>
              <Text style={styles.optionSubTitle}>Talk to our customer service now</Text>
            </View>
            <Entypo name="chevron-right" size={28} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportOption} onPress={() => navigation.navigate("faqs")}>
            <MaterialIcons name="feedback" size={34} color="#2A84C8" />
            <View style={styles.optionText}>
              <Text style={styles.optionTitle}>FAQ's</Text>
              <Text style={styles.optionSubTitle}>Find intelligent answer instantly</Text>
            </View>
            <Entypo name="chevron-right" size={28} color="#ccc" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 220,
  },
  textSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  modalHeaderTitle: {
    fontFamily: 'poppinsBold',
    fontSize: 18,
    color: '#222',
    marginBottom: 6,
    textAlign: 'center',
  },
  modalHeaderSubText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'poppinsMedium',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  optionsSection: {
    marginTop: 24,
  },
  supportOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#ccc',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  optionText: {
    flex: 1,
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 14,
    fontFamily: 'poppinsMedium',
    color: '#222',
  },
  optionSubTitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
});

export default SupportScreen;
