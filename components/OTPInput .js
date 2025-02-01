import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    setOTP(prevOTP => {
      const newOTP = [...prevOTP];
      newOTP[index] = value;
      return newOTP.join('');
    });

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 5,6].map(index => (
        <TextInput
          key={index}
          style={styles.input}
          onChangeText={text => handleOTPChange(index, text)}
          onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
          value={otp[index]}
          maxLength={1}
          keyboardType="numeric"
          ref={ref => inputRefs.current[index] = ref}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth:2,
    borderColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    borderColor:'#B30000',
    marginTop:50,
    
  },
});

export default OTPInput;
