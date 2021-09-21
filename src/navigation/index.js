import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AdoptScreen from '../screens/AdoptScreen';
import LoggedNavigator from './logged';
import ShowAnimal from '../screens/ShowAnimal';
import { theme } from '../constants/Theme';
import MyAnimals from '../screens/MyAnimals';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            title: 'Cadastro Pessoal',
            headerStyle: { backgroundColor: theme.colors.primary },
          }}
        />
        <Stack.Screen
          name="Adopt"
          component={AdoptScreen}
          options={{
            title: 'Adotar',
          }}
        />
        <Stack.Screen
          name="Logged"
          component={LoggedNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowAnimal"
          component={ShowAnimal}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyAnimals" component={MyAnimals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
