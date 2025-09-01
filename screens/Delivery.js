import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Linking, SafeAreaView,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../components/TopBar';
import { DataSheet } from '../components/DataSheets'; 

const InfoRow = ({ label, value }) => (
  <View style={styles.gridItem}>
    <Text style={styles.gridLabel}>{label}</Text>
    <Text style={styles.gridValue}>{value}</Text>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const DeliveryScreen = () => {
  const {
    company,
    shipperNotes,
    references,
    commodity,
    appointment,
    amenities,
  } = DataSheet;

  const handleCall = () => Linking.openURL(`tel:${company.contact}`);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopBar title="Delivery" />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Company Info */}
                <View style={styles.companyInfo}>
                  <Text style={styles.companyName}>{company.name}</Text>
                  <View style={styles.rowBetween}>
                    <Text style={styles.address}>{company.address}</Text>
                    <Ionicons name="location" size={26} color="#1e3a8a" />
                  </View>
                </View>
        
                <View style={styles.separator} />
        
                {/* Shipper Notes */}
                <Section title="Shipper Notes">
                  <Text style={styles.sectionContent}>{shipperNotes}</Text>
                </Section>
        
                <View style={styles.separator} />
        
                {/* Reference Numbers */}
                <Section title="Reference Numbers">
                  <View style={styles.rowBetween}>
                    <InfoRow label="Purchase Order #" value={references.poNumber} />
                    <InfoRow label="Pickup #" value={references.pickupNumber} />
                  </View>
                </Section>
        
                <View style={styles.separator} />
        
                {/* Commodity */}
                <Section title="Commodity">
                  <View style={styles.gridContainer}>
                    <InfoRow label="Commodity" value={commodity.type} />
                    <InfoRow label="Weight" value={commodity.weight} />
                    <InfoRow label="Packaging" value={commodity.packaging} />
                    <InfoRow label="Packaging Count" value={commodity.packagingCount} />
                  </View>
                </Section>
        
                <View style={styles.separator} />
        
                {/* Appointment */}
                <Section title="Appointment">
                  <InfoRow label="Date" value={appointment.date} />
                </Section>
        
                <View style={styles.separator} />
        
                {/* Contact */}
                <Section title="Contact">
                  <Pressable style={styles.phoneRow} onPress={handleCall}>
                    <Text style={styles.phoneNumber}>{company.contact}</Text>
                    <TouchableOpacity style={styles.iconButton}>
                      <Ionicons name="call" size={20} color="white" />
                    </TouchableOpacity>
                  </Pressable>
                </Section>
        
                <View style={styles.separator} />
        
                {/* Amenities */}
                <Section title="Amenities">
                  <View style={styles.gridContainer}>
                    <InfoRow label="Restrooms" value={amenities.restrooms} />
                    <InfoRow label="On-site scale" value={amenities.onsiteScale} />
                    <InfoRow label="Food" value={amenities.food} />
                    <InfoRow label="Driver rest area" value={amenities.driverRestArea} />
                    <InfoRow label="Overnight parking" value={amenities.overnightParking} />
                    <InfoRow label="Fee" value={amenities.fee} />
                  </View>
                </Section>
        
              </ScrollView>
            </SafeAreaView>
          );
        };
        
        const styles = StyleSheet.create({
          safeArea: { flex: 1, backgroundColor: '#fff' },
          container: { paddingHorizontal: 16, paddingBottom: 30 },
          companyInfo: { marginTop: 20 },
          companyName: { fontSize: 20, fontWeight: 'bold', color: '#1e3a8a' },
          address: { marginTop: 8, color: 'gray', lineHeight: 18 },
          separator: { height: 1.5, backgroundColor: '#f2f3f5', marginVertical: 20 },
          rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          section: { marginTop: 10 },
          sectionTitle: { fontSize: 16, fontWeight: 'bold', color:"#1e3a8a", marginBottom: 8 },
          sectionContent: { color: 'gray', lineHeight: 20, color: '#333' },
          phoneRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          phoneNumber: { color: '#B30000', fontSize:16, fontWeight: 'bold' },
          gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
          gridItem: { width: '48%', marginBottom: 12 },
          gridLabel: { fontSize: 12, color: '#555', marginBottom: 2 },
          gridValue: { fontSize: 16, fontWeight: '600', color: '#B30000' },
          iconButton: {
            backgroundColor: '#B30000', 
            padding: 10,
            borderRadius: 25,
          },
        });

export default DeliveryScreen;
