import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';

const Drawer = createDrawerNavigator();

const LoggedNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  );
};

export default LoggedNavigator;
