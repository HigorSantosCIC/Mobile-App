import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import Input from "../components/Input";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInside}>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha" style={{paddingTop: 15}}/>

        <TouchableHighlight style={{paddingTop: 20}}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerInside: {
    paddingTop: 50,
    paddingHorizontal: 20,
    width: '100%'
  },
});

export default LoginScreen