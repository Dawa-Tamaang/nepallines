import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Picker } from 'react-native';

const PhoneNumberInput = ({ placeholder, onChangeText, ...rest }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  // Function to format phone number as the user types
  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters from input
    let formattedNumber = input.replace(/[^\d]/g, '');
    
    // Add dashes for better readability (e.g., 123-456-7890)
    if (formattedNumber.length > 3 && formattedNumber.length <= 6) {
      formattedNumber = formattedNumber.slice(0, 3) + '-' + formattedNumber.slice(3);
    } else if (formattedNumber.length > 6) {
      formattedNumber = formattedNumber.slice(0, 3) + '-' + formattedNumber.slice(3, 6) + '-' + formattedNumber.slice(6);
    }
    
    return formattedNumber;
  };

  // Handler for TextInput onChange event
  const handlePhoneNumberChange = (input) => {
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
    onChangeText && onChangeText(countryCode + formattedNumber);
  };

  // Handler for country code picker onChange event
  const handleCountryCodeChange = (code) => {
    setCountryCode(code);
    onChangeText && onChangeText(code + phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryCodeContainer}>
        <Picker
          style={styles.countryCodePicker}
          selectedValue={countryCode}
          onValueChange={handleCountryCodeChange}
        >
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+91" value="+91" />
            <Picker.Item label="+900" value="+977" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="phone-pad"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  countryCodeContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  countryCodePicker: {
    height: 40,
    width: 80,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default PhoneNumberInput;
