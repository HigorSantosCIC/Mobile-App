import 'react-native-gesture-handler';
import React from 'react';
import Navigator from "./navigation";
import {registerRootComponent} from 'expo';

const App = () => {
  return (
    <Navigator/>
  );
}

export default registerRootComponent(App);