import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import api from '../services/api';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>Ir para página de login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Cadastro')}>
        <Text style={{ color: 'blue' }}>
          Ir para página de cadastro de animais
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      // onPress={
      //   (() => api.Users.create('pedro2@teste.com', '123456', 'Pedro Augusto'),
      //   api.Users.create('higorsantos@teste.com', '123456', 'Higor Santos'))
      // }
      >
        <Text style={{ color: 'blue' }}>Criar user de teste</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
