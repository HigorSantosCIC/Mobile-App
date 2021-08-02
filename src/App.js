import 'react-native-gesture-handler';
import React from 'react';
import Navigator from "./navigation";
import {registerRootComponent} from 'expo';
import {theme} from "./constants/Theme";
import {ThemeProvider} from 'styled-components/native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator/>
    </ThemeProvider>
  );
}

export default registerRootComponent(App);