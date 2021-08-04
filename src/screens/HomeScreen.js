import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>Ir para página de login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
