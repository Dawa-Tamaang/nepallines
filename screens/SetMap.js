import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputField from '../components/InputField';

const GOOGLE_MAPS_APIKEY = "YOUR_GOOGLE_MAPS_API_KEY";

const SetMap = () => {
  const navigation = useNavigation();

  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("ton");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [stops, setStops] = useState([
    { type: 'pickup', location: '' },
    { type: 'drop', location: '' },
  ]);

  const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
  const [showPickupTimePicker, setShowPickupTimePicker] = useState(false);
  const [showDropoffDatePicker, setShowDropoffDatePicker] = useState(false);
  const [showDropoffTimePicker, setShowDropoffTimePicker] = useState(false);

  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const [state, setState] = useState({
    pickupCords: {
      latitude: 27.7172,
      longitude: 85.3240,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropoffCords: {
      latitude: 27.6872,
      longitude: 85.3440,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const { pickupCords, dropoffCords } = state;

  const isNumeric = (value) => /^\d*\.?\d+$/.test(value);

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "weight":
        if (!value.trim()) error = "Weight is required";
        else if (!isNumeric(value)) error = "Weight must be a number";
        break;
      case "selectedDate":
      case "dropoffDate":
        if (!value) error = "Date is required";
        break;
      case "selectedTime":
      case "dropoffTime":
        if (!value) error = "Time is required";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return !error;
  };

  const validateAllFields = () => {
    const fields = {
      weight,
      selectedDate,
      selectedTime,
      dropoffDate,
      dropoffTime,
    };

    let isValid = true;
    Object.entries(fields).forEach(([field, value]) => {
      if (!validateField(field, value)) isValid = false;
    });

    return isValid;
  };

  const clearField = (fieldName, setter) => {
    setter("");
    setErrors((prev) => ({ ...prev, [fieldName]: null }));
  };

  const updateStopLocation = (text, index) => {
    const updatedStops = [...stops];
    updatedStops[index].location = text;
    setStops(updatedStops);
  };

  const onConfirmLocation = () => {
    if (validateAllFields()) {
      navigation.navigate("ConfirmScreen", {
        stops,
        weight,
        unit,
        selectedDate,
        selectedTime,
        dropoffDate,
        dropoffTime,
        distance,
        duration,
      });
    }
  };

  const formatDate = (date) => {
    if (!date) return "dd/mm/yy";
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (time) => {
    if (!time) return "--:--";
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={pickupCords}>
        <Marker coordinate={pickupCords} />
        <Marker coordinate={dropoffCords} />
        <MapViewDirections
          origin={pickupCords}
          destination={dropoffCords}
          strokeWidth={3}
          strokeColor="#2563eb"
          onReady={(result) => {
            setDistance(result.distance);
            setDuration(result.duration);
          }}
        />
      </MapView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.bottomPanel}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {stops.map((stop, index) => (
            <View key={index} style={styles.stopItem}>
              <View style={styles.stopIndicator}>
                <MaterialIcons
                  name="circle"
                  size={12}
                  color={
                    index === 0
                      ? '#00b300'
                      : index === stops.length - 1
                      ? '#B30000'
                      : '#ff9800'
                  }
                />
                {index !== stops.length - 1 && (
                  <View style={styles.verticalLine} />
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.stopLabel}>
                  {stop.type === 'pickup'
                    ? 'Pickup Location'
                    : 'Drop-off Location'}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder={`Enter ${stop.type} location`}
                  value={stop.location}
                  onChangeText={(text) => updateStopLocation(text, index)}
                />
              </View>
            </View>
          ))}

          <View style={styles.inputRow}>
            <View style={{ flex: 1, marginRight: 20 }}>
              <InputField
                label="Weight"
                value={weight}
                onChangeText={(text) => {
                  setWeight(text);
                  if (isNumeric(text))
                    setErrors((prev) => ({ ...prev, weight: null }));
                }}
                placeholder="Enter Weight"
                clearValue={() => clearField("weight", setWeight)}
                error={errors.weight}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Unit</Text>
              <View style={styles.pickerContainer}>
                <Text style={{fontSize: 16, paddingHorizontal:30,paddingVertical:8, color: '#333'}}>
                  Ton
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.inputLabel}>Schedule your move</Text>

          <View style={styles.inputRow}>
            <View style={styles.field}>
              <Text style={styles.inputLabel}>Pickup Date</Text>
              <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setShowPickupDatePicker(true)}
              >
                <Text style={styles.pickerButtonText}>
                  {formatDate(selectedDate)}
                </Text>
              </TouchableOpacity>
              {showPickupDatePicker && (
                <DateTimePicker
                  value={selectedDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={(e, date) => {
                    setShowPickupDatePicker(false);
                    if (date) setSelectedDate(date);
                  }}
                />
              )}
            </View>

            <View style={styles.field}>
              <Text style={styles.inputLabel}>Pickup Time</Text>
              <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setShowPickupTimePicker(true)}
              >
                <Text style={styles.pickerButtonText}>
                  {formatTime(selectedTime)}
                </Text>
              </TouchableOpacity>
              {showPickupTimePicker && (
                <DateTimePicker
                  value={selectedTime || new Date()}
                  mode="time"
                  display="default"
                  onChange={(e, time) => {
                    setShowPickupTimePicker(false);
                    if (time) setSelectedTime(time);
                  }}
                />
              )}
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.field}>
              <Text style={styles.inputLabel}>Drop-off Date</Text>
              <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setShowDropoffDatePicker(true)}
              >
                <Text style={styles.pickerButtonText}>
                  {formatDate(dropoffDate)}
                </Text>
              </TouchableOpacity>
              {showDropoffDatePicker && (
                <DateTimePicker
                  value={dropoffDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={(e, date) => {
                    setShowDropoffDatePicker(false);
                    if (date) setDropoffDate(date);
                  }}
                />
              )}
            </View>

            <View style={styles.field}>
              <Text style={styles.inputLabel}>Drop-off Time</Text>
              <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setShowDropoffTimePicker(true)}
              >
                <Text style={styles.pickerButtonText}>
                  {formatTime(dropoffTime)}
                </Text>
              </TouchableOpacity>
              {showDropoffTimePicker && (
                <DateTimePicker
                  value={dropoffTime || new Date()}
                  mode="time"
                  display="default"
                  onChange={(e, time) => {
                    setShowDropoffTimePicker(false);
                    if (time) setDropoffTime(time);
                  }}
                />
              )}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.submitBtn} onPress={onConfirmLocation}>
          <Text style={styles.submitText}>Confirm</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SetMap;

const styles = StyleSheet.create({
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 10,
    maxHeight: '55%',
  },
  stopItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  stopIndicator: {
    alignItems: 'center',
    marginRight: 10,
    marginTop: 3,
  },
  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#ccc',
    marginVertical: 2,
  },
  stopLabel: {
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  field: {
    flex: 1,
    marginHorizontal: 5,
  },
  pickerButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerButtonText: {
    color: '#333',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  pickerContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 4,
  },
  submitBtn: {
    marginTop: 20,
    backgroundColor: '#005AA7',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
