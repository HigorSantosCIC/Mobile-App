import { Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Input from '../components/Input';

const LoginScreen = () => {
  return (
    <View>
      <View>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" style={{ paddingTop: 15 }} />

        <TouchableHighlight style={{ paddingTop: 20 }}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LoginScreen;
