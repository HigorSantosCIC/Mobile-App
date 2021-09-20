import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerContent from '../components/DrawerContent';
import MyAnimals from '../screens/MyAnimals';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();

const LoggedNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyAnimals" component={MyAnimals} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default LoggedNavigator;
