import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import { useNavigation } from "@react-navigation/native";
import map from '../images/map.png';
import { Ionicons, Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
const MyOrderDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { order } = route.params;
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
    const CommodityData = [
    {
        id: '1',
        title: 'Traller',
        vehicleName: 'Van',
    },
    {
        id: '2',
        title: 'Commodity',
        vehicleName: 'Dry Foods',
    },
    {
        id: '3',
        title: 'Packaging type',
        vehicleName: '40 Pallets',
    },
    {
        id: '4',
        title: 'Weight',
        vehicleName: '42,000 lbs',
    },
  ];
  const LoadData = [
    {
        id: '1',
        title: 'Distance',
        vehicleName: '200 mi',
    },
    {
        id: '2',
        title: 'Deadhead',
        vehicleName: '6 mi',
    },
    {
        id: '3',
        title: 'Rate per Mile',
        vehicleName: 'Rs. 300 / mi',
    },
    {
        id: '4',
        title: 'Load ID#',
        vehicleName: '123456789',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <TopBar title={"My Order Details"} />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10 }}>
                <Image source={map} style={styles.mapImage} />
            </View>
            <View style={styles.containerRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{order.status}</Text>
                    <Text style={styles.text}>{order.date}</Text>
                </View>
                <View>
                    <Text
                    onPress={() => navigation.navigate('SetLocation')}
                    style={{
                        backgroundColor: "#B30000",
                        color: "#fff",
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        textAlign: "center",
                        borderRadius: 6,
                        fontFamily: "poppinsMedium",
                    }}
                    >
                    Tracking
                    </Text>
                </View>
            </View>

            {tripData.map((item) => (
            <View key={item.id} style={styles.tripContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'start' }}>
                    {/* Left Route Dots */}
                    <View style={styles.routeDots}>
                    <View style={styles.routeLine} />
                    <View style={styles.routeDot} />
                    <View style={styles.routeLineLong} />
                    <View style={styles.routeDot} />
                    </View>

                    {/* Trip Details */}
                    <View style={styles.detailsColumn}>
                    {/* Pickup */}
                    <TouchableOpacity onPress={() => navigation.navigate('pickup')}>
                        <View style={styles.pointRow}>
                        <View style={styles.pointText}>
                            <Text style={styles.pointLabel}>Pickup</Text>
                            <Text style={styles.pointTime}>{item.pickupTime}</Text>
                            <Text style={styles.pointLocation}>{item.pickup}</Text>
                        </View>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="#bbb"
                        />
                        </View>
                    </TouchableOpacity>

                    {/* Delivery */}
                    <TouchableOpacity onPress={() => navigation.navigate('delivery')}>
                        <View style={styles.pointRow}>
                        <View style={styles.pointText}>
                            <Text style={[styles.pointLabel, { marginTop: 10 }]}>
                            Delivery
                            </Text>
                            <Text style={styles.pointTime}>{item.dropoffTime}</Text>
                            <Text style={styles.pointLocation}>{item.dropoff}</Text>
                        </View>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="#bbb"
                        />
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                    <View style={styles.headerInfo}>
                        <Text style={styles.TitileText}>Commodity</Text>
                    </View>
                        {Array.from({ length: Math.ceil(CommodityData.length / 2) }).map((_, rowIndex) => (
                            <View
                            key={rowIndex}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 5,
                            }}
                            >
                            {[0, 1].map((colIndex) => {
                                const itemIndex = rowIndex * 2 + colIndex;
                                const item = CommodityData[itemIndex];
                                if (!item) return <View style={{ flex: 1 }} key={colIndex} />;
                                return (
                                <View key={item.id} style={{ flex: 1, marginRight: colIndex === 0 ? 10 : 0 }}>
                                    <Text style={styles.pointLabel}>{item.title}</Text>
                                    <Text style={[styles.pointsubLabel]}>
                                        {item.vehicleName}
                                    </Text>
                                </View>
                                );
                            })}
                            </View>
                        ))}
                        <View style={styles.headerInfo}>
                        <Text style={styles.TitileText}>Load</Text>
                        </View>
                        <View >
                        {Array.from({ length: Math.ceil(LoadData.length / 2) }).map((_, rowIndex) => (
                            <View
                            key={rowIndex}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 15,
                            }}
                            >
                            {[0, 1].map((colIndex) => {
                                const itemIndex = rowIndex * 2 + colIndex;
                                const item = LoadData[itemIndex];
                                if (!item) return <View style={{ flex: 1 }} key={colIndex} />;
                                return (
                                <View key={item.id} style={{ flex: 1, marginRight: colIndex === 0 ? 10 : 0 }}>
                                    <Text style={styles.pointLabel}>{item.title}</Text>
                                    <Text style={[styles.pointsubLabel, ]}>
                                    {item.vehicleName}
                                    </Text>
                                </View>
                                );
                            })}
                            </View>
                        ))}
                        </View>
                </View>
            ))}
            <View style={styles.contactContainer}>
                {/* Supplier */}
                <View style={styles.contactCard}>
                    <Text style={styles.contactLabel}>To Call Pickup Location</Text>
                    <Text style={styles.contactName}>Sean Parker</Text>
                    <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="call" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="message1" size={20} color="white" />
                    </TouchableOpacity>
                    </View>
                </View>

                {/* Dealer */}
                <View style={styles.contactCard}>
                    <Text style={styles.contactLabel}>To Call Delivery Location</Text>
                    <Text style={styles.contactName}>Jason Roy</Text>
                    <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="call" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="message1" size={20} color="white" />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.profileContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                    source={require('../images/profile.png')}
                    style={{ width: 70, height: 70, borderRadius: 10,  }}
                    />
                    <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#111' }}>Ajinder Bhattrai</Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>ID-123456</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10,marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                        <Text>Driving Experience</Text> <Text style={{ fontWeight: 'bold', color: '#111' }}>5 Years</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                        <Text>Vehicle Model</Text> <Text style={{ fontWeight: 'bold', color: '#111' }}>ZZ4257N324A1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                        <Text>Plate No</Text> <Text style={{ fontWeight: 'bold', color: '#111' }}>540932209458</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                        <Text>Rating</Text> 
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',gap: 4 }}>
                            <AntDesign name="star" size={12} color="#febf00" />
                            <Text style={{ fontWeight: 'bold', color: '#111' }}>4.5</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contactDriver}>
                    <View style={styles.iconRow}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="call" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <AntDesign name="message1" size={20} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="location" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default MyOrderDetails;

