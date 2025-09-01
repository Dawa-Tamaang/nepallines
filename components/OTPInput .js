import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = ({ value, setValue, error, onComplete }) => {
  const inputRefs = useRef([]);

  const handleOTPChange = (index, text) => {
    const otpArray = value.split('');
    otpArray[index] = text;
    const newOTP = otpArray.join('');
    setValue(newOTP);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    if (newOTP.length === 4) {
      onComplete?.(newOTP);
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && !value[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3].map(index => (
        <TextInput
          key={index}
          style={[styles.input, error && { borderColor: 'red' }]}  // Apply error styles
          onChangeText={text => handleOTPChange(index, text)}
          onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
          value={value[index] || ''}
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
    paddingHorizontal: 40,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "lightgray",  
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
});

export default OTPInput;
