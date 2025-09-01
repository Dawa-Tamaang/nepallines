// components/InputField.js
import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const InputField = ({ label, value, onChangeText, placeholder, clearValue, secureTextEntry, keyboardType="default", error }) => (
  <View>
    <Text style={styles.inputLabel}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, error && { borderColor: 'red' }]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {value.length > 0 && (
        <AntDesign
          onPress={clearValue}
          name="closecircle"
          size={20}
          color="gray"
          style={styles.iconButton}
        />
      )}
    </View>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);


const styles = StyleSheet.create({
  inputLabel: {
    color: "#B30000",
    fontFamily: "poppinsMedium",
    fontSize: 12,
    marginBottom: 4,
  },
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
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: 4,
  }
});

export default InputField;
