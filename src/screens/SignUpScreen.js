import { Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Input from '../components/Input';

const SignUpScreen = () => {
  return (
    <View>
      <View>
        <Input placeholder="Nome Completo" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" style={{ paddingTop: 15 }} />

        <TouchableHighlight style={{ paddingTop: 20 }}>
          <Text>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SignUpScreen;
