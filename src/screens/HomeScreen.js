import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import api from '../services/api';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Signup')}>
        <Text style={{ color: 'blue' }}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          api.Users.create('pedro2@teste.com', '123456', 'Pedro Augusto')
        }>
        <Text style={{ color: 'blue' }}>CREATE TEST USER</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