const styles = StyleSheet.create({
    mapImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        marginTop: 20,
        alignItems: "center",
        gap: 12,
        paddingHorizontal: 20,
    },
    
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
        TitileText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e3a8a',
    },
    tripContainer: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 20,
        marginBottom: 14,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
    routeDots: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 12,
    },
    routeLine: {
        height: 10,
        width: 2,
        backgroundColor: '#000',
    },
    routeLineLong: {
        height: 63,
        width: 2,
        backgroundColor: '#000',
    },
    routeDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        marginVertical: 2,
    },
    detailsColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    pointRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    pointText: {
        flexDirection: 'column',
        flex: 1,
    },
    pointLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#111',
    },
    pointsubLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#B30000',
    },
    pointTime: {
        fontSize: 12,
        color: 'grey',
        marginTop: 2,
        textTransform: 'uppercase',
    },
    pointLocation: {
        fontSize: 13,
        color: 'grey',
        textTransform: 'uppercase',
    },
    profileContainer:{
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginBottom: 14,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginBottom: 14,
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
        tabText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333",
    },
    activeTabText: {
        color: "#000000",
        fontWeight: "bold",
    },
    contactCard: {
        alignItems: 'flex-start',
        width: '40%',
    },
    contactDriver: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    contactLabel: {
        fontSize: 9,
        color: '#aaa',
        marginBottom: 4,
    },

    contactName: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    iconRow: {
        flexDirection: 'row',
        gap: 12,
    },

    iconButton: {
        backgroundColor: '#B30000', 
        padding: 10,
        borderRadius: 25,
    },

});