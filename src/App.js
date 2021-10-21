import 'react-native-gesture-handler';
import firebase from 'firebase';
import apiKeys from '../config/keys';
import React from 'react';
import Navigator from './navigation';
import { registerRootComponent } from 'expo';
import { theme } from './constants/Theme';
import { ThemeProvider } from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';
import { AuthProvider } from './contexts/auth';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </ThemeProvider>
    );
  }
};

export default registerRootComponent(App);
