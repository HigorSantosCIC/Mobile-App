import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonMain from '../components/Button/index.js';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Go edit your App.js but before that, look at this amazing button
      </Text>
      <ButtonMain> Generic Button </ButtonMain>
      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <Text style={{ color: 'blue' }}>Ir para página de login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
