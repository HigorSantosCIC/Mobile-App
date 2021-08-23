import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Signup')}>
        <Text style={{ color: 'blue' }}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Cadastro')}>
        <Text style={{ color: 'blue' }}>
          Ir para página de cadastro de animais
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
