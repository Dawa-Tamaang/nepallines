import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = ({ value, onChangeText, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, error && { borderColor: 'red' }]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}  
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
        <Ionicons name={showPassword ? "eye" : "eye-off"} size={22} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
    width: "90%",
    borderRadius: 5,
    borderColor: "lightgray",
    borderWidth: 1,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default PasswordInput;
