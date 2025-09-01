import {SafeAreaView,ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import TopBar from '../components/TopBar'
const importExportCities = [
  "Kathmandu",
  "Birgunj",
  "Biratnagar",
  "Bhairahawa",
  "Nepalgunj",
  "Kakarbhitta",
  "Itahari",
  "Dhangadhi",
  "Hetauda",
  "Pokhara",
];
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const CitySetScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = importExportCities.filter(
      (city) =>
        city.toLowerCase().includes(text.toLowerCase()) &&
        !selectedCities.includes(city)
    );
    setResults(filtered);
  };

  const handleSelect = (city) => {
    if (!selectedCities.includes(city)) {
      setSelectedCities([...selectedCities, city]);
    }
    setQuery('');
    setResults([]);
  };

  const handleRemove = (city) => {
    setSelectedCities(selectedCities.filter((item) => item !== city));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <TopBar title="Choose your destination" />
      <View style={[styles.tripContainer, { marginTop: 20 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'start' }}>
          {/* Left Route Dots */}
          <View style={styles.routeDots}>
            <View style={styles.routeLine} />
            <View style={styles.routeDotpick} />
            <View style={styles.routeLineLong} />
            <View style={styles.routeDotdrop} />
            <View style={styles.routeLine} />
          </View>

          {/* Trip Details */}
          <View style={styles.detailsColumn}>
            {/* our location */}
            <TouchableOpacity>
              <View style={styles.pointRow}>
                <View style={styles.pointText}>
                  <Text style={styles.pointLabel}>Our Location</Text>
                  <Text style={styles.pointLocation}>Kathmandu</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Destination */}
            <TouchableOpacity onPress={() => navigation.navigate('cityset')}>
              <View style={styles.pointRow}>
                <View style={styles.pointText}>
                  <Text style={[styles.pointLabel, { marginTop: 10 }]}>
                    Destination
                  </Text>
                  <TextInput
                    placeholder={`Choose your destination`}
                    value={query}
                    onChangeText={handleSearch}
                    style={styles.input}
                  />
                  
                </View>
              </View>
            </TouchableOpacity>
            {/* Selected Cities Display */}
            <View style={styles.selectedList}>
              {selectedCities.map((city, index) => (
                <View key={index} style={styles.selectedItem}>
                  <Text style={styles.selectedText}>{city}</Text>
                  <TouchableOpacity onPress={() => handleRemove(city)}>
                    <Text style={styles.removeBtn}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.dropdown}>
        {results.map((city, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelect(city)}
            style={styles.resultItem}
          >
            <Text style={styles.resultText}>{city}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[styles.bottomButtons, { paddingBottom: bottom || 10 }]}>
        <Text
          onPress={() => navigation.navigate('truckmain')}
          style={{
            marginVertical: 20,
            backgroundColor: "#B30000",
            color: "#fff",
            paddingVertical: 12,
            width: "90%",
            textAlign: "center",
            borderRadius: 6,
            fontFamily: "poppinsMedium",
          }}
        >
          Search Now
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default CitySetScreen
const styles = StyleSheet.create({
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
    height: 40,
    width: 2,
    backgroundColor: '#000',
  },
  routeDotpick: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#28a745',
    marginVertical: 2,
  },
  routeDotdrop: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#B30000',
    marginVertical: 2,
  },
  detailsColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pointRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  pointText: {
    flexDirection: 'column',
    flex: 1,
  },
  pointLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: 'gray',
  },
  
  pointLocation: {
      fontSize: 13,
      color: '#14468d',
      fontWeight: 'bold',
      textTransform: 'uppercase',
  },
  input: {
  height: 44,
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 8,
  paddingHorizontal: 12,
  backgroundColor: "#fff",
  marginBottom: 12,
  marginTop: 5,
  fontFamily: "poppinsLight",
  },
  dropdown: {
    marginTop: 8,
    maxHeight: 200,
    paddingHorizontal: 20,
  },
  resultItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  selectedList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 8,
  },
  selectedItem: {
    flexDirection: 'row',
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 8,
    marginTop: 6,
  },
  selectedText: {
    fontSize: 14,
    color: '#14468d',
    marginRight: 6,
  },
  removeBtn: {
    color: '#B30000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomButtons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});