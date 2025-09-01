import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons";

const TruckAccount = () => {
  const navigation = useNavigation();
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [loaded] = useFonts({
    poppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const truckData = [
    { id: "1", image: require("../images/pikupvan.png"), name: "Pikup Van" },
    { id: "2", image: require("../images/container.png"), name: "Container" },
    { id: "3", image: require("../images/LVC.png"), name: "LVC" },
    { id: "4", image: require("../images/open.png"), name: "Open" },
    { id: "5", image: require("../images/trailer.png"), name: "Trailer" },
  ];

  const [fullName, setFullName] = useState("");
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const [numColumns, setNumColumns] = useState(3);
  const [errors, setErrors] = useState({});

  if (!loaded) return null;

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 6) {
          error = "Full name must be at least 6 Characters";
        }
        break;
      case "pan":
        if (!value.trim()) {
          error = "PAN is required";
        } else if (!/^\d+$/.test(value)) {
          error = "PAN must be a number";
        }
        break;
      case "city":
        if (!value.trim()) {
          error = "City is required";
        }
        break;
      
      case "selectedTruck":
        if (!value) error = "Choose your truck is required";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = () => {
    const fields = { fullName, pan, city, selectedTruck };
    let newErrors = {};

    Object.entries(fields).forEach(([key, value]) => {
      validateField(key, value);
      if ((typeof value === "string" && !value.trim()) || (!value && key === "selectedTruck")) {
        newErrors[key] = errors[key] || "This field is required";
      }
    });

    if (!selectedTruck) {
      newErrors.selectedTruck = "Choose your truck is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      navigation.navigate("truckdetailsPage");
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  const renderItem = () => (
    <View style={{ flex: 1, backgroundColor: "#B30000" }}>
      <View style={styles.container}>
        <Ionicons
          onPress={() => navigation.navigate("Splash")}
          style={{ marginTop: "15%", margin: "5%" }}
          name="arrow-back-circle-sharp"
          size={35}
          color="lightgrey"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nepal</Text>
          <Text style={styles.title}>Lines</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Fill Your Details</Text>

          <InputField
            label="Full Name"
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              validateField("fullName", text);
            }}
            placeholder="Enter your full name"
            clearValue={() => setFullName("")}
            error={errors.fullName}
          />
          <InputField
            label="PAN"
            value={pan}
            keyboardType="phone-pad"
            onChangeText={(text) => {
              setPan(text);
              validateField("pan", text);
            }}
            placeholder="Enter your PAN number"
            clearValue={() => setPan("")}
            error={errors.pan}
          />
          <InputField
            label="City"
            value={city}
            onChangeText={(text) => {
              setCity(text);
              validateField("city", text);
            }}
            placeholder="Enter your city"
            clearValue={() => setCity("")}
            error={errors.city}
          />
          
          <Text style={styles.inputLabel}>Choose Your Truck Type</Text>
          <FlatList
            data={truckData}
            key={numColumns}
            numColumns={numColumns}
            contentContainerStyle={styles.truckList}
            renderItem={({ item }) => {
              const isSelected = selectedTruck === item.id;
              return (
                <Pressable onPress={() => setSelectedTruck(item.id)}>
                  <View
                    style={[
                      styles.truckImageContainer,
                      {
                        borderColor:
                          errors.selectedTruck && !isSelected
                            ? "red"
                            : isSelected
                            ? "#14468d"
                            : "lightgray",
                        borderWidth: 2,
                      },
                    ]}
                  >
                    <Image source={item.image} style={[styles.truckImage, { tintColor: isSelected ? "#14468d" : "black" }]} />
                    <Text
                      style={{
                        color: isSelected ? "#14468d" : "black",
                        fontFamily: "poppinsMedium",
                        marginTop: -20,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.id}
          />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.switchButton} onPress={() => setNumColumns(3)}>
              3 Trucks
            </Text>
            <Text style={{ marginHorizontal: 20, color: "white" }}>|</Text>
            <Text style={styles.switchButton} onPress={() => setNumColumns(2)}>
              2 Trucks
            </Text>
          </View>

          {errors.selectedTruck ? (
            <Text style={styles.errorText}>{errors.selectedTruck}</Text>
          ) : null}

          <Pressable
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.submitText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={[1]} 
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B30000",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -10,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "poppinsBold",
    marginHorizontal: 2,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginTop: "6%",
    height: "100%",
  },
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 4,
  },
  formTitle: {
    fontFamily: "poppinsBold",
    fontSize: 18,
    color: "#B30000",
    marginBottom: 20,
  },
  truckList: {
    paddingHorizontal: 40,
  },
  truckImageContainer: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 9,
  },
  truckImage: {
    width: 75,
    height: 75,
  },
  switchButton: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  },
  submitButton: {
    height: 50,
    width: "90%",
    backgroundColor: "#B30000",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  submitText: {
    fontFamily: "poppinsBold",
    fontSize: 12,
    color: "white",
  },
});

export default TruckAccount;
