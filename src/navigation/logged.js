import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerContent from '../components/DrawerContent';
import MyAnimals from '../screens/MyAnimals';

const Drawer = createDrawerNavigator();

const LoggedNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyAnimals" component={MyAnimals} />
    </Drawer.Navigator>
  );
};

export default LoggedNavigator;
