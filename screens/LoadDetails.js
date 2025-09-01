import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../components/TopBar';
import map from '../images/map.png';

const tripData = [
  {
    id: '1',
    price: 'Rs. 5000',
    vehicle: 'Van - 500 kg',
    distance: '192 Mi',
    deadhead: '5 mi',
    pickup: 'New Baneshwor',
    pickupTime: 'Jan 29, 14.30',
    dropoff: 'Bhairahawa Customs',
    dropoffTime: 'Jan 29, 18.00',
  },
];

const commodityData = [
  { id: '1', title: 'Vehicle Type', vehicleName: '10 WL TRUCK' },
  { id: '2', title: 'Weight', vehicleName: '10 Tons' },
  { id: '3', title: 'Distance', vehicleName: '200 mi' },
];

const LoadDetails = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [rate, setRate] = useState('');
  const [rateType, setRateType] = useState('Fixed');
  const [negotiable, setNegotiable] = useState(false);
  const [availableNow, setAvailableNow] = useState(false);
  const [remarks, setRemarks] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Load Details" />
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image source={map} style={styles.mapImage} />

          {tripData.map((item) => (
            <View key={item.id} style={styles.tripContainer}>
              <View style={styles.tripRow}>
                <View style={styles.routeDots}>
                  <View style={styles.routeLine} />
                  <View style={styles.routeDot} />
                  <View style={styles.routeLineLong} />
                  <View style={styles.routeDot} />
                  <View style={styles.routeLine} />
                </View>

                <View style={styles.detailsColumn}>
                  <TouchableOpacity style={styles.pointContainer}>
                    <View style={styles.pointText}>
                      <Text style={styles.pointLabel}>Pickup</Text>
                      <Text style={styles.pointLocation}>{item.pickup}</Text>
                      <Text style={styles.pointTime}>{item.pickupTime}</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={24} color="#bbb" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.pointContainer}>
                    <View style={styles.pointText}>
                      <Text style={styles.pointLabel}>Delivery</Text>
                      <Text style={styles.pointLocation}>{item.dropoff}</Text>
                      <Text style={styles.pointTime}>{item.dropoffTime}</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={24} color="#bbb" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          <View style={styles.headerInfo}>
            <Text style={styles.titleText}>Other Details</Text>
          </View>

          <View style={styles.detailsGrid}>
            {Array.from({ length: Math.ceil(commodityData.length / 2) }).map((_, rowIndex) => (
              <View key={rowIndex} style={styles.detailRow}>
                {[0, 1].map((colIndex) => {
                  const itemIndex = rowIndex * 2 + colIndex;
                  const item = commodityData[itemIndex];
                  if (!item) return <View style={{ flex: 1 }} key={colIndex} />;
                  return (
                    <View key={item.id} style={[styles.detailItem, colIndex === 0 && { marginRight: 10 }]}>
                      <Text style={styles.pointLabel}>{item.title}</Text>
                      <Text style={styles.pointsubLabel}>{item.vehicleName}</Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bid Now Button */}
        <TouchableOpacity style={styles.bidNowButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.bidNowText}>Bid Now</Text>
        </TouchableOpacity>
      </View>

      {/* Bid Now Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pickup & Dropoff</Text>
            <Text style={styles.modalLocation}>New Baneshwor → Bhairahawa Customs</Text>

            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Enter your rate"
                keyboardType="numeric"
                value={rate}
                onChangeText={setRate}
              />
              <View style={styles.rateTypeContainer}>
                <TouchableOpacity
                  style={[
                    styles.rateTypeButton,
                    rateType === 'Fixed' && styles.selectedRateType,
                  ]}
                  onPress={() => setRateType('Fixed')}
                >
                  <Text style={rateType === 'Fixed' ? styles.selectedRateText : styles.rateText}>Fixed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.rateTypeButton,
                    rateType === 'PerTon' && styles.selectedRateType,
                  ]}
                  onPress={() => setRateType('PerTon')}
                >
                  <Text style={rateType === 'PerTon' ? styles.selectedRateText : styles.rateText}>Per Ton</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.checkboxRow}>
              <TouchableOpacity onPress={() => setNegotiable(!negotiable)} style={styles.checkboxContainer}>
                <Ionicons name={negotiable ? 'checkbox' : 'square-outline'} size={20} color="#000" />
                <Text style={styles.checkboxLabel}>Rate Negotiable</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setAvailableNow(!availableNow)} style={styles.checkboxContainer}>
                <Ionicons name={availableNow ? 'checkbox' : 'square-outline'} size={20} color="#000" />
                <Text style={styles.checkboxLabel}>Immediately Available</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.textArea}
              placeholder="Remarks"
              multiline
              numberOfLines={4}
              value={remarks}
              onChangeText={setRemarks}
            />

            <TouchableOpacity style={styles.submitButton} onPress={() => {
              console.log({ rate, rateType, negotiable, availableNow, remarks });
              setModalVisible(false);
            }}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  contentContainer: { flex: 1, position: 'relative' },
  scrollContent: { paddingBottom: 90 },
  mapImage: { width: '100%', height: 150, resizeMode: 'cover', marginTop: 10 },
  tripContainer: {
    backgroundColor: '#fff', padding: 16, marginHorizontal: 20,
    marginBottom: 14, borderRadius: 12, elevation: 2, marginTop: 20,
  },
  tripRow: { flexDirection: 'row', alignItems: 'flex-start' },
  routeDots: { flexDirection: 'column', alignItems: 'center', marginRight: 12 },
  routeLine: { height: 10, width: 2, backgroundColor: '#000' },
  routeLineLong: { height: 63, width: 2, backgroundColor: '#000' },
  routeDot: { height: 10, width: 10, borderRadius: 5, backgroundColor: '#000', marginVertical: 2 },
  detailsColumn: { flex: 1 },
  pointContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  pointText: { flex: 1 },
  pointLabel: { fontSize: 12, fontWeight: '600', color: '#111' },
  pointsubLabel: { fontSize: 16, fontWeight: '600', color: '#666', marginTop: 2 },
  pointLocation: { fontSize: 14, fontWeight: 'bold', color: 'grey', textTransform: 'uppercase' },
  pointTime: { fontSize: 10, color: 'grey', marginTop: 2, textTransform: 'uppercase' },
  headerInfo: { paddingHorizontal: 20, marginTop: 20, marginBottom: 10 },
  titleText: { fontSize: 18, fontWeight: 'bold', color: '#1e3a8a' },
  detailsGrid: { paddingHorizontal: 20 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  detailItem: { flex: 1 },
  bidNowButton: {
    position: 'absolute', bottom: 20, left: 20, right: 20,
    backgroundColor: '#B30000', paddingVertical: 14, borderRadius: 8,
    alignItems: 'center', elevation: 5,
    shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  bidNowText: { color: '#fff', fontSize: 14, fontWeight: '600', fontFamily: 'poppinsMedium' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContainer: { backgroundColor: '#fff', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  modalTitle: { fontSize: 16, fontWeight: 'bold', color: '#1e3a8a' },
  modalLocation: { fontSize: 14, color: '#555', marginBottom: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: {
    flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginRight: 10,
  },
  rateTypeContainer: { flexDirection: 'row' },
  rateTypeButton: {
    paddingVertical: 6, paddingHorizontal: 10, borderWidth: 1,
    borderColor: '#ccc', borderRadius: 6, marginLeft: 5,
  },
  selectedRateType: { backgroundColor: '#2563eb', borderColor: '#2563eb' },
  rateText: { color: '#555' },
  selectedRateText: { color: '#fff' },
  checkboxRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  checkboxLabel: { marginLeft: 6, fontSize: 13, color: '#333' },
  textArea: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginTop: 10, textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#B30000', paddingVertical: 12, marginTop: 20,
    borderRadius: 8, alignItems: 'center',
  },
  submitText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});

export default LoadDetails;
