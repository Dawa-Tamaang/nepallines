import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'lightgray', borderWidth: 1, paddingHorizontal: 10, fontSize: 14, width: '90%',borderRadius: 5,}}
        placeholder="Enter Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        {showPassword ? (
          <AntDesign name="eye" size={24} color="black" style={{marginLeft:10}} />
        ) : (
          <AntDesign name="eyeo" size={24} color="black" style={{marginLeft:10}} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
