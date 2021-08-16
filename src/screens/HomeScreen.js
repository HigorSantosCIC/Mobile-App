import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import api from '../services/api';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>Ir para página de login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          api.Users.create('pedro2@teste.com', '123456', 'Pedro Augusto')
        }>
        <Text style={{ color: 'blue' }}>Criar user de teste</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
