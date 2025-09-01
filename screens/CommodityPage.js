// CommodityPage.js
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import TopBar from "../components/TopBar";
import InputField from "../components/InputField";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const CommodityPage = () => {
  const navigation = useNavigation();

  const [materialName, setMaterialName] = useState("");
  const [weight, setWeight] = useState("");
  const [packaging, setPackaging] = useState("");
  const [packagingCount, setPackagingCount] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("kg");

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [errors, setErrors] = useState({});

  const isNumeric = (value) => /^\d*\.?\d+$/.test(value);

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "materialName":
        if (!value.trim()) error = "Material name is required";
        break;
      case "weight":
        if (!value.trim()) error = "Weight is required";
        else if (!isNumeric(value)) error = "Weight must be a number";
        break;
      case "packaging":
        if (!value.trim()) error = "Packaging is required";
        break;
      case "packagingCount":
        if (!value.trim()) error = "Packaging count is required";
        else if (!isNumeric(value)) error = "Packaging count must be a number";
        break;
      case "length":
        if (!value.trim()) error = "Length is required";
        else if (!isNumeric(value)) error = "Length must be a number";
        break;
      case "width":
        if (!value.trim()) error = "Width is required";
        else if (!isNumeric(value)) error = "Width must be a number";
        break;
      case "height":
        if (!value.trim()) error = "Height is required";
        else if (!isNumeric(value)) error = "Height must be a number";
        break;
      case "selectedDate":
        if (!value) error = "Date is required";
        break;
      case "selectedTime":
        if (!value) error = "Time is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return error === "";
  };

  const validateAllFields = () => {
    const fields = {
      materialName,
      weight,
      packaging,
      packagingCount,
      length,
      width,
      height,
      selectedDate,
      selectedTime,
    };

    let isValid = true;
    Object.entries(fields).forEach(([field, value]) => {
      const result = validateField(field, value);
      if (!result) isValid = false;
    });

    return isValid;
  };

  const clearField = (fieldName, setter) => {
    setter("");
    setErrors((prev) => ({ ...prev, [fieldName]: null }));
  };

  const handleSubmit = () => {
    if (validateAllFields()) {
      navigation.navigate("ContactDetails", {
        selectedDate,
        selectedTime,
      });
    }
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);

  const formatDate = (date) => {
    if (!date) return "dd/mm/yy";
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (time) => {
    if (!time) return "5:24 AM";
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopBar title={"Commodities"} />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 15 }}>
        <InputField
          label="Material Name"
          value={materialName}
          onChangeText={(text) => {
            setMaterialName(text);
            if (text.trim()) setErrors((prev) => ({ ...prev, materialName: null }));
          }}
          placeholder="Enter Material Name"
          clearValue={() => clearField("materialName", setMaterialName)}
          error={errors.materialName}
        />
        <View style={styles.inputRow}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <InputField
              label="Weight"
              value={weight}
              onChangeText={(text) => {
                setWeight(text);
                if (isNumeric(text)) setErrors((prev) => ({ ...prev, weight: null }));
              }}
              placeholder="Enter Weight"
              clearValue={() => clearField("weight", setWeight)}
              error={errors.weight}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Unit</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={unit}
                onValueChange={(itemValue) => setUnit(itemValue)}
                mode="dropdown"
                style={{ height: 60, width: "100%" }}
                dropdownIconColor="#B30000"
              >
                <Picker.Item label="Kg" value="kg" />
                <Picker.Item label="Ton" value="ton" />
              </Picker>
            </View>
          </View>
        </View>

        <InputField
          label="Packaging"
          value={packaging}
          onChangeText={(text) => {
            setPackaging(text);
            if (text.trim()) setErrors((prev) => ({ ...prev, packaging: null }));
          }}
          placeholder="Enter Packaging"
          clearValue={() => clearField("packaging", setPackaging)}
          error={errors.packaging}
        />
        <InputField
          label="Packaging Count"
          value={packagingCount}
          onChangeText={(text) => {
            setPackagingCount(text);
            if (isNumeric(text)) setErrors((prev) => ({ ...prev, packagingCount: null }));
          }}
          placeholder="Enter Packaging Count"
          clearValue={() => clearField("packagingCount", setPackagingCount)}
          error={errors.packagingCount}
        />

        <View style={styles.container}>
          <Text style={styles.heading}>Enter Dimensions</Text>
          <View style={styles.inputRow}>
            <View style={styles.field}>
              <InputField
                label="Length"
                value={length}
                onChangeText={(text) => {
                  setLength(text);
                  if (isNumeric(text)) setErrors((prev) => ({ ...prev, length: null }));
                }}
                placeholder="0.0"
                clearValue={() => clearField("length", setLength)}
                error={errors.length}
              />
            </View>
            <View style={styles.field}>
              <InputField
                label="Width"
                value={width}
                onChangeText={(text) => {
                  setWidth(text);
                  if (isNumeric(text)) setErrors((prev) => ({ ...prev, width: null }));
                }}
                placeholder="0.0"
                clearValue={() => clearField("width", setWidth)}
                error={errors.width}
              />
            </View>
            <View style={styles.field}>
              <InputField
                label="Height"
                value={height}
                onChangeText={(text) => {
                  setHeight(text);
                  if (isNumeric(text)) setErrors((prev) => ({ ...prev, height: null }));
                }}
                placeholder="0.0"
                clearValue={() => clearField("height", setHeight)}
                error={errors.height}
              />
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.heading}>Schedule your move</Text>
          <View style={styles.inputRow}>
            <View style={styles.field}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity
                style={[
                  styles.pickerButton,
                  errors.selectedDate ? { borderColor: "red" } : null,
                ]}
                onPress={() => setShowDatePicker(true)}
              >
                <Text
                  style={[
                    styles.pickerButtonText,
                    !selectedDate && { color: "#999" },
                  ]}
                >
                  {formatDate(selectedDate)}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate || new Date()}
                  mode="date"
                  minimumDate={minDate}
                  maximumDate={maxDate}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={(event, date) => {
                    setShowDatePicker(false);
                    if (date) {
                      setSelectedDate(date);
                      setErrors((prev) => ({ ...prev, selectedDate: null })); // clear error on selection
                    }
                  }}
                />
              )}
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Time</Text>
              <TouchableOpacity
                style={[
                  styles.pickerButton,
                  errors.selectedTime ? { borderColor: "red" } : null,
                ]}
                onPress={() => setShowTimePicker(true)}
              >
                <Text
                  style={[
                    styles.pickerButtonText,
                    !selectedTime && { color: "#999" },
                  ]}
                >
                  {formatTime(selectedTime)}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={selectedTime || new Date()}
                  mode="time"
                  is24Hour={false}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={(event, time) => {
                    setShowTimePicker(false);
                    if (time) {
                      setSelectedTime(time);
                      setErrors((prev) => ({ ...prev, selectedTime: null })); // clear error on selection
                    }
                  }}
                />
              )}
            </View>
          </View>
        </View>


        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "90%",
  },
  heading: {
    fontSize: 14,
    fontFamily: "poppinsMedium",
    color: "#B30000",
    marginBottom: 8,
  },
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 30,
  },
  field: {
    flex: 1,
    maxWidth: "40%",
  },
  pickerContainer: {
    width: 105,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    marginRight: 32,
  },
  label: {
    fontSize: 12,
    fontFamily: "poppinsMedium",
    color: "#B30000",
    marginBottom: 4,
  },
  pickerButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  pickerButtonText: {
    fontSize: 14,
    fontFamily: "poppinsRegular",
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#B30000",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "poppinsBold",
  },
});

export default CommodityPage;
