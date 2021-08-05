import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigation';
import { registerRootComponent } from 'expo';
import { theme } from './constants/Theme';
import { ThemeProvider } from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    );
  }
};

export default registerRootComponent(App);
